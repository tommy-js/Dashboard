import React from "react";
import NavBar from "../navigation/NavBar";
import Sidebar from "./Sidebar";
import DashboardContainer from "./DashboardContainer";

const Dashboard: React.FC = () => {
  return (
    <div id="dashboard">
      <NavBar />
      <Sidebar />
      <DashboardContainer />
    </div>
  );
};

export default Dashboard;
