import axios from "axios";
import { getCSRF_TOKEN } from "../modules/csrf";

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
  baseURL: `${backend_URL}/auth`,
  withCredentials: true,
});

export const records = axios.create({
  baseURL: `${backend_URL}/record`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const accounts = axios.create({
  baseURL: `${backend_URL}/account`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const categories = axios.create({
  baseURL: `${backend_URL}/category`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

[backend, records, accounts,categories].forEach((instance) =>
  instance.interceptors.request.use(
    (request) => {
      request.headers["x-csrf-token"] = getCSRF_TOKEN();
      return request;
    },
    (error) => {
      return Promise.reject(error);
    },
  ),
);

[backend, records, accounts,categories].forEach((instance) =>
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    },
  ),
);
