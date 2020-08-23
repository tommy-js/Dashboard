import React from "react";
import ButtonField from "../login/ButtonField";
import DropdownElement from "./DropdownElement";
import NotificationBlock from "./NotificationBlock";

interface Stock {
  id: number;
  editData: {
    title: string;
    ticker: string;
    id: number;
  };
  exitForm: () => void;
}

interface User {
  id: number;
  editData: {
    username: string;
    accountStatus: string;
    membership: string;
    time: number;
  };
  exitForm: () => void;
}

export const UserDashboardEdit: React.FC<User> = (props) => {
  const membership = [
    { text: "Free", id: 0 },
    { text: "Basic", id: 1 },
    { text: "Premium", id: 2 },
  ];

  const accountStatus = [
    { text: "Active", id: 0 },
    { text: "Suspended", id: 1 },
    { text: "Disabled", id: 2 },
  ];

  function validateAndSubmit(id: number) {}

  return (
    <div>
      <ButtonField id={props.id} text="Exit" submitForm={props.exitForm} />
      <h1>{props.editData.username}</h1>
      <DropdownElement
        text="Membership: "
        options={membership}
        status={props.editData.membership}
      />
      <DropdownElement
        text="Account Status: "
        options={accountStatus}
        status={props.editData.accountStatus}
      />
      <p>Member since {props.editData.time}</p>
      <NotificationBlock />
      <ButtonField id={props.id} text="Submit" submitForm={validateAndSubmit} />
    </div>
  );
};

export const StockDashboardEdit: React.FC<Stock> = (props) => {
  return (
    <div>
      <h1>Hello stocks</h1>
    </div>
  );
};
