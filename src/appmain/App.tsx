import React, { useState, createContext } from "react";
import Homepage from "../homepage/Homepage";
import Login from "../login/Login";
import "./App.css";

export const loginContext = createContext<any>({});

function App() {
  const [loginState, setLoginState] = useState<any>(false);

  function checkLoginStatus() {
    if (loginState === true) {
      return <Homepage />;
    } else {
      return <Login />;
    }
  }

  return (
    <loginContext.Provider value={{ loginState, setLoginState }}>
      <div className="App">{checkLoginStatus()}</div>
    </loginContext.Provider>
  );
}

export default App;
