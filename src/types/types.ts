import type { AxiosResponse } from "axios";

export interface financialMetric {
  name: string;
  value: number;
}

export interface Record {
    id:number,
    time : string;
    type : "Income" | "Expense" | "Transfer";
    amount : string;
    category : number;
    account : number;
    notes : string;
    user_id:number;
    transferred_to_account:number | null
}

export interface ServiceResponse {
    message: string;
    error?: unknown;
    statusCode: number;
}

export interface GetAllRecordsResponse extends AxiosResponse {
  Records?: Record[];
  TotalCount?: number;
  TotalRecords?:number;
}