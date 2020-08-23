import React from "react";

interface Props {
  text: string;
}

const SubHeader: React.FC<Props> = (props) => {
  return <p>{props.text}</p>;
};

export default SubHeader;
