import React, { useState } from "react";
import ButtonField from "../login/ButtonField";
import DropdownElement from "./DropdownElement";
import NotificationBlock from "./NotificationBlock";
import TextareaBlock from "./TextareaBlock";

interface Stock {
  id: number;
  editData: {
    title: string;
    ticker: string;
    description: string;
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
      <NotificationBlock placeholder="Notify user..." />
      <ButtonField id={props.id} text="Submit" submitForm={validateAndSubmit} />
    </div>
  );
};

export const StockDashboardEdit: React.FC<Stock> = (props) => {
  const [text, setText] = useState(props.editData.description);
  function validateAndSubmit(id: number) {}

  function modTextarea(input: string) {
    setText(input);
  }

  return (
    <div>
      <ButtonField id={props.id} text="Exit" submitForm={props.exitForm} />
      <h2>
        {props.editData.title} #{props.editData.ticker}
      </h2>
      <TextareaBlock
        description={props.editData.description}
        returnString={modTextarea}
      />
      <ButtonField id={0} text="Submit" submitForm={validateAndSubmit} />
    </div>
  );
};
