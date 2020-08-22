import React from "react";

interface Props {
  check: boolean;
  triggerCheck: (check: boolean) => void;
}

const ElementCheckbox: React.FC<Props> = (props) => {
  return (
    <input
      type="checkbox"
      onChange={() => props.triggerCheck(!props.check)}
      checked={props.check}
    />
  );
};

export default ElementCheckbox;
