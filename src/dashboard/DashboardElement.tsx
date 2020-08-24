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
    <div id="dashboard_element">
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
