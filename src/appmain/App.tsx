import React, { useState, createContext } from "react";
import Homepage from "../homepage/Homepage";
import Login from "../login/Login";
import SettingsPage from "../settings/SettingsPage";
import "./app.scss";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

export const browserHist = createBrowserHistory();

export const loginContext = createContext<any>({});
export const userContext = createContext<any>({});

function App() {
  const [loginState, setLoginState] = useState<any>(false);
  const [userState, setUserState] = useState<any>({
    username: "",
    password: "",
    employeeId: "",
    privileges: "",
  });

  function checkLoginStatus() {
    if (loginState === true) {
      browserHist.push("/home");
      return (
        <Route exact path="/home">
          <Homepage />
        </Route>
      );
    } else {
      return (
        <Route exact path="/">
          <Login />
        </Route>
      );
    }
  }

  return (
    <userContext.Provider value={{ userState, setUserState }}>
      <loginContext.Provider value={{ loginState, setLoginState }}>
        <Router history={browserHist}>
          <Route exact path="/settings">
            <SettingsPage userState={userState} />
          </Route>
          <div className="App">{checkLoginStatus()}</div>
        </Router>
      </loginContext.Provider>
    </userContext.Provider>
  );
}

export default App;
