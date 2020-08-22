import React, { useState } from "react";
import ElementTitle from "./ElementTitle";
import DeleteElement from "./DeleteElement";
import ElementOptions from "./ElementOptions";
import ElementCheckbox from "./ElementCheckbox";
import ButtonField from "../login/ButtonField";

interface Props {
  text: string;
  id: number;
  returnEditPage: (id: number) => void;
}

const DashboardElement: React.FC<Props> = (props) => {
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
      <ElementTitle text={props.text} />
      <ElementOptions action={actionElement} />
      <DeleteElement deleteElement={deleteElement} />
      <ElementCheckbox check={check} triggerCheck={triggerCheck} />
      <ButtonField
        text="Edit"
        id={props.id}
        submitForm={props.returnEditPage}
      />
    </div>
  );
};

export default DashboardElement;
