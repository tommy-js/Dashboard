import React from "react";
import SearchBar from "./SearchBar";
import NewElement from "./NewElement";

interface Props {
  placeholder: string;
  type: string;
  createFunc: (val: string) => void;
}

const DashboardTopMenu: React.FC<Props> = (props) => {
  return (
    <div id="dashboard_top_menu">
      <SearchBar placeholder={props.placeholder} />
      <NewElement type={props.type} createFunc={props.createFunc} />
    </div>
  );
};

export default DashboardTopMenu;
