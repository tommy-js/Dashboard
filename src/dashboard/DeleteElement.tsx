import React from "react";

interface Props {
  deleteElement: () => void;
}

const DeleteElement: React.FC<Props> = (props) => {
  function deleteEl() {
    props.deleteElement();
  }

  return (
    <div>
      <button onClick={() => deleteEl()}>x</button>
    </div>
  );
};

export default DeleteElement;
