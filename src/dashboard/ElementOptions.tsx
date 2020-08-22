import React from "react";

interface Props {
  action: () => void;
}

const ElementOptions: React.FC<Props> = (props) => {
  return (
    <div>
      <select>
        <option>send notification</option>
        <option>suspend account</option>
        <option>terminate account</option>
      </select>
      <button onClick={() => props.action()}>go</button>
    </div>
  );
};

export default ElementOptions;
