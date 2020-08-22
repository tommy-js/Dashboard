import React from "react";
import NavButton from "./NavButton";

const NavBar: React.FC = () => {
  const navLinks = [
    { text: "settings", loggedIn: true, path: "/settings" },
    { text: "logout", loggedIn: false, path: "/" },
  ];

  return (
    <div id="navbar">
      {navLinks.map((el) => (
        <NavButton text={el.text} loggedIn={el.loggedIn} path={el.path} />
      ))}
    </div>
  );
};

export default NavBar;
