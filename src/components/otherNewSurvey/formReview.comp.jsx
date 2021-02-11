import React from "react";
import { connect } from "react-redux";
import { formFields } from "./formFields.js";

const SurveyReview = ({ onCancel, formValues }) => {
  const reviewFields = () =>
    formFields.map(({ label, name }) => (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    ));

  return (
    <div>
      <h4>Please review your survey</h4>
      <div>
        {reviewFields()}

        <div>
          <label>Recipients</label>
          {formValues.emails.map((recip) => (
            <div>{recip.email}</div>
          ))}
        </div>
      </div>
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back
      </button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    formValues: state.form.surveyForm.values,
  };
};

export default connect(mapStateToProps)(SurveyReview);

{
  /* <div>
          <label>Survey Title</label>
          <div>{formValues.title}</div>
        </div>

        <div>
          <label>Subject Line</label>
          <div>{formValues.subject}</div>
        </div>

        <div>
          <label>Email Body</label>
          <div>{formValues.body}</div>
        </div> */
}
