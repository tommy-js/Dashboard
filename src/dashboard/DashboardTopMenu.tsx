import React from "react";
import { SearchBarStock, SearchBarUser, SearchBarComment } from "./SearchBar";
import NewElement from "./NewElement";

interface Stock {
  searchbarPlaceholder: string;
  elementPlaceholder: string;
  type: string;
  createFunc: (val: string) => void;
  passUpData: (data: object[]) => void;
}

interface User {
  searchbarPlaceholder: string;
  elementPlaceholder: string;
  type: string;
  createFunc: (val: string) => void;
  passUpData: (data: object[]) => void;
}

interface Comment {
  searchbarPlaceholder: string;
  elementPlaceholder: string;
  type: string;
  createFunc: (val: string) => void;
  passUpData: (data: object[]) => void;
}

export const DashboardStockTopMenu: React.FC<Stock> = (props) => {
  function passUpData(data: object[]) {
    props.passUpData(data);
  }

  return (
    <div id="dashboard_top_menu">
      <SearchBarStock
        placeholder={props.searchbarPlaceholder}
        passUpData={passUpData}
      />
      <NewElement
        type={props.type}
        placeholder={props.elementPlaceholder}
        createFunc={props.createFunc}
      />
    </div>
  );
};

export const DashboardUserTopMenu: React.FC<User> = (props) => {
  function passUpData(data: object[]) {
    props.passUpData(data);
  }

  return (
    <div id="dashboard_top_menu">
      <SearchBarUser
        placeholder={props.searchbarPlaceholder}
        passUpData={passUpData}
      />
      <NewElement
        type={props.type}
        placeholder={props.elementPlaceholder}
        createFunc={props.createFunc}
      />
    </div>
  );
};

export const DashboardCommentTopMenu: React.FC<Comment> = (props) => {
  function passUpData(data: object[]) {
    props.passUpData(data);
  }

  return (
    <div id="dashboard_top_menu">
      <SearchBarComment
        placeholder={props.searchbarPlaceholder}
        passUpData={passUpData}
      />
      <NewElement
        type={props.type}
        placeholder={props.elementPlaceholder}
        createFunc={props.createFunc}
      />
    </div>
  );
};
