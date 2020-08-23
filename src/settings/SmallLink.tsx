import React from "react";
import { Link } from "react-router-dom";

interface Props {
  path: string;
  text: string;
}

export const SmallLink: React.FC<Props> = (props) => {
  return <Link to={props.path}>{props.text}</Link>;
};
