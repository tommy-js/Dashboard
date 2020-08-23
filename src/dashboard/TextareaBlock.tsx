import React, { useState } from "react";

interface Props {
  description: string;
}

const TextareaBlock: React.FC<Props> = (props) => {
  const [val, setVal] = useState(props.description);

  return <textarea value={val} onChange={(e) => setVal(e.target.value)} />;
};

export default TextareaBlock;
