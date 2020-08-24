import React from "react";

interface Props {
  label: string;
  insert: number | string;
}

const StringDisplay: React.FC<Props> = (props) => {
  return (
    <div>
      <p>
        {props.label}: {props.insert}
      </p>
    </div>
  );
};

export default StringDisplay;
