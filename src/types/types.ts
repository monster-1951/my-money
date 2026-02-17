import type { AxiosResponse } from "axios";
import type Decimal from "decimal.js";
import type { ReactNode } from "react";

export interface financialMetric {
  name: string;
  value: Decimal;
}

export interface Icons {
  icon_id: number;
  element: ReactNode;
}

export interface sessionUser {
  id: number;
  name: string;
  email: string;
  iat: number;
  exp: number;
}

export interface formField {
  label: string;
  name: string;
  type: string;
  value: string | number;
  placeholder: string;
  required: boolean;
  InputElementClassName: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type category_type = "Expense" | "Income";

export type record_type = "Income" | "Expense" | "Transfer";

export interface Category {
  id: number;
  name: string;
  user_id: number;
  category_type: category_type;
  icon: number;
}

export interface account {
  id: number;
  name: string;
  balance: string;
  user_id: number;
  icon: number;
}

export interface Record {
  id: number;
  time: string;
  type: record_type;
  amount: string;
  account: number;
  category: number;
  notes: string;
  user_id: number;
  transferred_to_account: number | null;
  categories: Category | null;
  accounts_records_accountToaccounts: account;
  accounts_records_transferred_to_accountToaccounts: account | null;
}

export interface ServiceResponse {
  message: string;
  error?: unknown;
  statusCode: number;
}

export interface GetAllRecordsResponse extends AxiosResponse {
  Records?: Record[];
  TotalCount?: number;
  TotalRecords?: number;
}

export interface SaveAccountParams {
  data: { name: string; balance: number; icon: number };
  id: string;
}

export interface CreateCategoryParams {
  name: string;
  category_type: category_type;
  icon: number;
}

export interface SaveCategoryParams {
  data: CreateCategoryParams;
  id: string;
}

export interface CreateIncomeExpenseRecordParams {
  type: "Income" | "Expense"
  amount:number;
  account_id:number;
  time:string;
  category_id:number;
  notes?:string;
}

export interface CreateTransferRecordParams {
  type:"Transfer";
  amount:number;
  account_id:number;
  time:string;
  notes?:string;
  transferred_to_account_id:number;
}

export interface RecordDataToModify {
  type: record_type;
  amount: number;
  account_id: number;
  transferred_to_account_id: number | null;
  time: string;
  category_id: number | null;
  notes: string;
}
export interface UpdateRecordParams {
  id: number;
  data: RecordDataToModify;
}

export interface GroupedByDateInterface {
  [key: string]: Record[] | undefined;
}