import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333" /* "https://rocketnotes-api94.herokuapp.com"  */
});