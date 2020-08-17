import React, { useState } from "react";

interface Props {
  text: string;
  tryLogin: () => void;
}

const ButtonField: React.FC<Props> = (props) => {
  return <button onClick={props.tryLogin}>{props.text}</button>;
};

export default ButtonField;
