import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../redux/survey/survey.actions";

const SurveyList = ({ fetchSurveys }) => {
  useEffect(() => {
    fetchSurveys();
  }, [fetchSurveys]);

  return <div>Survey list</div>;
};

const mapStateToProps = ({ surveys }) => surveys;

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
