import React from "react";
import {
  SearchBarStock,
  SearchBarUser,
  SearchBarComment,
  SearchBarEmployee,
  SearchBarPost,
} from "./SearchBar";
import NewElement from "./NewElement";

interface Props {
  searchbarPlaceholder: string;
  elementPlaceholder: string;
  type: string;
  createFunc: (val: string) => void;
  passUpData: (data: object[]) => void;
}

export const DashboardStockTopMenu: React.FC<Props> = (props) => {
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

export const DashboardUserTopMenu: React.FC<Props> = (props) => {
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

export const DashboardCommentTopMenu: React.FC<Props> = (props) => {
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

export const DashboardEmployeeTopMenu: React.FC<Props> = (props) => {
  function passUpData(data: object[]) {
    props.passUpData(data);
  }

  return (
    <div id="dashboard_top_menu">
      <SearchBarEmployee
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

export const DashboardPostTopMenu: React.FC<Props> = (props) => {
  function passUpData(data: object[]) {
    props.passUpData(data);
  }

  return (
    <div id="dashboard_top_menu">
      <SearchBarPost
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
