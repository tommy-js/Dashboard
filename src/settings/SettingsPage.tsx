import React from "react";
import HeadLineInput from "../dashboard/HeadLineInput";
import PrivilegesPage from "./PrivilegesPage";
import NavBar from "../navigation/NavBar";

interface Props {
  userState: { username: string; password: string; privileges: string };
}

const SettingsPage: React.FC<Props> = (props) => {
  return (
    <div>
      <NavBar />
      <h1>{props.userState.username}</h1>
      <HeadLineInput
        text="Change Password: "
        inputVal={props.userState.password}
      />
      <PrivilegesPage privileges={props.userState.privileges} />
    </div>
  );
};

export default SettingsPage;
