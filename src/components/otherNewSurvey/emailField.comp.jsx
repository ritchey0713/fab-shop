//label and text input

import React from "react";

export default ({ input, label }) => {
  console.log(input);
  return (
    <div>
      <label>{label}</label>
      <input onBlur={input.onBlur} />
    </div>
  );
};
