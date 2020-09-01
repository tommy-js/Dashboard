import React, { useState } from "react";
import ButtonField from "../login/ButtonField";
import DropdownElement from "./DropdownElement";
import NotificationBlock from "./NotificationBlock";
import TextareaBlock from "./TextareaBlock";
import StringDisplay from "./StringDisplay";
import MoneyInput from "./MoneyInput";
import {
  ValidateUserEdit,
  ValidStockEdit,
  ValidateCommentEdit,
} from "./ValidateEdit";

interface Stock {
  id: number;
  editData: {
    name: string;
    ticker: string;
    about: string;
    stockId: number;
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

interface Comment {
  id: number;
  editData: {
    userId: number;
    commentId: number;
    username: string;
    timestamp: number;
    text: string;
    likes: number;
    dislikes: number;
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
        passInWidth="300px"
        passInHeight="150px"
        val={notificationVal}
        updateNotification={updateNotification}
      />
      <ValidateUserEdit
        userId={props.editData.userId}
        content={notificationVal}
        money={money}
        accountStatus={props.editData.accountStatus}
        membership={props.editData.membership}
        successfulResolve={props.exitForm}
      />
    </div>
  );
};

export const StockDashboardEdit: React.FC<Stock> = (props) => {
  const [text, setText] = useState(props.editData.about);
  function validateAndSubmit(id: number) {}

  function modTextarea(input: string) {
    setText(input);
  }

  return (
    <div>
      <ButtonField id={props.id} text="Exit" submitForm={props.exitForm} />
      <h2>
        {props.editData.name} #{props.editData.ticker}
      </h2>
      <TextareaBlock
        passInWidth="300px"
        passInHeight="200px"
        description={text}
        returnString={modTextarea}
      />
      <ValidStockEdit
        stockId={props.editData.stockId}
        about={text}
        successfulResolve={props.exitForm}
      />
    </div>
  );
};

export const CommentDashboardEdit: React.FC<Comment> = (props) => {
  const [text, setText] = useState(props.editData.text);
  const [likes, setLikes] = useState(props.editData.likes);
  const [dislikes, setDislikes] = useState(props.editData.dislikes);

  function modLikes(input: number) {
    setLikes(input);
  }

  function modDislikes(input: number) {
    setDislikes(input);
  }

  function modTextarea(input: string) {
    setText(input);
  }

  return (
    <div>
      <ButtonField id={props.id} text="Exit" submitForm={props.exitForm} />
      <TextareaBlock
        passInWidth="200px"
        passInHeight="350px"
        description={text}
        returnString={modTextarea}
      />
      <MoneyInput label="Likes: " val={likes} modMoney={modLikes} />
      <MoneyInput label="Dislikes: " val={dislikes} modMoney={modDislikes} />
      <ValidateCommentEdit
        commentId={props.editData.commentId}
        text={text}
        likes={likes}
        dislikes={dislikes}
        successfulResolve={props.exitForm}
      />
    </div>
  );
};
