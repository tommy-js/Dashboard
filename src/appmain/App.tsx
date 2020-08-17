import React, { useState, createContext } from "react";
import Homepage from "../homepage/Homepage";
import Login from "../login/Login";
import "./App.css";

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
      return <Homepage />;
    } else {
      return <Login />;
    }
  }

  return (
    <userContext.Provider value={{ userState, setUserState }}>
      <loginContext.Provider value={{ loginState, setLoginState }}>
        <div className="App">{checkLoginStatus()}</div>
      </loginContext.Provider>
    </userContext.Provider>
  );
}

export default App;
