import axios from "axios";
// import { browserHistory } from "react-router-dom";
import { CREATE_FAB_REQUEST } from "./fab.types";

export const createRequest = (requestData) => async (dispatch) => {
  const resp = await axios.post("/api/requests", requestData);
  console.log(resp);
  dispatch({ type: CREATE_FAB_REQUEST, payload: resp.data });
  // browserHistory.push("/dashboard");
};
