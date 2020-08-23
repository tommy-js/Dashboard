import React from "react";

interface Props {
  label: string;
  val: string;
  modString: (input: string) => void;
}

const StringInput: React.FC<Props> = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input
        type="text"
        value={props.val}
        onChange={(e) => props.modString(e.target.value)}
      />
    </div>
  );
};

export default StringInput;
