import React, { useState } from "react";
import InformationHighlight from "./InformationHighlight";

interface Props {
  privileges: string;
}

const PrivilegesPage: React.FC<Props> = (props) => {
  const [opac, setOpac] = useState(0);

  function setHighlightToFalse() {
    setOpac(0);
  }

  function setHighlightToTrue() {
    setOpac(1);
  }

  function checkPrivileges() {
    if (props.privileges === "General") {
      return (
        <div className="leave_container_inline">
          <InformationHighlight
            opac={opac}
            setHighlightToTrue={setHighlightToTrue}
            setHighlightToFalse={setHighlightToFalse}
            text="You can create and delete users, create stocks, modify user privileges, and more..."
          />
        </div>
      );
    } else if (props.privileges === "Premium") {
      return (
        <div className="leave_container_inline">
          <InformationHighlight
            opac={opac}
            setHighlightToTrue={setHighlightToTrue}
            setHighlightToFalse={setHighlightToFalse}
            text="You can create and delete any data type, modify employee IDs, add employees, and more..."
          />
        </div>
      );
    }
  }

  return (
    <div id="privileges_page">
      <h2 className="leave_container_inline">
        Your Current Privileges: {props.privileges}
      </h2>
      {checkPrivileges()}
    </div>
  );
};

export default PrivilegesPage;
