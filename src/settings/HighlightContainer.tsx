import React from "react";

interface Props {
  text: string;
}

const HighlightContainer: React.FC<Props> = (props) => {
  return (
    <div id="highlight_container">
      <p>{props.text}</p>
    </div>
  );
};

export default HighlightContainer;
