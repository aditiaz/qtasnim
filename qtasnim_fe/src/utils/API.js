import axios from "axios";

export const tableAPI = axios.create({
  baseURL: "http://localhost:5000/api/v1/",
});
