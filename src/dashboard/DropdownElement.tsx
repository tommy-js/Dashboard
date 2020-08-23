import React, { useState, useEffect } from "react";

interface Props {
  text: string;
  status: string;
  options: { text: string; id: number }[];
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
        <option id="1" value={props.options[0].text}>
          {props.options[0].text}
        </option>
        <option id="2" value={props.options[1].text}>
          {props.options[1].text}
        </option>
        <option id="3" value={props.options[2].text}>
          {props.options[2].text}
        </option>
      </select>
    </div>
  );
};

export default DropdownElement;
