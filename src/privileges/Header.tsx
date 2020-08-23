import React from "react";

interface Props {
  text: string;
  fontSize: string;
}

const Header: React.FC<Props> = (props) => {
  return <h1 style={{ fontSize: props.fontSize }}>{props.text}</h1>;
};

export default Header;
