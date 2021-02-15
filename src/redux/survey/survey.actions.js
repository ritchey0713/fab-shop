import axios from "axios";
import { ADD_SURVEY } from "./survey.types";
import { FETCH_USER } from "../user/user.types";

export const addSurvey = (data, recipients) => async (dispatch) => {
  const resp = await axios.post("/api/surveys", { data, recipients });
  console.log("resp: ", resp);

  // TODO add dispatch
};

// for othersurvey

export const submitSurvey = (values) => async (dispatch) => {
  const resp = await axios.post("/api/surveys", { values });
  dispatch({ type: ADD_SURVEY, payload: resp.data.survey });
  dispatch({ type: FETCH_USER, payload: resp.data.user });
};
