import React from "react";

interface Props {
  description: string;
  returnString: (input: string) => void;
}

const TextareaBlock: React.FC<Props> = (props) => {
  return (
    <textarea
      value={props.description}
      onChange={(e) => props.returnString(e.target.value)}
    />
  );
};

export default TextareaBlock;
