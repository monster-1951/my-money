import axios from "axios";

const backend_URL = import.meta.env.VITE_URL_FOR_BACKEND;

export const backend = axios.create({
  baseURL: backend_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const auth = axios.create({
  baseURL: `${backend_URL}/auth/login`,
  withCredentials:true
});

export const records = axios.create({
  baseURL: `${backend_URL}/record`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
