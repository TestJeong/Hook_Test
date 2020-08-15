import axios from "axios";
import { LOGIN_USER } from "./types";

export function loginUser(dataTosubmit) {
  const requset = axios
    .post("/api/users/login", dataTosubmit)
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: requset,
  };
}
