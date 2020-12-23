import axios from "axios";
import { FETCH_USER } from "./user.types";
const fetchUser = () => {
  axios.get("/api/current_user");
};
