import axios from "axios";
import { accounts } from "./axios";

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
