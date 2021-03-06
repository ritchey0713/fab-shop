import React from "react";
import { connect } from "react-redux";
import { formFields } from "./formFields.js";
import { submitSurvey } from "../../redux/survey/survey.actions";
import { useHistory } from "react-router-dom";

const SurveyReview = ({ onCancel, formValues, submitSurvey }) => {
  const history = useHistory();
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
          {formValues.recipients.map((recip) => (
            <div>{recip.recipient}</div>
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
        onClick={() => submitSurvey(formValues, history)}
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
