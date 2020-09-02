import React, { useState } from "react";

interface Props {
  type: string;
  label: string;
  passUp: (input: string) => void;
  display: string;
  placeholder?: string;
}

const InputField: React.FC<Props> = (props) => {
  const [inputVal, setInputVal] = useState("");
  function returnString(input: string) {
    setInputVal(input);
    props.passUp(input);
  }

  return (
    <div id="input_field" style={{ display: props.display }}>
      <label id="input_field_label">{props.label}</label>
      <input
        id="input_field_input"
        placeholder={props.placeholder}
        type={props.type}
        onChange={(e) => returnString(e.target.value)}
        value={inputVal}
      />
    </div>
  );
};

export default InputField;
