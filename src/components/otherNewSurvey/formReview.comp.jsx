import React from "react";
import { connect } from "react-redux";
import { formFields } from "./formFields.js";
import { submitSurvey } from "../../redux/survey/survey.actions";

const SurveyReview = ({ onCancel, formValues, submitSurvey }) => {
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
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>

      <button
        className="green white-text btn-flat right"
        onClick={() => submitSurvey(formValues)}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    formValues: state.form.surveyForm.values,
  };
};

export default connect(mapStateToProps, { submitSurvey })(SurveyReview);
