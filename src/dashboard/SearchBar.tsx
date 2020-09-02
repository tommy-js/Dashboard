import React, { useState } from "react";
import InputField from "./InputField";
import ButtonField from "../login/ButtonField";
import StockQuerySearchBar from "../resolvers/StockQuerySearchBar";
import UserQuerySearchBar from "../resolvers/UserQuerySearchBar";
import CommentQuerySearchBar from "../resolvers/CommentQuerySearchBar";
import EmployeeQuerySearchBar from "../resolvers/EmployeeQuerySearchBar";

interface Stock {
  placeholder: string;
  passUpData: (data: object[]) => void;
}

interface User {
  placeholder: string;
  passUpData: (data: object[]) => void;
}

interface Comment {
  placeholder: string;
  passUpData: (data: object[]) => void;
}

interface Employee {
  placeholder: string;
  passUpData: (data: object[]) => void;
}

export const SearchBarStock: React.FC<Stock> = (props) => {
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

export const SearchBarUser: React.FC<User> = (props) => {
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

export const SearchBarComment: React.FC<Comment> = (props) => {
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

export const SearchBarEmployee: React.FC<Employee> = (props) => {
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
