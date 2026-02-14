import type { account, Category, Record } from "../types/types";

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
export const mockCategories: Category[] = [
  {
    id: 1,
    name: "Salary",
    user_id: 1,
    category_type: "Income",
    icon: 12 // GiReceiveMoney
  },
  {
    id: 2,
    name: "Freelance",
    user_id: 1,
    category_type: "Income",
    icon: 13 // MdWork
  },
  {
    id: 3,
    name: "Interest",
    user_id: 1,
    category_type: "Income",
    icon: 15 // RiRefund2Line (passive income)
  },
  {
    id: 4,
    name: "Sales",
    user_id: 1,
    category_type: "Income",
    icon: 14 // FaGift
  },
  {
    id: 5,
    name: "Groceries",
    user_id: 1,
    category_type: "Expense",
    icon: 23 // FaShoppingCart
  },
  {
    id: 6,
    name: "Transportation",
    user_id: 1,
    category_type: "Expense",
    icon: 24 // FaCar
  },
  {
    id: 7,
    name: "Entertainment",
    user_id: 1,
    category_type: "Expense",
    icon: 7 // GiTakeMyMoney (reused for entertainment)
  },
  {
    id: 8,
    name: "Dining Out",
    user_id: 1,
    category_type: "Expense",
    icon: 18 // RiRestaurantLine
  },
  {
    id: 9,
    name: "Housing",
    user_id: 1,
    category_type: "Expense",
    icon: 19 // FaHome
  },
  {
    id: 10,
    name: "Electronics",
    user_id: 1,
    category_type: "Expense",
    icon: 10 // FaCoins (reused for electronics)
  },
  {
    id: 11,
    name: "Healthcare",
    user_id: 1,
    category_type: "Expense",
    icon: 20 // MdLocalHospital
  },
  {
    id: 12,
    name: "Fitness",
    user_id: 1,
    category_type: "Expense",
    icon: 26 // IoBicycleOutline
  },
  {
    id: 13,
    name: "Coffee",
    user_id: 1,
    category_type: "Expense",
    icon: 17 // FaUtensils (reused for coffee)
  },
  {
    id: 14,
    name: "Dividends",
    user_id: 1,
    category_type: "Income",
    icon: 11 // FaCoins
  },
  {
    id: 15,
    name: "Transfer",
    user_id: 1,
    category_type: "Expense",
    icon: 1 // GiTakeMyMoney
  },
  {
    id: 16,
    name: "Utilities",
    user_id: 1,
    category_type: "Expense",
    icon: 28 // BiWater
  },
  {
    id: 17,
    name: "Insurance",
    user_id: 1,
    category_type: "Expense",
    icon: 21 // AiFillInsurance
  },
  {
    id: 18,
    name: "Shopping",
    user_id: 1,
    category_type: "Expense",
    icon: 22 // RiShoppingBagLine
  },
  {
    id: 19,
    name: "Fuel",
    user_id: 1,
    category_type: "Expense",
    icon: 27 // BiGasPump
  },
  {
    id: 20,
    name: "Childcare",
    user_id: 1,
    category_type: "Expense",
    icon: 29 // MdChildCare
  },
  {
    id: 21,
    name: "Education",
    user_id: 1,
    category_type: "Expense",
    icon: 16 // FaGraduationCap
  },
  {
    id: 22,
    name: "Pets",
    user_id: 1,
    category_type: "Expense",
    icon: 30 // LuBaby (reused for pets)
  },
  {
    id: 23,
    name: "Gifts",
    user_id: 1,
    category_type: "Expense",
    icon: 14 // FaGift
  },
  {
    id: 24,
    name: "Rent",
    user_id: 1,
    category_type: "Expense",
    icon: 19 // FaHome
  },
  {
    id: 25,
    name: "Bonus",
    user_id: 1,
    category_type: "Income",
    icon: 14 // FaGift
  },
  {
    id: 26,
    name: "Investment",
    user_id: 1,
    category_type: "Income",
    icon: 10 // AiFillGold
  },
  {
    id: 27,
    name: "Refund",
    user_id: 1,
    category_type: "Income",
    icon: 15 // RiRefund2Line
  },
  {
    id: 28,
    name: "Public Transport",
    user_id: 1,
    category_type: "Expense",
    icon: 25 // MdTrain
  },
  {
    id: 29,
    name: "Phone",
    user_id: 1,
    category_type: "Expense",
    icon: 28 // BiWater (reused for utilities)
  },
  {
    id: 30,
    name: "Internet",
    user_id: 1,
    category_type: "Expense",
    icon: 28 // BiWater (reused for utilities)
  }
];
  export const mockAccounts: account[] = [
  {
    id: 101,
    name: "Checking Account",
    balance: "2450.75",
    user_id: 1,
    icon:1
  },
  {
    id: 102,
    name: "Credit Card",
    balance: "1250.25",
    user_id: 1,
    icon:2
  },
  {
    id: 103,
    name: "Savings Account",
    balance: "7500.50",
    user_id: 1,
    icon:3
  },
  {
    id: 104,
    name: "Investment Account",
    balance: "15000.00",
    user_id: 1,
    icon:4
  },
   {
    id: 105,
    name: "Checking Account",
    balance: "2450.75",
    user_id: 1,
    icon:5
  },
  {
    id: 106,
    name: "Credit Card",
    balance: "1250.25",
    user_id: 1,
    icon:6
  },
  {
    id: 107,
    name: "Savings Account",
    balance: "7500.50",
    user_id: 1,
    icon:7
  },
  {
    id: 108,
    name: "Investment Account",
    balance: "15000.00",
    user_id: 1,
    icon:8
  },
  {
    id: 109,
    name: "Savings Account",
    balance: "7500.50",
    user_id: 1,
    icon:7
  },
  {
    id: 110,
    name: "Investment Account",
    balance: "15000.00",
    user_id: 1,
    icon:8
  }
];

  export const mockRecords: Record[] = [
  {
    id: 1,
    time: "2024-01-15T09:30:00Z",
    type: "Expense",
    amount: "45.50",
    account: 101,
    category: 5,
    notes: "Grocery shopping at Walmart",
    user_id: 1,
    transferred_to_account: null,
    categories: {
      id: 5,
      name: "Groceries",
      user_id: 1,
      category_type: "Expense",
      icon: 25
    },
    accounts_records_accountToaccounts: {
      id: 101,
      name: "Checking Account",
      balance: "2450.75",
      user_id: 1,
      icon:1
    },
    accounts_records_transferred_to_accountToaccounts: null
  },
  {
    id: 2,
    time: "2024-01-15T13:45:00Z",
    type: "Income",
    amount: "2500.00",
    account: 101,
    category: 1,
    notes: "Monthly salary",
    user_id: 1,
    transferred_to_account: null,
    categories: {
      id: 1,
      name: "Salary",
      user_id: 1,
      category_type: "Income",
      icon: 10
    },
    accounts_records_accountToaccounts: {
      id: 101,
      name: "Checking Account",
      balance: "2450.75",
      user_id: 1,
      icon:1
    },
    accounts_records_transferred_to_accountToaccounts: null
  },
  {
    id: 3,
    time: "2024-01-16T19:20:00Z",
    type: "Expense",
    amount: "85.75",
    account: 102,
    category: 8,
    notes: "Dinner at Italian restaurant",
    user_id: 1,
    transferred_to_account: null,
    categories: {
      id: 8,
      name: "Dining Out",
      user_id: 1,
      category_type: "Expense",
      icon: 30
    },
    accounts_records_accountToaccounts: {
      id: 102,
      name: "Credit Card",
      balance: "1250.25",
      user_id: 1,
      icon:1
    },
    accounts_records_transferred_to_accountToaccounts: null
  },
  {
    id: 4,
    time: "2024-01-17T11:00:00Z",
    type: "Transfer",
    amount: "500.00",
    account: 101,
    category: 15,
    notes: "Transfer to savings",
    user_id: 1,
    transferred_to_account: 103,
    categories: {
      id: 15,
      name: "Transfer",
      user_id: 1,
      category_type: "Expense",
      icon: 45
    },
    accounts_records_accountToaccounts: {
      id: 101,
      name: "Checking Account",
      balance: "2450.75",
      user_id: 1,
      icon:1
    },
    accounts_records_transferred_to_accountToaccounts: {
      id: 103,
      name: "Savings Account",
      balance: "7500.50",
      user_id: 1,
      icon:1
    }
  },
  {
    id: 5,
    time: "2024-01-18T08:45:00Z",
    type: "Expense",
    amount: "120.00",
    account: 102,
    category: 6,
    notes: "Gas for car",
    user_id: 1,
    transferred_to_account: null,
    categories: {
      id: 6,
      name: "Transportation",
      user_id: 1,
      category_type: "Expense",
      icon: 26
    },
    accounts_records_accountToaccounts: {
      id: 102,
      name: "Credit Card",
      balance: "1250.25",
      user_id: 1,
      icon:1
    },
    accounts_records_transferred_to_accountToaccounts: null
  },
  {
    id: 6,
    time: "2024-01-19T14:30:00Z",
    type: "Income",
    amount: "350.00",
    account: 101,
    category: 2,
    notes: "Freelance project payment",
    user_id: 1,
    transferred_to_account: null,
    categories: {
      id: 2,
      name: "Freelance",
      user_id: 1,
      category_type: "Income",
      icon: 11
    },
    accounts_records_accountToaccounts: {
      id: 101,
      name: "Checking Account",
      balance: "2450.75",
      user_id: 1,
      icon:1
    },
    accounts_records_transferred_to_accountToaccounts: null
  },
  {
    id: 7,
    time: "2024-01-20T17:15:00Z",
    type: "Expense",
    amount: "65.99",
    account: 101,
    category: 7,
    notes: "Netflix subscription",
    user_id: 1,
    transferred_to_account: null,
    categories: {
      id: 7,
      name: "Entertainment",
      user_id: 1,
      category_type: "Expense",
      icon: 28
    },
    accounts_records_accountToaccounts: {
      id: 101,
      name: "Checking Account",
      balance: "2450.75",
      user_id: 1,
      icon:1
    },
    accounts_records_transferred_to_accountToaccounts: null
  },
  {
    id: 8,
    time: "2024-01-21T09:00:00Z",
    type: "Expense",
    amount: "1200.00",
    account: 101,
    category: 9,
    notes: "Monthly rent payment",
    user_id: 1,
    transferred_to_account: null,
    categories: {
      id: 9,
      name: "Housing",
      user_id: 1,
      category_type: "Expense",
      icon: 35
    },
    accounts_records_accountToaccounts: {
      id: 101,
      name: "Checking Account",
      balance: "2450.75",
      user_id: 1,
      icon:1
    },
    accounts_records_transferred_to_accountToaccounts: null
  },
  {
    id: 9,
    time: "2024-01-22T16:45:00Z",
    type: "Income",
    amount: "75.50",
    account: 103,
    category: 3,
    notes: "Interest from savings",
    user_id: 1,
    transferred_to_account: null,
    categories: {
      id: 3,
      name: "Interest",
      user_id: 1,
      category_type: "Income",
      icon: 12
    },
    accounts_records_accountToaccounts: {
      id: 103,
      name: "Savings Account",
      balance: "7500.50",
      user_id: 1,
      icon:1
    },
    accounts_records_transferred_to_accountToaccounts: null
  },
  {
    id: 10,
    time: "2024-01-23T12:30:00Z",
    type: "Transfer",
    amount: "200.00",
    account: 103,
    category: 15,
    notes: "Transfer to investment account",
    user_id: 1,
    transferred_to_account: 104,
    categories: {
      id: 15,
      name: "Transfer",
      user_id: 1,
      category_type: "Expense",
      icon: 45
    },
    accounts_records_accountToaccounts: {
      id: 103,
      name: "Savings Account",
      balance: "7500.50",
      user_id: 1,
      icon:1
    },
    accounts_records_transferred_to_accountToaccounts: {
      id: 104,
      name: "Investment Account",
      balance: "15000.00",
      user_id: 1,
      icon:1
    }
  },
  {
    id: 11,
    time: "2024-01-24T10:15:00Z",
    type: "Expense",
    amount: "89.99",
    account: 102,
    category: 10,
    notes: "New headphones",
    user_id: 1,
    transferred_to_account: null,
    categories: {
      id: 10,
      name: "Electronics",
      user_id: 1,
      category_type: "Expense",
      icon: 40
    },
    accounts_records_accountToaccounts: {
      id: 102,
      name: "Credit Card",
      balance: "1250.25",
      user_id: 1,
      icon:1
    },
    accounts_records_transferred_to_accountToaccounts: null
  },
  {
    id: 12,
    time: "2024-01-25T13:00:00Z",
    type: "Expense",
    amount: "45.00",
    account: 101,
    category: 11,
    notes: "Doctor visit copay",
    user_id: 1,
    transferred_to_account: null,
    categories: {
      id: 11,
      name: "Healthcare",
      user_id: 1,
      category_type: "Expense",
      icon: 38
    },
    accounts_records_accountToaccounts: {
      id: 101,
      name: "Checking Account",
      balance: "2450.75",
      user_id: 1,
      icon:1
    },
    accounts_records_transferred_to_accountToaccounts: null
  },
  {
    id: 13,
    time: "2024-01-26T18:30:00Z",
    type: "Income",
    amount: "120.00",
    account: 101,
    category: 4,
    notes: "Sold old books",
    user_id: 1,
    transferred_to_account: null,
    categories: {
      id: 4,
      name: "Sales",
      user_id: 1,
      category_type: "Income",
      icon: 13
    },
    accounts_records_accountToaccounts: {
      id: 101,
      name: "Checking Account",
      balance: "2450.75",
      user_id: 1,
      icon:1
    },
    accounts_records_transferred_to_accountToaccounts: null
  },
  {
    id: 14,
    time: "2024-01-27T15:20:00Z",
    type: "Expense",
    amount: "35.75",
    account: 102,
    category: 5,
    notes: "Weekly groceries",
    user_id: 1,
    transferred_to_account: null,
    categories: {
      id: 5,
      name: "Groceries",
      user_id: 1,
      category_type: "Expense",
      icon: 25
    },
    accounts_records_accountToaccounts: {
      id: 102,
      name: "Credit Card",
      balance: "1250.25",
      user_id: 1,
      icon:1
    },
    accounts_records_transferred_to_accountToaccounts: null
  },
  {
    id: 15,
    time: "2024-01-28T11:45:00Z",
    type: "Expense",
    amount: "60.00",
    account: 101,
    category: 12,
    notes: "Gym membership",
    user_id: 1,
    transferred_to_account: null,
    categories: {
      id: 12,
      name: "Fitness",
      user_id: 1,
      category_type: "Expense",
      icon: 42
    },
    accounts_records_accountToaccounts: {
      id: 101,
      name: "Checking Account",
      balance: "2450.75",
      user_id: 1,
      icon:1
    },
    accounts_records_transferred_to_accountToaccounts: null
  },
  {
    id: 16,
    time: "2024-01-29T08:00:00Z",
    type: "Income",
    amount: "1500.00",
    account: 104,
    category: 14,
    notes: "Stock dividend",
    user_id: 1,
    transferred_to_account: null,
    categories: {
      id: 14,
      name: "Dividends",
      user_id: 1,
      category_type: "Income",
      icon: 15
    },
    accounts_records_accountToaccounts: {
      id: 104,
      name: "Investment Account",
      balance: "15000.00",
      user_id: 1,
      icon:1
    },
    accounts_records_transferred_to_accountToaccounts: null
  },
  {
    id: 17,
    time: "2024-01-30T14:10:00Z",
    type: "Expense",
    amount: "22.50",
    account: 101,
    category: 13,
    notes: "Coffee shop",
    user_id: 1,
    transferred_to_account: null,
    categories: {
      id: 13,
      name: "Coffee",
      user_id: 1,
      category_type: "Expense",
      icon: 44
    },
    accounts_records_accountToaccounts: {
      id: 101,
      name: "Checking Account",
      balance: "2450.75",
      user_id: 1,
      icon:1
    },
    accounts_records_transferred_to_accountToaccounts: null
  },
  {
    id: 18,
    time: "2024-01-31T19:45:00Z",
    type: "Transfer",
    amount: "300.00",
    account: 101,
    category: 15,
    notes: "Pay credit card bill",
    user_id: 1,
    transferred_to_account: 102,
    categories: {
      id: 15,
      name: "Transfer",
      user_id: 1,
      category_type: "Expense",
      icon: 45
    },
    accounts_records_accountToaccounts: {
      id: 101,
      name: "Checking Account",
      balance: "2450.75",
      user_id: 1,
      icon:1
    },
    accounts_records_transferred_to_accountToaccounts: {
      id: 102,
      name: "Credit Card",
      balance: "1250.25",
      user_id: 1,
      icon:1
    }
  },
  {
    id: 19,
    time: "2024-02-01T10:00:00Z",
    type: "Expense",
    amount: "95.00",
    account: 102,
    category: 16,
    notes: "Internet bill",
    user_id: 1,
    transferred_to_account: null,
    categories: {
      id: 16,
      name: "Utilities",
      user_id: 1,
      category_type: "Expense",
      icon: 36
    },
    accounts_records_accountToaccounts: {
      id: 102,
      name: "Credit Card",
      balance: "1250.25",
      user_id: 1,
      icon:1
    },
    accounts_records_transferred_to_accountToaccounts: null
  },
  {
    id: 20,
    time: "2024-02-02T16:30:00Z",
    type: "Income",
    amount: "500.00",
    account: 101,
    category: 1,
    notes: "Bonus payment",
    user_id: 1,
    transferred_to_account: null,
    categories: {
      id: 1,
      name: "Salary",
      user_id: 1,
      category_type: "Income",
      icon: 10
    },
    accounts_records_accountToaccounts: {
      id: 101,
      name: "Checking Account",
      balance: "2450.75",
      user_id: 1,
      icon:1
    },
    accounts_records_transferred_to_accountToaccounts: null
  }
];