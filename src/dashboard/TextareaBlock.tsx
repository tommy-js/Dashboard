import React from "react";

interface Props {
  description: string;
  passInHeight: string;
  passInWidth: string;
  returnString: (input: string) => void;
}

const TextareaBlock: React.FC<Props> = (props) => {
  return (
    <textarea
      style={{ height: props.passInHeight, width: props.passInWidth }}
      className="textarea_block"
      value={props.description}
      onChange={(e) => props.returnString(e.target.value)}
    />
  );
};

export default TextareaBlock;
