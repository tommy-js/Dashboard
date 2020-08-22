import React from "react";

interface Props {
  text: string;
}

const ElementTitle: React.FC<Props> = (props) => {
  return <h2>{props.text}</h2>;
};

export default ElementTitle;
