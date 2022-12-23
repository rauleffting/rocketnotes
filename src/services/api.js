import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-api-er9i.onrender.com"  
});