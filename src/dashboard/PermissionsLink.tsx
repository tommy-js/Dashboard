import React from "react";
import { Link } from "react-router-dom";

interface Props {
  permissions: string;
}

const PermissionsLink: React.FC<Props> = (props) => {
  return (
    <div>
      <Link to="/privileges">
        <p>{props.permissions}</p>
      </Link>
    </div>
  );
};

export default PermissionsLink;
