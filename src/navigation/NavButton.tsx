import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { loginContext } from "../appmain/App";

interface Props {
  text: string;
  path: string;
  loggedIn: boolean;
}

const NavButton: React.FC<Props> = (props) => {
  const { loginState, setLoginState } = useContext(loginContext);

  function checklog() {
    if (props.loggedIn === false) {
      setLoginState(false);
    }
  }

  return (
    <NavLink
      exact
      activeClassName="nav_link_active"
      className="nav_link"
      onClick={() => checklog()}
      to={props.path}
    >
      {props.text}
    </NavLink>
  );
};

export default NavButton;
