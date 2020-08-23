import React from "react";
import { UserDashboardEdit, StockDashboardEdit } from "./DashboardEdit";
import DashboardTopMenu from "./DashboardTopMenu";
import DashboardData from "./DashboardData";

interface Stock {
  render: boolean;
  data: any;
  editData: {
    title: string;
    ticker: string;
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
  function pageEdit() {
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
          <DashboardTopMenu placeholder="Username" />
          <DashboardData returnEditPage={props.returnEdit} data={props.data} />
        </div>
      );
    }
  }
  return <div>{pageEdit()}</div>;
};

export const StockDataRenderer: React.FC<Stock> = (props) => {
  function pageEdit() {
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
          <DashboardTopMenu placeholder="Username" />
          <DashboardData returnEditPage={props.returnEdit} data={props.data} />
        </div>
      );
    }
  }
  return <div>{pageEdit()}</div>;
};
