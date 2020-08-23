import React from "react";
import HeadLineInput from "./HeadLineInput";
import ButtonField from "../login/ButtonField";
import CreateUser from "../resolvers/CreateUser";

interface User {
  username: string;
  exitUserCreation: () => void;
}

interface Stock {
  title: string;
  exitStockCreation: () => void;
}

export const UserCreationPage: React.FC<User> = (props) => {
  return (
    <div>
      <ButtonField text="Exit" id={0} submitForm={props.exitUserCreation} />
      <HeadLineInput text="Create User " inputVal={props.username} />
      <CreateUser username={props.username} />
    </div>
  );
};

export const StockCreationPage: React.FC<Stock> = (props) => {
  function string(input: string) {}

  return (
    <div>
      <ButtonField text="Exit" id={0} submitForm={props.exitStockCreation} />
      <HeadLineInput text="Create Stock " inputVal={props.title} />
    </div>
  );
};
