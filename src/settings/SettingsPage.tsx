import React, { useState, useContext } from "react";
import HeadLineInput from "../dashboard/HeadLineInput";
import PrivilegesPage from "./PrivilegesPage";
import NavBar from "../navigation/NavBar";
import { loginContext } from "../appmain/App";
import { Redirect } from "react-router-dom";

interface Props {
  userState: { username: string; password: string; privileges: string };
}

const SettingsPage: React.FC<Props> = (props) => {
  const { loginState, setLoginState } = useContext(loginContext);
  const [password, setPassword] = useState(props.userState.password);

  function modPassword(input: string) {
    setPassword(input);
  }

  function checkLoginStatus() {
    if (loginState === true) {
      return (
        <div>
          <NavBar />
          <h1>{props.userState.username}</h1>
          <HeadLineInput
            text="Change Password: "
            inputVal={props.userState.password}
            modInput={modPassword}
          />
          <PrivilegesPage privileges={props.userState.privileges} />
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }

  return <div>{checkLoginStatus()}</div>;
};

export default SettingsPage;
