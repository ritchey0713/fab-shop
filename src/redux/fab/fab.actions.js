import axios from "axios";
import { CREATE_FAB_REQUEST } from "./fab.types";

export const createRequest = (requestData) => async (dispatch) => {
  const resp = await axios.post("/api/requests", requestData);
  console.log(resp);
};
