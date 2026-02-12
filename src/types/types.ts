import type { AxiosResponse } from "axios";
import type Decimal from "decimal.js";

export interface financialMetric {
  name: string;
  value: Decimal;
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
  icon:number;
}

export interface Record {
  id: number;
  time: string;
  type: record_type
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
