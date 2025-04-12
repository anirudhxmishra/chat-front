import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:  "https://chat-back-9x1d.onrender.com/api",
  withCredentials: true,
});