import type { TransactionRecord } from "../types/types";

export const Months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

export const records : TransactionRecord[] = [
  {
    "TIME": "Jan 01, 2026 9:15 AM",
    "TYPE": "Income",
    "AMOUNT": 200.00,
    "CATEGORY": "Grants",
    "ACCOUNT": "UBI",
    "NOTES": "Monthly assistance"
  },
  {
    "TIME": "Jan 02, 2026 11:40 AM",
    "TYPE": "Expense",
    "AMOUNT": 75.00,
    "CATEGORY": "Telephone",
    "ACCOUNT": "Cash",
    "NOTES": "Mobile recharge"
  },
  {
    "TIME": "Jan 03, 2026 5:30 PM",
    "TYPE": "Expense",
    "AMOUNT": 120.00,
    "CATEGORY": "Unknown",
    "ACCOUNT": "SBI",
    "NOTES": "Miscellaneous purchase"
  },
  {
    "TIME": "Jan 04, 2026 7:09 PM",
    "TYPE": "Income",
    "AMOUNT": 50.00,
    "CATEGORY": "Grants",
    "ACCOUNT": "UBI",
    "NOTES": "For medicines"
  },
  {
    "TIME": "Jan 05, 2026 10:00 AM",
    "TYPE": "Transfer",
    "AMOUNT": 300.00,
    "CATEGORY": "Unknown",
    "ACCOUNT": "SBI",
    "NOTES": "Moved to Cash"
  },
  {
    "TIME": "Jan 06, 2026 6:20 PM",
    "TYPE": "Expense",
    "AMOUNT": 40.00,
    "CATEGORY": "Telephone",
    "ACCOUNT": "Cash",
    "NOTES": "SIM card"
  },
  {
    "TIME": "Jan 07, 2026 8:45 AM",
    "TYPE": "Income",
    "AMOUNT": 150.00,
    "CATEGORY": "Grants",
    "ACCOUNT": "IBI",
    "NOTES": "Health support"
  },
  {
    "TIME": "Jan 08, 2026 1:15 PM",
    "TYPE": "Expense",
    "AMOUNT": 60.00,
    "CATEGORY": "Unknown",
    "ACCOUNT": "Cash",
    "NOTES": "Snacks and drinks"
  },
  {
    "TIME": "Jan 09, 2026 4:00 PM",
    "TYPE": "Transfer",
    "AMOUNT": 500.00,
    "CATEGORY": "Unknown",
    "ACCOUNT": "UBI",
    "NOTES": "Transfer to SBI"
  },
  {
    "TIME": "Jan 10, 2026 9:30 AM",
    "TYPE": "Expense",
    "AMOUNT": 90.00,
    "CATEGORY": "Telephone",
    "ACCOUNT": "SBI",
    "NOTES": "Internet bill"
  },
  {
    "TIME": "Jan 11, 2026 7:00 PM",
    "TYPE": "Income",
    "AMOUNT": 100.00,
    "CATEGORY": "Grants",
    "ACCOUNT": "Cash",
    "NOTES": "Community help"
  },
  {
    "TIME": "Jan 12, 2026 12:10 PM",
    "TYPE": "Expense",
    "AMOUNT": 30.00,
    "CATEGORY": "Unknown",
    "ACCOUNT": "Cash",
    "NOTES": "Stationery"
  },
  {
    "TIME": "Jan 13, 2026 3:50 PM",
    "TYPE": "Transfer",
    "AMOUNT": 250.00,
    "CATEGORY": "Unknown",
    "ACCOUNT": "IBI",
    "NOTES": "Moved to UBI"
  },
  {
    "TIME": "Jan 14, 2026 11:30 AM",
    "TYPE": "Expense",
    "AMOUNT": 55.00,
    "CATEGORY": "Telephone",
    "ACCOUNT": "UBI",
    "NOTES": "Phone accessories"
  },
  {
    "TIME": "Jan 15, 2026 6:00 PM",
    "TYPE": "Income",
    "AMOUNT": 180.00,
    "CATEGORY": "Grants",
    "ACCOUNT": "SBI",
    "NOTES": "Education aid"
  },
  {
    "TIME": "Jan 16, 2026 2:25 PM",
    "TYPE": "Expense",
    "AMOUNT": 70.00,
    "CATEGORY": "Unknown",
    "ACCOUNT": "Cash",
    "NOTES": "Household items"
  },
  {
    "TIME": "Jan 17, 2026 9:00 AM",
    "TYPE": "Transfer",
    "AMOUNT": 400.00,
    "CATEGORY": "Unknown",
    "ACCOUNT": "SBI",
    "NOTES": "Moved to IBI"
  },
  {
    "TIME": "Jan 18, 2026 8:40 PM",
    "TYPE": "Expense",
    "AMOUNT": 65.00,
    "CATEGORY": "Telephone",
    "ACCOUNT": "Cash",
    "NOTES": "Prepaid top-up"
  },
  {
    "TIME": "Jan 19, 2026 10:15 AM",
    "TYPE": "Income",
    "AMOUNT": 220.00,
    "CATEGORY": "Grants",
    "ACCOUNT": "UBI",
    "NOTES": "Emergency support"
  },
  {
    "TIME": "Jan 20, 2026 5:45 PM",
    "TYPE": "Expense",
    "AMOUNT": 95.00,
    "CATEGORY": "Unknown",
    "ACCOUNT": "SBI",
    "NOTES": "General shopping"
  }
]

export const totalExpense = records.filter(record=>record.TYPE=="Expense").map(records=>records.AMOUNT).reduce((x,y) => {
    return x+y
  },0)

export const totalIncome = records.filter(record=>record.TYPE=="Income").map(records=>records.AMOUNT).reduce((x,y) => {
    return x+y
  },0)