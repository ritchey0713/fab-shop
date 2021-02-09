//label and text input

import React from "react";

export default (props) => {
  console.log(props.names);
  return props.names.map((name) => {
    return (
      <div>
        <label>{props.label}</label>
        <input onBlur={props[name].input.onBlur} type="text" />
      </div>
    );
  });
};

//{
//   props.names.map((name) => (
//     <div>
//       <label>{props.label}</label>
//       <input onBlur={props.recipient.input.onBlur} type="text" />
//     </div>
//   ));
// }
