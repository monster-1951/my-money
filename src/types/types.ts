export interface financialMetric {
  name: string;
  value: number;
}

export interface TransactionRecord {
    TIME : string;
    TYPE : "(+) Income" | "(-) Expense" | "(.) Transfer";
    AMOUNT : number;
    CATEGORY : string;
    ACCOUNT : string;
    NOTES : string;
}