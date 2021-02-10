//label and text input
import React from "react";
import { Field } from "redux-form";
import EmailTemplate from "./emailTemplate.comp";
// export default (props) => {
//   console.log(props.names);
//   return props.names.map((name) => {
//     return (
//       <div>
//         <label>{props.label}</label>
//         <input onBlur={props[name].input.onBlur} type="text" />
//       </div>
//     );
//   });
// };

// export default (props) => {
//   return props.fields.map((member, index) => {
//     debugger;
//     return <Field name={member} label={"Email"} component={EmailTemplate} />;
//   });
// };
// return props.names.map((name) => {
//   return (
//     <div>
//       <label>{props.label}</label>
//       <input onBlur={props[name].input.onBlur} type="text" />
//     </div>
//   );
// });

//{
//   props.names.map((name) => (
//     <div>
//       <label>{props.label}</label>
//       <input onBlur={props.recipient.input.onBlur} type="text" />
//     </div>
//   ));
// }

const AddEmailField = (props) => (
  <div>
    <button type="button" onClick={() => props.fields.push({})}>
      add email
    </button>

    {props.fields.map((email, index) => (
      <Field
        name={`${email}.email`}
        type="text"
        component={EmailTemplate}
        label="email"
      />
    ))}
  </div>
);

export default AddEmailField;
