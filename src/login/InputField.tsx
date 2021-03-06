import React, { useState } from "react";

interface Props {
  type: string;
  passUp: (input: string) => void;
  placeholder: string;
}

const InputField: React.FC<Props> = (props) => {
  const [inputVal, setInputVal] = useState("");
  function returnString(input: string) {
    setInputVal(input);
    props.passUp(input);
  }

  return (
    <div id="input_field_loging">
      <input
        id="input_field_input_login"
        placeholder={props.placeholder}
        type={props.type}
        onChange={(e) => returnString(e.target.value)}
        value={inputVal}
      />
    </div>
  );
};

export default InputField;
