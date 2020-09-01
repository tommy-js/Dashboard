import React from "react";
import NavButton from "./NavButton";

const NavBar: React.FC = () => {
  const navLinks = [
    { text: "home", loggedIn: true, path: "/home", id: 0 },
    { text: "settings", loggedIn: true, path: "/settings", id: 1 },
    { text: "logout", loggedIn: false, path: "/", id: 2 },
  ];

  return (
    <div id="navbar">
      {navLinks.map((el) => (
        <NavButton
          key={el.id}
          text={el.text}
          loggedIn={el.loggedIn}
          path={el.path}
        />
      ))}
    </div>
  );
};

export default NavBar;
