import React, { useState } from "react";

interface Props {
  placeholder: string;
  val: string;
  passInWidth: string;
  passInHeight: string;
  updateNotification: (input: string) => void;
}

const NotificationBlock: React.FC<Props> = (props) => {
  return (
    <textarea
      className="textarea_block"
      style={{ height: props.passInHeight, width: props.passInWidth }}
      placeholder={props.placeholder}
      value={props.val}
      onChange={(e) => props.updateNotification(e.target.value)}
    />
  );
};

export default NotificationBlock;
