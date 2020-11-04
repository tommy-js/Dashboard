import React, { useState, createContext } from "react";
import Homepage from "../homepage/Homepage";
import Login from "../login/Login";
import SettingsPage from "../settings/SettingsPage";
import PrivilegesPage from "../privileges/PrivilegesPage";
import "./app.scss";
import { Router, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

export const browserHist = createBrowserHistory();

export const loginContext = createContext<any>({});
export const userContext = createContext<any>({});

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

interface UserState {
  username: string;
  password: string;
  employeeId: number;
  permissions: string;
}

function App() {
  const [loginState, setLoginState] = useState<any>(false);
  const [userState, setUserState] = useState<UserState>({
    username: "",
    password: "",
    employeeId: 0,
    permissions: "",
  });

  function checkLoginStatus() {
    if (loginState === true) {
      return <Redirect to="/home/stocks" />;
    }
  }

  return (
    <ApolloProvider client={client}>
      <userContext.Provider value={{ userState, setUserState }}>
        <loginContext.Provider value={{ loginState, setLoginState }}>
          <Router history={browserHist}>
            <Route path="/home">
              <Homepage />
            </Route>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/settings">
              <SettingsPage />
            </Route>
            <Route exact path="/privileges">
              <PrivilegesPage />
            </Route>
            <div className="App">{checkLoginStatus()}</div>
          </Router>
        </loginContext.Provider>
      </userContext.Provider>
    </ApolloProvider>
  );
}

export default App;
