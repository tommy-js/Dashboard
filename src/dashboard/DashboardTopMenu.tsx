import React from "react";
import SearchBar from "./SearchBar";
import NewElement from "./NewElement";

interface Props {
  placeholder: string;
}

const DashboardTopMenu: React.FC<Props> = (props) => {
  return (
    <div id="dashboard_top_menu">
      <SearchBar placeholder={props.placeholder} />
      <NewElement type="User" />
    </div>
  );
};

export default DashboardTopMenu;
