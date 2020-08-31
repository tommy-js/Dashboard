import React from "react";

interface Props {
  placeholder: string;
  val: string;
  setVal: (input: string) => void;
}

const NewElementInput: React.FC<Props> = (props) => {
  return (
    <input
      type="text"
      value={props.val}
      placeholder={props.placeholder}
      onChange={(e) => props.setVal(e.target.value)}
    />
  );
};

export default NewElementInput;
