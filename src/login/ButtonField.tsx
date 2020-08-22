import React, { useState } from "react";

interface Props {
  text: string;
  submitForm: () => void;
}

const ButtonField: React.FC<Props> = (props) => {
  return (
    <button id="button" onClick={() => props.submitForm()}>
      {props.text}
    </button>
  );
};

export default ButtonField;
