import axios from "axios";
import { records } from "./axios";
import type {
  CreateIncomeExpenseRecordParams,
  CreateTransferRecordParams,
  UpdateRecordParams,
} from "../types/types";

export const GetRecordsApi = async (month:string,nextMonth:string) => {
  try {
    const response = await records.get("/",{
       params:{
         time_gte:`2026-${month}-01T00:00:00.000Z`,
         time_lt:`2026-${nextMonth}-01T00:00:00.000Z`,
       }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) return error.response?.data;
    return error;
  }
};

export const CreateRecordApi = async (
  params: CreateIncomeExpenseRecordParams,
) => {
  try {
    console.log(params);
    const response = await records.post("/create", params);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) return error.response?.data;
    return error;
  }
};

export const CreateTransferRecordApi = async (
  params: CreateTransferRecordParams,
) => {
  try {
    const response = await records.post("/create/transfer_record", params);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) return error.response?.data;
    return error;
  }
};

export const UpdateToIncomeExpenseRecordApi = async (
  params: UpdateRecordParams,
) => {
  try {
    const response = await records.put(
      `/update/to_income_expense/${params.id}`,
      params.data,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) return error.response?.data;
    return error;
  }
};

export const UpdateToTransferRecordApi = async (
  params: UpdateRecordParams,
) => {
  try {
    const response = await records.put(
      `/update/to_transfer_record/${params.id}`,
      params.data,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) return error.response?.data;
    return error;
  }
};

export const DeleteRecordApi = async (params: { id: string }) => {
  try {
    const response = await records.delete(`/delete/${params.id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) return error.response?.data;
    return error;
  }
};
