import React, { useState } from "react";
import HeadLineInput from "./HeadLineInput";
import ButtonField from "../login/ButtonField";
import CreateUser from "../resolvers/CreateUser";
import TextareaBlock from "../dashboard/TextareaBlock";
import ElementCheckbox from "../dashboard/ElementCheckbox";
import MoneyInput from "./MoneyInput";
import StringInput from "./StringInput";

interface User {
  username: string;
  exitUserCreation: () => void;
}

interface Stock {
  title: string;
  exitStockCreation: () => void;
}

export const UserCreationPage: React.FC<User> = (props) => {
  const [password, setPassword] = useState("");
  const [money, setMoney] = useState(1000);
  const [settings, setSettings] = useState({
    darkmode: false,
    invisible: false,
    allowCommentsOnTrades: false,
  });
  const [notification, setNotification] = useState(
    "Welcome to TIKR! Make your first trade."
  );

  function modNotification(input: string) {
    setNotification(input);
  }

  function modDarkmode(check: boolean) {
    setSettings({
      darkmode: check,
      invisible: settings.invisible,
      allowCommentsOnTrades: settings.allowCommentsOnTrades,
    });
  }

  function modInvisible(check: boolean) {
    setSettings({
      darkmode: settings.darkmode,
      invisible: check,
      allowCommentsOnTrades: settings.allowCommentsOnTrades,
    });
  }

  function modAllowCommentsOnTrades(check: boolean) {
    setSettings({
      darkmode: settings.darkmode,
      invisible: settings.invisible,
      allowCommentsOnTrades: check,
    });
  }

  function modMoney(input: number) {
    setMoney(input);
  }

  function modPassword(input: string) {
    setPassword(input);
  }

  return (
    <div>
      <ButtonField text="Exit" id={0} submitForm={props.exitUserCreation} />
      <HeadLineInput text="Create User " inputVal={props.username} />

      <label>Welcome Message: </label>
      <TextareaBlock
        description={notification}
        returnString={modNotification}
      />
      <br />
      <label>Darkmode: </label>
      <ElementCheckbox check={settings.darkmode} triggerCheck={modDarkmode} />
      <br />
      <label>Invisible: </label>
      <ElementCheckbox check={settings.invisible} triggerCheck={modInvisible} />
      <br />
      <label>Allow Comments On Trades: </label>
      <ElementCheckbox
        check={settings.allowCommentsOnTrades}
        triggerCheck={modAllowCommentsOnTrades}
      />
      <MoneyInput label="Starting Money: " val={money} modMoney={modMoney} />
      <StringInput label="Password: " val={password} modString={modPassword} />
      <CreateUser
        username={props.username}
        password={password}
        money={money}
        membership="Free"
        accountStatus="Active"
        darkmode={settings.darkmode}
        invisible={settings.invisible}
        allowCommentsOnTrades={settings.allowCommentsOnTrades}
        notification={notification}
      />
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
