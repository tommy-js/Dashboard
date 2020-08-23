import React, { useState } from "react";
import { Route } from "react-router-dom";
import DashboardData from "./DashboardData";
import DashboardTopMenu from "./DashboardTopMenu";
import { UserDataRenderer, StockDataRenderer } from "./DataRenderer";

const DashboardContainer: React.FC = () => {
  const [userEdit, setUserEdit] = useState(false);
  const [stockEdit, setStockEdit] = useState(false);
  const [editUserData, setEditUserData] = useState({
    username: "",
    accountStatus: "",
    membership: "",
    time: 0,
    id: 0,
  });
  const [editStockData, setEditStockData] = useState({
    title: "",
    ticker: "",
    id: 0,
  });
  const [id, setId] = useState(0);

  const testUserData = [
    {
      text: "Tommy",
      accountStatus: "active",
      membership: "Basic",
      time: 1310303,
      id: 0,
    },
    {
      text: "John",
      accountStatus: "disabled",
      membership: "Free",
      time: 53523532,
      id: 1,
    },
    {
      text: "James",
      accountStatus: "suspended",
      membership: "Premium",
      time: 5324324324,
      id: 3,
    },
    {
      text: "Aaron",
      accountStatus: "suspended",
      membership: "Free",
      time: 323231,
      id: 4,
    },
    {
      text: "Tim",
      accountStatus: "active",
      membership: "Free",
      time: 656575,
      id: 5,
    },
    {
      text: "Nora",
      accountStatus: "disabled",
      membership: "Free",
      time: 335352,
      id: 6,
    },
    {
      text: "CJ",
      accountStatus: "active",
      membership: "Basic",
      time: 3434567,
      id: 7,
    },
    {
      text: "EW",
      accountStatus: "active",
      membership: "Premium",
      time: 45466677,
      id: 8,
    },
  ];

  const testStockData = [
    { text: "Apple", ticker: "AAPL", id: 0 },
    { text: "Tesla", ticker: "TSLA", id: 1 },
  ];

  function returnUserEdit(id: number) {
    console.log(id);
    let val = testUserData.find((el) => el.id === id);
    if (val) {
      let index = testUserData.indexOf(val);
      let obj = testUserData[index];
      setEditUserData({
        username: obj.text,
        accountStatus: obj.accountStatus,
        membership: obj.membership,
        time: obj.time,
        id: obj.id,
      });
    }
    setId(id);
    setUserEdit(true);
    console.log("passed user");
  }

  function returnStockEdit(id: number) {
    console.log(id);
    let val = testStockData.find((el) => el.id === id);
    if (val) {
      let index = testStockData.indexOf(val);
      let obj = testStockData[index];
      setEditStockData({
        title: obj.text,
        ticker: obj.ticker,
        id: obj.id,
      });
    }
    setId(id);
    setStockEdit(true);
  }

  function exitFormUsers() {
    setUserEdit(false);
  }

  function exitFormStock() {
    setStockEdit(false);
  }

  return (
    <div id="dashboard_container">
      <Route path="/users">
        <UserDataRenderer
          data={testUserData}
          render={userEdit}
          returnEdit={returnUserEdit}
          exitForm={exitFormUsers}
          id={id}
          editData={editUserData}
        />
      </Route>
      <Route path="/bands">
        <StockDataRenderer
          data={testStockData}
          render={stockEdit}
          returnEdit={returnStockEdit}
          exitForm={exitFormStock}
          id={id}
          editData={editStockData}
        />
      </Route>
    </div>
  );
};

export default DashboardContainer;
