import React, { useState } from "react";
import InputField from "../login/InputField";
import ButtonField from "../login/ButtonField";
import StockQuerySearchBar from "../resolvers/StockQuerySearchBar";
import UserQuerySearchBar from "../resolvers/UserQuerySearchBar";
import CommentQuerySearchBar from "../resolvers/CommentQuerySearchBar";

interface Stock {
  placeholder: string;
}

interface User {
  placeholder: string;
}

interface Comment {
  placeholder: string;
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
      <StockQuerySearchBar ticker={params} />
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
      <UserQuerySearchBar username={params} />
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
      <CommentQuerySearchBar commentId={params} />
    </div>
  );
};
