'use client'
import React, { useState } from "react";

function Calc() {
  const [value, setValue] = useState(0);

  const inc = () => {
    setValue(value + 1);
  };

  const dec = () => {
    setValue(value - 1);
  };

  return (
    <div>
      <h1>Value: {value}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      
    </div>
  );
}

export default Calc;
