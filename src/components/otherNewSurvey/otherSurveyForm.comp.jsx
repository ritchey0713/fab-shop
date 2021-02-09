// form page

import { FieldArray } from "formik";
import React, { useState } from "react";
import { reduxForm, Field, Fields } from "redux-form";
import BasicTextField from "./basicTextField.comp";
import emailField from "./emailField.comp";

const FIELDS = [
  { label: "Survey Title", name: "title" },
  { label: "Subject", name: "subject" },
  { label: "Body", name: "body" },
  { label: "Recipients", name: "emails" },
];

const OtherSurveyForm = (props) => {
  const [recipientCount, setRecipientCount] = useState(1);
  const [recipients, setRecipients] = useState([
    {
      label: "recipients",
      name: `recipients`,
    },
  ]);
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

  const renderEmailFields = () =>
    recipients.map(({ label, name }) => (
      <Field
        key={Math.random() * 110}
        label={label}
        name={name}
        type="email"
        component={emailField}
      />
    ));
  return (
    <div>
      <form onSubmit={props.handleSubmit((values) => console.log(values))}>
        {renderFields()}
        {renderEmailFields()}
        <button
          type="button"
          onClick={() =>
            setRecipients([
              ...recipients,
              {
                label: "recipients",
                name: `recipients`,
              },
            ])
          }
        >
          Add recipient
        </button>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "surveyForm",
})(OtherSurveyForm);
