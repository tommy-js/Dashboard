import React from "react";
import NavigationButton from "./NavigationButton";

interface Nav {
  text: string;
  path: string;
  id: number;
}

const Sidebar: React.FC = () => {
  const navigationButtons = [
    { text: "Bands", path: "/bands", id: 0 },
    { text: "Users", path: "/users", id: 1 },
  ];
  return (
    <div id="sidebar">
      {navigationButtons.map((el: Nav) => (
        <div key={el.id}>
          <NavigationButton text={el.text} path={el.path} />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
