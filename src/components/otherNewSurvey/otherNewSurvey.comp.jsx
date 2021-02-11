// renders form and review page

import React, { useState } from "react";
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

export default NewSurvey;
