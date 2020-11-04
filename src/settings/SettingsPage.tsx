import React, { useEffect, useState, useContext } from "react";
import InnerSettingsPage from "./InnerSettingsPage";
import NavBar from "../navigation/NavBar";
import { loginContext, userContext } from "../appmain/App";
import { Redirect } from "react-router-dom";

const SettingsPage: React.FC = () => {
  const { loginState, setLoginState } = useContext(loginContext);
  const { userState, setUserState } = useContext(userContext);

  function checkLoginStatus() {
    if (loginState === true) {
      return (
        <div>
          <NavBar />
          <InnerSettingsPage
            employeeId={userState.employeeId}
            username={userState.username}
            password={userState.password}
            permissions={userState.permissions}
          />
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }

  return <div>{checkLoginStatus()}</div>;
};

export default SettingsPage;
