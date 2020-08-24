import React, { useEffect, useState, useContext } from "react";
import NavBar from "../navigation/NavBar";
import Sidebar from "./Sidebar";
import DashboardContainer from "./DashboardContainer";
import { loginContext, browserHist } from "../appmain/App";
import { Redirect } from "react-router-dom";

const Dashboard: React.FC = () => {
  const { loginState, setLoginState } = useContext(loginContext);

  function checkLogin() {
    console.log(loginState);
    if (loginState === true) {
      return (
        <div id="dashboard">
          <NavBar />
          <Sidebar />
          <DashboardContainer />
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }

  return <div>{checkLogin()}</div>;
};

export default Dashboard;
