import axios from "axios";

const apiConfig = {
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const api = axios.create(apiConfig);
