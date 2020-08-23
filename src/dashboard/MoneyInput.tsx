import React from "react";

interface Props {
  label: string;
  val: number;
  modMoney: (input: number) => void;
}

const MoneyInput: React.FC<Props> = (props) => {
  function convertMoney(input: string) {
    let convertedVal = parseInt(input);
    props.modMoney(convertedVal);
  }

  return (
    <div>
      <label>{props.label}</label>
      <input value={props.val} onChange={(e) => convertMoney(e.target.value)} />
    </div>
  );
};

export default MoneyInput;
