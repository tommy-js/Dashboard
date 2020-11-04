import React, { useState } from "react";
import InputField from "./InputField";
import StockQuerySearchBar from "../resolvers/StockQuerySearchBar";
import UserQuerySearchBar from "../resolvers/UserQuerySearchBar";
import CommentQuerySearchBar from "../resolvers/CommentQuerySearchBar";
import EmployeeQuerySearchBar from "../resolvers/EmployeeQuerySearchBar";
import PostQuerySearchBar from "../resolvers/PostQuerySearchBar";

interface Props {
  placeholder: string;
  passUpData: (data: object[]) => void;
}

export const SearchBarStock: React.FC<Props> = (props) => {
  const [params, setParams] = useState("");

  function searchParams(input: string) {
    setParams(input);
  }

  return (
    <div id="search_bar">
      <InputField
        display="inline-block"
        type="text"
        label="query"
        passUp={searchParams}
        placeholder={props.placeholder}
      />
      <StockQuerySearchBar ticker={params} passUpData={props.passUpData} />
    </div>
  );
};

export const SearchBarUser: React.FC<Props> = (props) => {
  const [params, setParams] = useState("");

  function searchParams(input: string) {
    console.log(input);
    setParams(input);
  }

  return (
    <div id="search_bar">
      <InputField
        display="inline-block"
        type="text"
        label="query"
        passUp={searchParams}
        placeholder={props.placeholder}
      />
      <UserQuerySearchBar username={params} passUpData={props.passUpData} />
    </div>
  );
};

export const SearchBarComment: React.FC<Props> = (props) => {
  const [params, setParams] = useState("");

  function searchParams(input: string) {
    setParams(input);
  }

  return (
    <div id="search_bar">
      <InputField
        display="inline-block"
        type="text"
        label="query"
        passUp={searchParams}
        placeholder={props.placeholder}
      />
      <CommentQuerySearchBar commentId={params} passUpData={props.passUpData} />
    </div>
  );
};

export const SearchBarEmployee: React.FC<Props> = (props) => {
  const [params, setParams] = useState("");

  function searchParams(input: string) {
    setParams(input);
  }

  return (
    <div id="search_bar">
      <InputField
        display="inline-block"
        type="text"
        label="query"
        passUp={searchParams}
        placeholder={props.placeholder}
      />
      <EmployeeQuerySearchBar
        employeeId={params}
        passUpData={props.passUpData}
      />
    </div>
  );
};

export const SearchBarPost: React.FC<Props> = (props) => {
  const [params, setParams] = useState("");

  function searchParams(input: string) {
    setParams(input);
  }

  return (
    <div id="search_bar">
      <InputField
        display="inline-block"
        type="text"
        label="query"
        passUp={searchParams}
        placeholder={props.placeholder}
      />
      <PostQuerySearchBar postId={params} passUpData={props.passUpData} />
    </div>
  );
};
