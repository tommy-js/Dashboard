import React from "react";

interface Props {
  label: string;
  status: boolean;
}

const FixedCheckbox: React.FC<Props> = (props) => {
  return (
    <div>
      <input type="checkbox" checked={props.status} />
      <label>{props.label}</label>
    </div>
  );
};

export default FixedCheckbox;
