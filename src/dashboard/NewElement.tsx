import React, { useState } from "react";

interface Props {
  type: string;
  createFunc: (value: string) => void;
}

const NewElement: React.FC<Props> = (props) => {
  const [val, setVal] = useState("");

  return (
    <div id="new_element">
      <h2 id="new_element_text">Create {props.type}</h2>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={() => props.createFunc(val)}>Create</button>
    </div>
  );
};

export default NewElement;
