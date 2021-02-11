import React from "react";

const SurveyReview = (props) => {
  return (
    <div>
      <p>list the review</p>
      <button className="yellow darken-3 btn-flat" onClick={props.onCancel}>
        Back
      </button>
    </div>
  );
};

export default SurveyReview;
