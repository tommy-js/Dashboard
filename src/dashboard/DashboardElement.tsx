import React, { useState } from "react";
import ElementTitle from "./ElementTitle";
import DeleteElement from "./DeleteElement";
import ElementOptions from "./ElementOptions";
import ElementCheckbox from "./ElementCheckbox";
import ButtonField from "../login/ButtonField";
import StringDisplay from "./StringDisplay";

interface User {
  username: string;
  userId: number;
  money: number;
  returnEditPage: (id: number) => void;
}

interface Stock {
  name: string;
  ticker: string;
  stockId: number;
  returnEditPage: (id: number) => void;
}

interface Comment {
  username: string;
  text: string;
  commentId: number;
  returnEditPage: (id: number) => void;
}

export const DashboardUserElement: React.FC<User> = (props) => {
  const [check, setCheck] = useState(false);

  function triggerCheck(check: boolean) {
    setCheck(check);
    console.log(check);
  }

  function deleteElement() {}

  function actionElement() {
    console.log("action");
  }

  return (
    <div className="dashboard_element" key={props.userId}>
      <ElementTitle text={props.username} />
      <StringDisplay label="Money" insert={props.money} />
      <ElementOptions action={actionElement} />
      <DeleteElement deleteElement={deleteElement} />
      <ElementCheckbox check={check} triggerCheck={triggerCheck} />
      <ButtonField
        text="Edit"
        id={props.userId}
        submitForm={props.returnEditPage}
      />
    </div>
  );
};

export const DashboardStockElement: React.FC<Stock> = (props) => {
  return (
    <div className="dashboard_element" key={props.stockId}>
      <ElementTitle text={`${props.name} #${props.ticker}`} />
      <ButtonField
        text="Edit"
        id={props.stockId}
        submitForm={props.returnEditPage}
      />
    </div>
  );
};

export const DashboardCommentElement: React.FC<Comment> = (props) => {
  return (
    <div className="dashboard_element" key={props.commentId}>
      <ElementTitle text={props.text} />
      <ButtonField
        text="Edit"
        id={props.commentId}
        submitForm={props.returnEditPage}
      />
    </div>
  );
};
