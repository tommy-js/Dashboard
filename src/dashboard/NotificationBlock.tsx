import React, { useState } from "react";

const NotificationBlock: React.FC = () => {
  const [val, setVal] = useState("");

  return <textarea placeholder="Notify user" value={val} />;
};

export default NotificationBlock;
