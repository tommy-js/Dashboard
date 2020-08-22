import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  text: string;
  path: string;
}

const NavigationButton: React.FC<Props> = (props) => {
  return (
    <NavLink className="navigation_button" to={props.path}>
      {props.text}
    </NavLink>
  );
};

export default NavigationButton;
