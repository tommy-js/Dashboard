import React, { useState } from "react";
import NewElementInput from "./NewElementInput";

interface Props {
  type: string;
  placeholder: string;
  createFunc: (value: string) => void;
}

const NewElement: React.FC<Props> = (props) => {
  const [val, setVal] = useState("");

  function modVal(input: string) {
    setVal(input);
  }

  return (
    <div id="new_element">
      <h2 id="new_element_text">Create {props.type}</h2>
      <NewElementInput
        val={val}
        placeholder={props.placeholder}
        setVal={modVal}
      />
      <button onClick={() => props.createFunc(val)}>Create</button>
    </div>
  );
};

export default NewElement;
