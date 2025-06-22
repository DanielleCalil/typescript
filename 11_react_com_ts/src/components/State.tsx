import React, { useState, ChangeEvent } from "react";

const State = () => {
  const [text, setText] = useState<string | null>("testando o hook");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <p>O texto é: {text}</p>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default State;
