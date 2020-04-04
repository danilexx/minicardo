/* eslint-disable no-shadow */
import axios from "axios";

export const api = axios.create({
  baseURL: "localhost",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});
