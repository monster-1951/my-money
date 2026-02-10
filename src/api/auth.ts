import axios, { AxiosError } from "axios";
import { auth } from "./axios";

export const login = async (params: { email: string; password: string }) => {
  try {
    const response = await auth.post("/login", params);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) return error.response?.data;
    return error;
  }
};

export const register = async (params: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await auth.post("/register", params);
    return response.data;
  } catch (error) {
    return error as AxiosError;
  }
};

export const getSessionUser = async () => {
  try {
    const response = await auth.get("/me");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const logout = async () => {
  try {
    console.log("Logout triggered")
    const response = await auth.get("/logout");
    window.location.href = "/"
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
