import React from "react";

interface Props {
  type: string;
}

const NewElement: React.FC<Props> = (props) => {
  return (
    <div id="new_element">
      <h2 id="new_element_text">Create {props.type}</h2>
      <input type="text" />
      <button>Create</button>
    </div>
  );
};

export default NewElement;
