import React, { useState } from "react";

interface Props {
  placeholder: string;
  val: string;
  updateNotification: (input: string) => void;
}

const NotificationBlock: React.FC<Props> = (props) => {
  return (
    <textarea
      placeholder={props.placeholder}
      value={props.val}
      onChange={(e) => props.updateNotification(e.target.value)}
    />
  );
};

export default NotificationBlock;
