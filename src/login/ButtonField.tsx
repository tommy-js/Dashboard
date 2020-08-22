import React, { useState } from "react";

interface Props {
  text: string;
  id: number;
  submitForm: (id: number) => void;
}

const ButtonField: React.FC<Props> = (props) => {
  return (
    <button id="button" onClick={(id) => props.submitForm(props.id)}>
      {props.text}
    </button>
  );
};

export default ButtonField;
