import React, { useEffect, useState, useContext } from "react";
import { UserDashboardEdit, StockDashboardEdit } from "./DashboardEdit";
import { UserCreationPage, StockCreationPage } from "./CreationPage";
import DashboardTopMenu from "./DashboardTopMenu";
import DashboardData from "./DashboardData";
import { loginContext, browserHist } from "../appmain/App";
import { usersQuery, stockQuery } from "../queries/queries.js";
import { flowRight as compose } from "lodash";
import { graphql, useQuery } from "react-apollo";

export const UserDataRenderer: React.FC = () => {
  const { loading, data } = useQuery(usersQuery);
  const [loadedImage, setLoadedImage] = useState(false);
  const [renderData, setRenderData] = useState([
    {
      username: "",
      userId: 0,
      accountStatus: "",
      membership: "",
      money: 0,
      time: 0,
    },
  ]);
  const { loginState, setLoginState } = useContext(loginContext);
  const [userCreation, setUserCreation] = useState(false);
  const [creationParam, setCreationParam] = useState("");
  const [id, setId] = useState(0);
  const [userEdit, setUserEdit] = useState(false);
  const [editData, setEditData] = useState({
    username: "",
    userId: 0,
    accountStatus: "",
    membership: "",
    money: 0,
    time: 0,
  });

  useEffect(() => {
    if (data) {
      setLoadedImage(true);
      setRenderData(data.users);
      console.log(data.users);
    }
  }, [data]);

  function returnUserEdit(id: number) {
    if (data) {
      let val = renderData.find((el) => el.userId === id);
      if (val) {
        let index = renderData.indexOf(val);
        let obj = renderData[index];
        setEditData({
          username: obj.username,
          accountStatus: obj.accountStatus,
          membership: obj.membership,
          time: obj.time,
          userId: obj.userId,
          money: obj.money,
        });
      }
    }
    setId(id);
    setUserEdit(true);
    console.log("passed user");
  }

  function exitFormUsers() {
    setUserEdit(false);
  }

  function createUser(val: string) {
    setUserCreation(true);
    setCreationParam(val);
  }

  function exitUserCreation() {
    setUserCreation(false);
  }

  function pageEdit() {
    if (userCreation === true) {
      return (
        <div>
          <UserCreationPage
            username={creationParam}
            exitUserCreation={exitUserCreation}
          />
        </div>
      );
    } else if (userCreation === false) {
      if (userEdit === true) {
        return (
          <div>
            <UserDashboardEdit
              editData={editData}
              id={id}
              exitForm={exitFormUsers}
            />
          </div>
        );
      } else {
        if (data) {
          return (
            <div>
              <DashboardTopMenu
                searchbarPlaceholder="User"
                type="User"
                elementPlaceholder="Username"
                createFunc={createUser}
              />
              <DashboardData
                returnEditPage={returnUserEdit}
                data={renderData}
              />
            </div>
          );
        } else {
          return (
            <div>
              <h2>Loading...</h2>
            </div>
          );
        }
      }
    }
  }
  return <div>{pageEdit()}</div>;
};

export const StockDataRenderer: React.FC = () => {
  const { loading, data } = useQuery(stockQuery);
  const [stockCreation, setStockCreation] = useState(false);
  const [creationParam, setCreationParam] = useState("");
  const [stockData, setStockData] = useState([
    {
      title: "",
      ticker: "",
      description: "",
      id: 0,
    },
  ]);
  const [editStockData, setEditStockData] = useState({
    title: "",
    ticker: "",
    description: "",
    id: 0,
  });
  const [stockEdit, setStockEdit] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    if (data) {
      setStockData(data.stocks);
      console.log(data);
    }
  }, [data]);

  function returnStockEdit(id: number) {
    let val = stockData.find((el) => el.id === id);
    if (val) {
      let index = stockData.indexOf(val);
      let obj = stockData[index];
      setEditStockData({
        title: obj.title,
        ticker: obj.ticker,
        description: obj.description,
        id: obj.id,
      });
    }
    setId(id);
    setStockEdit(true);
  }

  function exitFormStock() {
    setStockEdit(false);
  }

  function createStock(val: string) {
    setStockCreation(true);
    setCreationParam(val);
  }

  function exitStockCreation() {
    setStockCreation(false);
  }

  function pageEdit() {
    if (stockCreation === true) {
      return (
        <div>
          <StockCreationPage
            title={creationParam}
            exitStockCreation={exitStockCreation}
          />
        </div>
      );
    } else if (stockCreation === false) {
      if (stockEdit === true) {
        console.log("user edit");
        return (
          <div>
            <StockDashboardEdit
              editData={editStockData}
              id={id}
              exitForm={exitFormStock}
            />
          </div>
        );
      } else {
        if (data) {
          return (
            <div>
              <DashboardTopMenu
                searchbarPlaceholder="Stock Ticker"
                type="Stock"
                elementPlaceholder="Ticker"
                createFunc={createStock}
              />
              <DashboardData
                returnEditPage={returnStockEdit}
                data={stockData}
              />
            </div>
          );
        } else {
          return (
            <div>
              <h2>Loading...</h2>
            </div>
          );
        }
      }
    }
  }
  return <div>{pageEdit()}</div>;
};
