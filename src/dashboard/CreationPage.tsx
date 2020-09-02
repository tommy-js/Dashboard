import React, { useEffect, useState } from "react";
import HeadLineInput from "./HeadLineInput";
import ButtonField from "../login/ButtonField";
import CreateUser from "../resolvers/CreateUser";
import CreateStock from "../resolvers/CreateStock";
import CreateComment from "../resolvers/CreateComment";
import CreateEmployee from "../resolvers/CreateEmployee";
import TextareaBlock from "../dashboard/TextareaBlock";
import ElementCheckbox from "../dashboard/ElementCheckbox";
import MoneyInput from "./MoneyInput";
import StringInput from "./StringInput";
import AuthEmployeePermissions from "./AuthEmployeePermissions";

interface User {
  username: string;
  exitUserCreation: () => void;
}

interface Stock {
  title: string;
  exitStockCreation: () => void;
}

interface Comment {
  username: string;
  exitCommentCreation: () => void;
}

interface Employee {
  employeeId: string;
  exitEmployeeCreation: () => void;
}

export const UserCreationPage: React.FC<User> = (props) => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(props.username);
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

  function modUsername(input: string) {
    setUsername(input);
  }

  function modMoney(input: number) {
    setMoney(input);
  }

  function modPassword(input: string) {
    setPassword(input);
  }

  function successfulReturn() {
    props.exitUserCreation();
  }

  return (
    <div>
      <ButtonField text="Exit" id={0} submitForm={props.exitUserCreation} />
      <HeadLineInput
        text="Create User "
        inputVal={username}
        modInput={modUsername}
      />

      <label>Welcome Message: </label>
      <TextareaBlock
        passInWidth="200px"
        passInHeight="200px"
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
        successfulReturn={successfulReturn}
      />
    </div>
  );
};

export const StockCreationPage: React.FC<Stock> = (props) => {
  const [stockId, setStockId] = useState(0);
  const [stockTitle, setStockTitle] = useState(props.title);
  const [stockTicker, setStockTicker] = useState("");
  const [about, setAbout] = useState("");

  useEffect(() => {
    let randomVar = Math.floor(Math.random() * 10000000);
    setStockId(randomVar);
  }, []);

  function modAbout(input: string) {
    setAbout(input);
  }

  function modTitle(input: string) {
    setStockTitle(input);
  }

  function modTicker(input: string) {
    setStockTicker(input);
  }

  function successfulReturn() {
    props.exitStockCreation();
  }

  return (
    <div>
      <ButtonField text="Exit" id={0} submitForm={props.exitStockCreation} />
      <HeadLineInput
        text="Create Stock "
        inputVal={stockTitle}
        modInput={modTitle}
      />
      <HeadLineInput
        text="Ticker"
        inputVal={stockTicker}
        modInput={modTicker}
      />
      <TextareaBlock
        passInWidth="200px"
        passInHeight="200px"
        description={about}
        returnString={modAbout}
      />
      <CreateStock
        name={stockTitle}
        ticker={stockTicker}
        stockId={stockId}
        about={about}
        successfulReturn={successfulReturn}
      />
    </div>
  );
};

export const CommentCreationPage: React.FC<Comment> = (props) => {
  const [username, setUsername] = useState(props.username);
  const [userId, setUserId] = useState(0);
  const [text, setText] = useState("");

  function modUsername(input: string) {
    setUsername(input);
  }

  function modUserID(input: string) {
    let intVal = parseInt(input);
    setUserId(intVal);
  }

  function returnString(input: string) {
    setText(input);
  }

  function successfulReturn() {
    props.exitCommentCreation();
  }

  return (
    <div>
      <ButtonField text="Exit" id={0} submitForm={props.exitCommentCreation} />
      <input
        type="number"
        placeholder="User ID"
        min={0}
        value={userId}
        onChange={(e) => modUserID(e.target.value)}
      />
      <HeadLineInput
        text="Username "
        inputVal={username}
        modInput={modUsername}
      />
      <TextareaBlock
        passInWidth="200px"
        passInHeight="200px"
        description={text}
        returnString={returnString}
      />
      <CreateComment
        username={username}
        userId={userId}
        text={text}
        successfulReturn={successfulReturn}
      />
    </div>
  );
};

export const EmployeeCreationPage: React.FC<Employee> = (props) => {
  const empId = parseInt(props.employeeId);
  const [permissions, setPermissions] = useState("General");
  const [username, setUsername] = useState("");
  const [employeeId, setEmployeeId] = useState(empId);
  const [text, setText] = useState("");

  function modUsername(input: string) {
    setUsername(input);
  }

  function modID(input: string) {
    let intVal = parseInt(input);
    setEmployeeId(intVal);
  }

  function returnString(input: string) {
    setText(input);
  }

  function successfulReturn() {
    props.exitEmployeeCreation();
  }

  function modPermissions(input: string) {
    setPermissions(input);
  }

  return (
    <div>
      <input
        type="number"
        placeholder="User ID"
        min={0}
        value={employeeId}
        onChange={(e) => modID(e.target.value)}
      />
      <ButtonField text="Exit" id={0} submitForm={props.exitEmployeeCreation} />
      <AuthEmployeePermissions modPermissions={modPermissions} />
      <HeadLineInput
        text="Username "
        inputVal={username}
        modInput={modUsername}
      />
      <CreateEmployee
        username={username}
        employeeId={employeeId}
        permissions={permissions}
        successfulReturn={successfulReturn}
      />
    </div>
  );
};
