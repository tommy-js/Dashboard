import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import DashboardData from "./DashboardData";
import DashboardTopMenu from "./DashboardTopMenu";
import { UserDataRenderer, StockDataRenderer } from "./DataRenderer";
import { usersQuery } from "../queries/queries.js";
import { flowRight as compose } from "lodash";
import { graphql, useQuery } from "react-apollo";

const DashboardContainer: React.FC = () => {
  const { loading, data } = useQuery(usersQuery);
  const [loadedImage, setLoadedImage] = useState(false);
  const [renderData, setRenderData] = useState([
    {
      userId: 0,
      money: 0,
      username: "",
      accountStatus: "",
      membership: "",
      time: 0,
    },
  ]);
  const [userEdit, setUserEdit] = useState(false);
  const [stockEdit, setStockEdit] = useState(false);
  const [editUserData, setEditUserData] = useState({
    username: "",
    accountStatus: "",
    membership: "",
    time: 0,
    id: 0,
    money: 0,
  });
  const [editStockData, setEditStockData] = useState({
    title: "",
    ticker: "",
    description: "",
    id: 0,
  });
  const [id, setId] = useState(0);

  // const testUserData = [
  //   {
  //     text: "Tommy",
  //     accountStatus: "active",
  //     membership: "Basic",
  //     time: 1310303,
  //     id: 0,
  //   },
  //   {
  //     text: "John",
  //     accountStatus: "disabled",
  //     membership: "Free",
  //     time: 53523532,
  //     id: 1,
  //   },
  //   {
  //     text: "James",
  //     accountStatus: "suspended",
  //     membership: "Premium",
  //     time: 5324324324,
  //     id: 3,
  //   },
  //   {
  //     text: "Aaron",
  //     accountStatus: "suspended",
  //     membership: "Free",
  //     time: 323231,
  //     id: 4,
  //   },
  //   {
  //     text: "Tim",
  //     accountStatus: "active",
  //     membership: "Free",
  //     time: 656575,
  //     id: 5,
  //   },
  //   {
  //     text: "Nora",
  //     accountStatus: "disabled",
  //     membership: "Free",
  //     time: 335352,
  //     id: 6,
  //   },
  //   {
  //     text: "CJ",
  //     accountStatus: "active",
  //     membership: "Basic",
  //     time: 3434567,
  //     id: 7,
  //   },
  //   {
  //     text: "EW",
  //     accountStatus: "active",
  //     membership: "Premium",
  //     time: 45466677,
  //     id: 8,
  //   },
  // ];

  useEffect(() => {
    if (data) {
      setLoadedImage(true);
      setRenderData(data.users);
      console.log(data.users);
    }
  }, [data]);

  const testStockData = [
    {
      text: "Apple",
      ticker: "AAPL",
      description: "Built by Apple in California",
      id: 0,
    },
    {
      text: "Tesla",
      ticker: "TSLA",
      description: "Tesla roadster is the next big thing...",
      id: 1,
    },
  ];

  function returnUserEdit(id: number) {
    if (data) {
      let val = renderData.find((el) => el.userId === id);
      if (val) {
        let index = renderData.indexOf(val);
        let obj = renderData[index];
        setEditUserData({
          username: obj.username,
          accountStatus: obj.accountStatus,
          membership: obj.membership,
          time: obj.time,
          id: obj.userId,
          money: obj.money,
        });
      }
    }
    setId(id);
    setUserEdit(true);
    console.log("passed user");
  }

  function returnStockEdit(id: number) {
    let val = testStockData.find((el) => el.id === id);
    if (val) {
      let index = testStockData.indexOf(val);
      let obj = testStockData[index];
      setEditStockData({
        title: obj.text,
        ticker: obj.ticker,
        description: obj.description,
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

  function renderUsers() {
    if (loadedImage) {
      return (
        <Route path="/home/users">
          <UserDataRenderer
            data={renderData}
            render={userEdit}
            returnEdit={returnUserEdit}
            exitForm={exitFormUsers}
            id={id}
            editData={editUserData}
          />
        </Route>
      );
    } else {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
  }

  return (
    <div id="dashboard_container">
      {renderUsers()}
      <Route path="/home/stocks">
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
