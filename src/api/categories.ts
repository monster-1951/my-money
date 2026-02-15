import axios from "axios";
import { categories } from "./axios";
import type { CreateCategoryParams, SaveCategoryParams } from "../types/types";

export const GetCategoriesApi = async () => {
  try {
    const response = await categories.get(`/`);
    console.log(response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) return error.response?.data;
    return error;
  }
};

export const CreateCategoryApi = async (params: CreateCategoryParams) => {
  try {
    const response = await categories.post("/create", params);
    console.log(response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) return error.response?.data;
    return error;
  }
};

export const UpdateCategoryApi = async (params: SaveCategoryParams) => {
  try {
    const response = await categories.put(`/update/${params.id}`, params.data);
    console.log(response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) return error.response?.data;
    return error;
  }
};

export const DeleteCategoryApi = async (params: {
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