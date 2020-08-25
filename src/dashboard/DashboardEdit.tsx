import React, { useState } from "react";
import ButtonField from "../login/ButtonField";
import DropdownElement from "./DropdownElement";
import NotificationBlock from "./NotificationBlock";
import TextareaBlock from "./TextareaBlock";
import StringDisplay from "./StringDisplay";
import MoneyInput from "./MoneyInput";
import ValidateEdit from "./ValidateEdit";

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
    money: number;
    time: number;
    userId: number;
  };
  exitForm: () => void;
}

export const UserDashboardEdit: React.FC<User> = (props) => {
  const [money, setMoney] = useState(props.editData.money);
  const [notificationVal, setNotificationVal] = useState("");
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

  function modMoney(val: number) {
    setMoney(val);
  }

  function updateNotification(input: string) {
    setNotificationVal(input);
  }

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
      <StringDisplay label="Member since" insert={props.editData.time} />
      <MoneyInput label="Money: " val={money} modMoney={modMoney} />
      <NotificationBlock
        placeholder="Notify user..."
        val={notificationVal}
        updateNotification={updateNotification}
      />
      <ValidateEdit
        userId={props.editData.userId}
        content={notificationVal}
        money={money}
        accountStatus={props.editData.accountStatus}
        membership={props.editData.membership}
      />
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
