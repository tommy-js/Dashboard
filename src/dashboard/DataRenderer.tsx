import React, { useState } from "react";
import { UserDashboardEdit, StockDashboardEdit } from "./DashboardEdit";
import { UserCreationPage, StockCreationPage } from "./CreationPage";
import DashboardTopMenu from "./DashboardTopMenu";
import DashboardData from "./DashboardData";

interface Stock {
  render: boolean;
  data: any;
  editData: {
    title: string;
    ticker: string;
    description: string;
    id: number;
  };
  id: number;
  returnEdit: (id: number) => void;
  exitForm: () => void;
}

interface User {
  render: boolean;
  data: any;
  id: number;
  editData: {
    username: string;
    accountStatus: string;
    membership: string;
    time: number;
  };
  returnEdit: (id: number) => void;
  exitForm: () => void;
}

export const UserDataRenderer: React.FC<User> = (props) => {
  const [userCreation, setUserCreation] = useState(false);
  const [creationParam, setCreationParam] = useState("");

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
      if (props.render === true) {
        console.log("user edit");
        return (
          <div>
            <UserDashboardEdit
              editData={props.editData}
              id={props.id}
              exitForm={props.exitForm}
            />
          </div>
        );
      } else {
        return (
          <div>
            <DashboardTopMenu
              placeholder="Username"
              type="User"
              createFunc={createUser}
            />
            <DashboardData
              returnEditPage={props.returnEdit}
              data={props.data}
            />
          </div>
        );
      }
    }
  }
  return <div>{pageEdit()}</div>;
};

export const StockDataRenderer: React.FC<Stock> = (props) => {
  const [stockCreation, setStockCreation] = useState(false);
  const [creationParam, setCreationParam] = useState("");

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
      if (props.render === true) {
        console.log("user edit");
        return (
          <div>
            <StockDashboardEdit
              editData={props.editData}
              id={props.id}
              exitForm={props.exitForm}
            />
          </div>
        );
      } else {
        return (
          <div>
            <DashboardTopMenu
              placeholder="Stock Ticker"
              type="Stock"
              createFunc={createStock}
            />
            <DashboardData
              returnEditPage={props.returnEdit}
              data={props.data}
            />
          </div>
        );
      }
    }
  }
  return <div>{pageEdit()}</div>;
};
