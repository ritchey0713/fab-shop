import axios from "axios";
import { ADD_SURVEY, FETCH_SURVEYS } from "./survey.types";
import { FETCH_USER } from "../user/user.types";

export const addSurvey = (data, recipients) => async (dispatch) => {
  const resp = await axios.post("/api/surveys", { data, recipients });
  console.log("resp: ", resp);

  // TODO add dispatch
};

// for othersurvey

export const submitSurvey = (values, history) => async (dispatch) => {
  const resp = await axios.post("/api/surveys", { values });
  history.push("/surveys");
  dispatch({ type: ADD_SURVEY, payload: resp.data.survey });
  dispatch({ type: FETCH_USER, payload: resp.data.user });
};

export const fetchSurveys = () => async (dispatch) => {
  const resp = await axios.get("/api/surveys");

  dispatch({ type: FETCH_SURVEYS, payload: resp.data });
};
