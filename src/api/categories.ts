import axios from "axios";
import { categories } from "./axios";
import type { CreateCategoryParams, SaveCategoryParams } from "../types/types";

export const Get = async () => {
  try {
    const response = await categories.get(`/`);
    console.log(response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) return error.response?.data;
    return error;
  }
};

export const Create = async (params: CreateCategoryParams) => {
  try {
    const response = await categories.post("/create", params);
    console.log(response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) return error.response?.data;
    return error;
  }
};

export const Update = async (params: SaveCategoryParams) => {
  try {
    const response = await categories.put(`/update/${params.id}`, params.data);
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
    const response = await categories.delete(`/delete/${params.id}`);
    console.log(response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) return error.response?.data;
    return error;
  }
};