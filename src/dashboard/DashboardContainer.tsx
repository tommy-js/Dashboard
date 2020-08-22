import React, { useState } from "react";
import { Route } from "react-router-dom";
import DashboardData from "./DashboardData";
import DashboardTopMenu from "./DashboardTopMenu";
import DashboardEdit from "./DashboardEdit";
import DataRenderer from "./DataRenderer";

const DashboardContainer: React.FC = () => {
  const [userEdit, setUserEdit] = useState(false);
  const [bandEdit, setBandEdit] = useState(false);

  const testUserData = [
    { text: "Tommy", id: 0 },
    { text: "John", id: 1 },
    { text: "James", id: 3 },
    { text: "Aaron", id: 4 },
    { text: "Tim", id: 5 },
    { text: "Nora", id: 6 },
    { text: "CJ", id: 7 },
    { text: "EW", id: 8 },
  ];

  const testGroupData = [
    { text: "Led Zepellin", id: 0 },
    { text: "Grateful Dead", id: 1 },
  ];

  function returnUserEdit() {
    setUserEdit(true);
    console.log("passed user");
  }

  function returnBandEdit() {
    setBandEdit(true);
  }

  return (
    <div id="dashboard_container">
      <Route path="/users">
        <DataRenderer
          data={testUserData}
          render={userEdit}
          returnEdit={returnUserEdit}
        />
      </Route>
      <Route path="/bands">
        <DataRenderer
          data={testGroupData}
          render={bandEdit}
          returnEdit={returnBandEdit}
        />
      </Route>
    </div>
  );
};

export default DashboardContainer;
