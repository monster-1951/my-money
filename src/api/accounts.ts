import axios from "axios";
import { accounts } from "./axios";

export const Get = async () => {
  try {
    const response = await accounts.get(`/`);
    console.log(response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) return error.response?.data;
    return error;
  }
};

export const Create = async (params: {
  name: string;
  balance: number;
  icon: number;
}) => {
  try {
    const response = await accounts.post("/create", params);
    console.log(response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) return error.response?.data;
    return error;
  }
};

export const Update = async (params: {
  data: { name: string; balance: number; icon: number };
  id: string;
}) => {
  try {
    const response = await accounts.put(`/update/${params.id}`, params.data);
    console.log(response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) return error.response?.data;
    return error;
  }
};

export const Delete = async (params: {
  id: string;
}) => {
  try {
    const response = await accounts.delete(`/delete/${params.id}`);
    console.log(response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) return error.response?.data;
    return error;
  }
};

