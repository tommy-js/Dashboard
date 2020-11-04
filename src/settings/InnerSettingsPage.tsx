import React, { useEffect, useState } from "react";
import HeadLineInput from "../dashboard/HeadLineInput";
import PrivilegesPage from "./PrivilegesPage";
import UpdateSettingsEmployee from "../resolvers/UpdateSettingsEmployee";

interface Props {
  employeeId: number;
  username: string;
  password: string;
  permissions: string;
}

const InnerSettingsPage: React.FC<Props> = (props) => {
  const [username, setUsername] = useState(props.username);
  const [password, setPassword] = useState(props.password);

  function modUsername(input: string) {
    setUsername(input);
  }

  function modPassword(input: string) {
    setPassword(input);
  }

  return (
    <div id="inner_settings_page">
      <PrivilegesPage privileges={props.permissions} />
      <h1>{props.username}</h1>
      <HeadLineInput
        text="Change Username: "
        inputVal={username}
        modInput={modUsername}
      />
      <HeadLineInput
        text="Change Password: "
        inputVal={password}
        modInput={modPassword}
      />
      <UpdateSettingsEmployee
        employeeId={props.employeeId}
        username={username}
        password={password}
        permissions={props.permissions}
      />
    </div>
  );
};

export default InnerSettingsPage;
