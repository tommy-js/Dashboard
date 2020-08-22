import React from "react";
import ButtonField from "../login/ButtonField";
import DropdownElement from "./DropdownElement";

interface Props {
  id: number;
  editData: { username: string; accountStatus: string };
  exitForm: () => void;
}

const DashboardEdit: React.FC<Props> = (props) => {
  return (
    <div>
      <h1>{props.editData.username}</h1>
      <DropdownElement
        text="Account Status: "
        status={props.editData.accountStatus}
      />
      <ButtonField id={props.id} text="Exit" submitForm={props.exitForm} />
    </div>
  );
};

export default DashboardEdit;
