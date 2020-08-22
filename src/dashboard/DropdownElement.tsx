import React, { useState, useEffect } from "react";

interface Props {
  text: string;
  status: string;
}

const DropdownElement: React.FC<Props> = (props) => {
  const [val, setVal] = useState(props.status);

  function changeEl(e: any) {
    let str = e.options[e.selectedIndex].value;
    setVal(str);
  }

  return (
    <div>
      <label>{props.text}</label>
      <select value={val} onChange={(e) => changeEl(e.target)}>
        <option id="1" value="active">
          Active
        </option>
        <option id="2" value="suspended">
          Suspended
        </option>
        <option id="3" value="disabled">
          Disabled
        </option>
      </select>
    </div>
  );
};

export default DropdownElement;
