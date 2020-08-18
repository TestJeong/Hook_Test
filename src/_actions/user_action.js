import axios from "axios";
import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "./types";

export function loginUser(dataTosubmit) {
  const requset = axios
    .post("/api/users/login", dataTosubmit)
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: requset,
  };
}

export function registerUser(dataTosubmit) {
  const requset = axios
    .post("/api/users/register", dataTosubmit)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: requset,
  };
}

export function auth() {
  const requset = axios
    .get("/api/users/auth")
    .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: requset,
  };
}
