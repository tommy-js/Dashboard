import React, { useState, createContext } from "react";
import Homepage from "../homepage/Homepage";
import Login from "../login/Login";
import SettingsPage from "../settings/SettingsPage";
import "./app.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";

export const loginContext = createContext<any>({});
export const userContext = createContext<any>({});

function App() {
  const [loginState, setLoginState] = useState<any>(false);
  const [userState, setUserState] = useState<any>({
    username: "",
    password: "",
  });

  function checkLoginStatus() {
    if (loginState === true) {
      return (
        <Route path="/">
          <Homepage />
        </Route>
      );
    } else {
      return (
        <Route path="/">
          <Login />
        </Route>
      );
    }
  }

  return (
    <userContext.Provider value={{ userState, setUserState }}>
      <loginContext.Provider value={{ loginState, setLoginState }}>
        <Router>
          <Route exact path="/settings">
            <SettingsPage />
          </Route>
          <div className="App">{checkLoginStatus()}</div>
        </Router>
      </loginContext.Provider>
    </userContext.Provider>
  );
}

export default App;
