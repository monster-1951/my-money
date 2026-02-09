import axios from "axios";
import { records } from "./axios";

export const getRecords = async () => {
  try {
    const response = await records.get("/");
    return response;
  } catch (error) {
     if (axios.isAxiosError(error)) return error.response;
    return error;
  }
};
