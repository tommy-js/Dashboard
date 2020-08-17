import React, { useState, useContext } from "react";
import InputField from "./InputField";
import ButtonField from "./ButtonField";
import { loginContext } from "../appmain/App";

const LoginFields: React.FC = () => {
  const { loginState, setLoginState } = useContext(loginContext);
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
    setLoginState(true);
  }

  return (
    <div>
      <InputField type="text" label="username" passUp={passUpUsername} />
      <InputField type="text" label="password" passUp={passUpPassword} />
      <InputField type="text" label="employee id" passUp={passUpEmployeeId} />
      <ButtonField text="Sign In" tryLogin={tryLogin} />
    </div>
  );
};

export default LoginFields;
