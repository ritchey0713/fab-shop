// // form page

// import React, { useState } from "react";
// import { reduxForm, Field, Fields, FieldArray } from "redux-form";
// import BasicTextField from "./basicTextField.comp";
// import emailField from "./emailField.comp";

// const FIELDS = [
//   { label: "Survey Title", name: "title" },
//   { label: "Subject", name: "subject" },
//   { label: "Body", name: "body" },
// ];

// const OtherSurveyForm = (props) => {
//   const [recipients, setRecipients] = useState({});
//   const renderFields = () =>
//     FIELDS.map(({ label, name }) => {
//       return (
//         <Field
//           key={name}
//           label={label}
//           name={name}
//           type="text"
//           component={BasicTextField}
//         />
//       );
//     });

//   const renderSelectDropdown = () => {
//     let selects = [];
//     for (let i = 0; i <= 100; i++) {
//       selects.push(<option value={i}>{i}</option>);
//     }
//     return selects;
//   };

//   const handleSelectChange = (e) => {
//     setRecipients([]);
//     for (let i = 1; i <= e.target.value; i++) {
//       setRecipients((recipients) => [...recipients, {}]);
//     }
//     //renderEmailFields();
//   };

//   // const renderEmailFields = () =>
//   //   recipients.length > 0 ? (
//   //     <Fields names={recipients} label="Email" component={emailField} />
//   //   ) : null;

//   const renderEmailFields = () =>
//     recipients.length > 0 ? (
//       <FieldArray
//         name="recipients"
//         fields={recipients}
//         label="Email"
//         component={emailField}
//       />
//     ) : null;

//   return (
//     <div>
//       <form onSubmit={props.handleSubmit((values) => console.log(values))}>
//         {renderFields()}
//         <select onChange={handleSelectChange} style={{ display: "block" }}>
//           {renderSelectDropdown()}
//         </select>
//         {renderEmailFields()}
//         <button type="submit">submit</button>
//       </form>
//     </div>
//   );
// };

// export default reduxForm({
//   form: "surveyForm",
// })(OtherSurveyForm);

// // <button type="button" onClick={renderEmailFields()}>
// // Add recipient
// // </button>
// //{renderEmailFields()}

// form page

import React from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field, FieldArray } from "redux-form";
import BasicTextField from "./basicTextField.comp";
import AddEmailField from "./emailField.comp";
import emailValidator from "../../utils/emailValidator";

const FIELDS = [
  { label: "Survey Title", name: "title" },
  { label: "Subject", name: "subject" },
  { label: "Body", name: "body" },
];

const OtherSurveyForm = (props) => {
  const renderFields = () =>
    FIELDS.map(({ label, name }) => {
      return (
        <Field
          key={name}
          label={label}
          name={name}
          type="text"
          component={BasicTextField}
        />
      );
    });

  return (
    <div>
      <form onSubmit={props.handleSubmit(props.onSurveySubmit)}>
        {renderFields()}
        <FieldArray name="emails" component={AddEmailField} />
        <Link to="/dashboard" className="red btn-flat white-text">
          Cancel
        </Link>
        <button type="submit" className="teal btn-flat right white-text">
          next
          <i className="material-icons right">done</i>
        </button>
      </form>
    </div>
  );
};

const validate = (values) => {
  const errors = {};
  FIELDS.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide some text!";
    }
  });

  if (!values.emails || values.emails.length < 1) {
    errors.emails = { _error: "must provide at least one email" };
  } else {
    const emailsArrErrors = [];

    values.emails.forEach((email, index) => {
      const emailErrors = {};
      if (!email || !email.email) {
        emailErrors.email = "required";
        emailsArrErrors[index] = emailErrors;
      } else {
        emailErrors.email = emailValidator(email.email);
        emailsArrErrors[index] = emailErrors;
      }
    });
    if (emailsArrErrors.length) {
      errors.emails = emailsArrErrors;
    }
  }
  return errors;
};

export default reduxForm({
  validate,
  form: "surveyForm",
})(OtherSurveyForm);
