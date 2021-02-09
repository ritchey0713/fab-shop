// form page

import { FieldArray } from "formik";
import React from "react";
import { reduxForm, Field, Fields } from "redux-form";
import surveyField from "./surveyField.comp";

const FIELDS = [
  { label: "Survey Title", name: "title" },
  { label: "Subject", name: "subject" },
  { label: "Body", name: "body" },
  { label: "Recipients", name: "emails" },
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
          component={surveyField}
        />
      );
    });
  return (
    <div>
      <form onSubmit={props.handleSubmit((values) => console.log(values))}>
        {renderFields()}
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "surveyForm",
})(OtherSurveyForm);
