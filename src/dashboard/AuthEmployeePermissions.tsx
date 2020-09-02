import React, { useEffect, useState } from "react";

interface Props {
  modPermissions: (permissions: string) => void;
}

const AuthEmployeePermissions: React.FC<Props> = (props) => {
  const [checkedAccessLevel, setCheckedAccessLevel] = useState(true);
  const [permissions, setPermissions] = useState("General");

  useEffect(() => {
    if (checkedAccessLevel === false) {
      let str = "Premium";
      setPermissions(str);
      props.modPermissions(str);
    } else if (checkedAccessLevel === true) {
      let str = "General";
      setPermissions(str);
      props.modPermissions(str);
    }
  }, [checkedAccessLevel]);

  function selectPremium() {
    if (checkedAccessLevel === true) {
      setCheckedAccessLevel(false);
    }
  }

  function selectGeneral() {
    if (checkedAccessLevel === false) {
      setCheckedAccessLevel(true);
    }
  }

  return (
    <div>
      <label>General</label>
      <input
        type="checkbox"
        checked={checkedAccessLevel}
        onChange={() => selectGeneral()}
      />
      <label>Premium</label>
      <input
        type="checkbox"
        checked={!checkedAccessLevel}
        onChange={() => selectPremium()}
      />
    </div>
  );
};

export default AuthEmployeePermissions;
