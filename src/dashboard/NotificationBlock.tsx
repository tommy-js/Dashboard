import React, { useState } from "react";

interface Props {
  placeholder: string;
}

const NotificationBlock: React.FC<Props> = (props) => {
  const [val, setVal] = useState(props.placeholder);

  return (
    <textarea
      placeholder={props.placeholder}
      onChange={(e) => setVal(e.target.value)}
    />
  );
};

export default NotificationBlock;
