// renders form and review page

import React, { useState } from "react";
import { reduxForm } from "redux-form";
import OtherSurveyForm from "./otherSurveyForm.comp";
import SurveyReview from "./formReview.comp";

const NewSurvey = () => {
  const [showReview, setShowReview] = useState(false);

  const renderReview = () => {
    if (showReview) {
      return <SurveyReview onCancel={() => setShowReview(false)} />;
    }

    return <OtherSurveyForm onSurveySubmit={() => setShowReview(true)} />;
  };
  return (
    <div>
      new survey
      {renderReview()}
    </div>
  );
};

// add redux form to reset "persistance" when totally leaving form ie going to dashboard etc
export default reduxForm({
  form: "surveyForm",
})(NewSurvey);
