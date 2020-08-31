import React from "react";
import SearchBar from "./SearchBar";
import NewElement from "./NewElement";

interface Props {
  searchbarPlaceholder: string;
  elementPlaceholder: string;
  type: string;
  createFunc: (val: string) => void;
}

const DashboardTopMenu: React.FC<Props> = (props) => {
  return (
    <div id="dashboard_top_menu">
      <SearchBar placeholder={props.searchbarPlaceholder} />
      <NewElement
        type={props.type}
        placeholder={props.elementPlaceholder}
        createFunc={props.createFunc}
      />
    </div>
  );
};

export default DashboardTopMenu;
