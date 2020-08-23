import React, { useState } from "react";

interface Props {
  text: string;
  inputVal: string;
}

const HeadLineInput: React.FC<Props> = (props) => {
  const [inputVal, setInputVal] = useState(props.inputVal);

  return (
    <div>
      <label>{props.text}</label>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
    </div>
  );
};

export default HeadLineInput;
