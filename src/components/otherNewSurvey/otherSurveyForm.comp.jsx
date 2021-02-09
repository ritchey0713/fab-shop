// form page

import React from "react";
import { reduxForm, Field } from "redux-form";

const OtherSurveyForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit((values) => console.log(values))}>
        <Field type="text" name="surveyTitle" component="input" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "surveyForm",
})(OtherSurveyForm);
