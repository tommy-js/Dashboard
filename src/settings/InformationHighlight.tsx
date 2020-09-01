import React, { useState } from "react";
import HighlightContainer from "./HighlightContainer";
import { SmallLink } from "./SmallLink";
import { Link } from "react-router-dom";

interface Props {
  text: string;
  opac: number;
  setHighlightToTrue: () => void;
  setHighlightToFalse: () => void;
}

const InformationHighlight: React.FC<Props> = (props) => {
  return (
    <div
      id="leave_container_information_highlight"
      onMouseEnter={() => props.setHighlightToTrue()}
      onMouseLeave={() => props.setHighlightToFalse()}
    >
      <div id="highlight_hover">*</div>
      <div id="highlight_hover_transition" style={{ opacity: props.opac }}>
        <Link to="/privileges">
          <HighlightContainer text={props.text} />
        </Link>
      </div>
    </div>
  );
};

export default InformationHighlight;
