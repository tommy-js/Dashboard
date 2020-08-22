import React, { useState } from "react";
import { Route } from "react-router-dom";
import DashboardData from "./DashboardData";
import DashboardTopMenu from "./DashboardTopMenu";
import DashboardEdit from "./DashboardEdit";
import DataRenderer from "./DataRenderer";

const DashboardContainer: React.FC = () => {
  const [userEdit, setUserEdit] = useState(false);
  const [bandEdit, setBandEdit] = useState(false);
  const [editData, setEditData] = useState({
    username: "",
    accountStatus: "",
    id: 0,
  });
  const [id, setId] = useState(0);

  const testUserData = [
    { text: "Tommy", accountStatus: "active", id: 0 },
    { text: "John", accountStatus: "disabled", id: 1 },
    { text: "James", accountStatus: "suspended", id: 3 },
    { text: "Aaron", accountStatus: "suspended", id: 4 },
    { text: "Tim", accountStatus: "active", id: 5 },
    { text: "Nora", accountStatus: "disabled", id: 6 },
    { text: "CJ", accountStatus: "active", id: 7 },
    { text: "EW", accountStatus: "active", id: 8 },
  ];

  const testGroupData = [
    { text: "Led Zepellin", id: 0 },
    { text: "Grateful Dead", id: 1 },
  ];

  function returnUserEdit(id: number) {
    console.log(id);
    let val = testUserData.find((el) => el.id === id);
    if (val) {
      let index = testUserData.indexOf(val);
      let obj = testUserData[index];
      setEditData({
        username: obj.text,
        accountStatus: obj.accountStatus,
        id: obj.id,
      });
    }
    setId(id);
    setUserEdit(true);
    console.log("passed user");
  }

  function returnBandEdit(id: number) {
    console.log(id);
    setId(id);
    setBandEdit(true);
  }

  function exitFormUsers() {
    setUserEdit(false);
  }

  function exitFormGroup() {
    setBandEdit(false);
  }

  return (
    <div id="dashboard_container">
      <Route path="/users">
        <DataRenderer
          data={testUserData}
          render={userEdit}
          returnEdit={returnUserEdit}
          exitForm={exitFormUsers}
          id={id}
          editData={editData}
        />
      </Route>
      <Route path="/bands">
        <DataRenderer
          data={testGroupData}
          render={bandEdit}
          returnEdit={returnBandEdit}
          exitForm={exitFormGroup}
          id={id}
          editData={editData}
        />
      </Route>
    </div>
  );
};

export default DashboardContainer;
