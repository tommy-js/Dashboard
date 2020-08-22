import React, { useState, useContext } from "react";
import InputField from "./InputField";
import ButtonField from "./ButtonField";
import { loginContext, userContext } from "../appmain/App";

const LoginFields: React.FC = () => {
  const { loginState, setLoginState } = useContext(loginContext);
  const { userState, setUserState } = useContext(userContext);
  const [fields, setFields] = useState({
    username: "",
    password: "",
    employeeId: "",
  });

  function passUpUsername(input: string) {
    setFields({
      username: fields.username,
      password: input,
      employeeId: fields.employeeId,
    });
  }

  function passUpPassword(input: string) {
    setFields({
      username: input,
      password: fields.password,
      employeeId: fields.employeeId,
    });
  }

  function passUpEmployeeId(input: string) {
    setFields({
      username: fields.username,
      password: fields.password,
      employeeId: input,
    });
  }

  function tryLogin() {
    // ONLY FOR TESTING
    // if (fields.username && fields.password && fields.employeeId) {
    setLoginState(true);
    setUserState({ username: fields.username, password: fields.password });
    // }
  }

  return (
    <div>
      <InputField
        display="block"
        type="text"
        label="username"
        passUp={passUpUsername}
      />
      <InputField
        display="block"
        type="text"
        label="password"
        passUp={passUpPassword}
      />
      <InputField
        display="block"
        type="text"
        label="employee id"
        passUp={passUpEmployeeId}
      />
      <ButtonField id={0} text="Sign In" submitForm={tryLogin} />
    </div>
  );
};

export default LoginFields;
