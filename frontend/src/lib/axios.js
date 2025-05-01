import axios from "axios";

export const axiosInstance = axios.create({
  // baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
  baseURL: "https://full-stack-chat-application-nii8.onrender.com/api",
  // withCredentials: true,
});