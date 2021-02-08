import axios from "axios";
import { ADD_SURVEY } from "./survey.types";

export const addSurvey = (data, recipients) => async (dispatch) => {
  const resp = await axios.post("/api/surveys", { data, recipients });
  console.log("resp: ", resp);

  // TODO add dispatch
};
