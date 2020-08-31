import React from "react";
import NavigationButton from "./NavigationButton";

interface Nav {
  text: string;
  path: string;
  id: number;
}

const Sidebar: React.FC = () => {
  const navigationButtons = [
    { text: "Stocks", path: "/home/stocks", id: 0 },
    { text: "Users", path: "/home/users", id: 1 },
    { text: "Comments", path: "/home/comments", id: 2 },
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
