import React, { useState } from "react";

interface Props {
  text: string;
  inputVal: string;
  modInput: (input: string) => void;
}

const HeadLineInput: React.FC<Props> = (props) => {
  return (
    <div>
      <label>{props.text}</label>
      <input
        type="text"
        value={props.inputVal}
        onChange={(e) => props.modInput(e.target.value)}
      />
    </div>
  );
};

export default HeadLineInput;
