import type { ReactNode } from "react";
// Popular react-icons libraries for finance: Fa (FontAwesome), Ai (AntDesign), Gi (GameIcons), Md (Material), Ri (Remix), Bi (BoxIcons), Io5 (Ionicons5), Lu (Lucide)
import { FaWallet, FaCar, FaShoppingCart, FaGraduationCap, FaGift, FaUtensils, FaHome, FaPiggyBank, FaCcVisa, FaLandmark, FaCoins } from "react-icons/fa";
import { AiFillGold, AiFillInsurance } from "react-icons/ai";
import { GiReceiveMoney, GiTakeMyMoney, GiMoneyStack } from "react-icons/gi";
import {  MdOutlineSavings, MdWork, MdLocalHospital, MdTrain, MdChildCare } from "react-icons/md";
import {  RiRefund2Line, RiBankLine, RiShoppingBagLine, RiRestaurantLine } from "react-icons/ri";
import { BiGasPump, BiWater } from "react-icons/bi";
import { IoWalletOutline, IoBicycleOutline, IoPricetagOutline } from "react-icons/io5";
import { LuBaby } from "react-icons/lu";
import { CiWallet } from "react-icons/ci";

interface IconsMapInterface {
  icon_id: number;
  element: ReactNode;
}

const IconClass = "text-4xl"
export const IconsMap: IconsMapInterface[] = [
  // ----- ACCOUNTS (Cards, Bank, Cash, Savings, Wallet, Investment) -----
  {
    icon_id: 1,
    element: <GiTakeMyMoney className={IconClass}/>, // Your existing icon (Cash/Expense)
  },
  {
    icon_id: 2,
    element: <FaWallet className={IconClass}/>, // Generic Wallet
  },
  {
    icon_id: 3,
    element: <FaCcVisa className={IconClass}/>, // Credit/Debit Card
  },
  {
    icon_id: 4,
    element: <RiBankLine className={IconClass}/>, // Bank / Institution
  },
  {
    icon_id: 5,
    element: <GiMoneyStack className={IconClass}/>, // Cash / Bills
  },
  {
    icon_id: 6,
    element: <FaPiggyBank className={IconClass}/>, // Savings
  },
  {
    icon_id: 7,
    element: <FaLandmark className={IconClass}/>, // Bank / Government / Large Institution
  },
  {
    icon_id: 8,
    element: <IoWalletOutline className={IconClass}/>, // Outline Wallet
  },
  {
    icon_id: 9,
    element: <MdOutlineSavings className={IconClass}/>, // Savings Account
  },
  {
    icon_id: 10,
    element: <AiFillGold className={IconClass}/>, // Investment / Gold / Wealth
  },
  {
    icon_id: 11,
    element: <FaCoins className={IconClass}/>, // Coins / Loose change
  },
  // ----- INCOME (Salary, Award, Bonus, Freelance, Gift, Refund) -----
  {
    icon_id: 12,
    element: <GiReceiveMoney className={IconClass}/>, // Income / Money In
  },
  {
    icon_id: 13,
    element: <MdWork className={IconClass} />, // Salary / Job
  },
  {
    icon_id: 14,
    element: <FaGift className={IconClass}/>, // Award / Bonus / Gift
  },
  {
    icon_id: 15,
    element: <RiRefund2Line className={IconClass}/>, // Refund / Cashback
  },
  {
    icon_id: 16,
    element: <FaGraduationCap className={IconClass}/>, // Scholarship / Education Income
  },
  // ----- EXPENSE (Food, Rent, Health, Insurance, Shopping, Transport, Utilities, Entertainment, Childcare, Education, Pets) -----
  {
    icon_id: 17,
    element: <FaUtensils className={IconClass}/>, // Food / Dining
  },
  {
    icon_id: 18,
    element: <RiRestaurantLine className={IconClass}/>, // Restaurant / Takeout
  },
  {
    icon_id: 19,
    element: <FaHome className={IconClass}/>, // Rent / Housing
  },
  {
    icon_id: 20,
    element: <MdLocalHospital className={IconClass}/>, // Health / Medical
  },
  {
    icon_id: 21,
    element: <AiFillInsurance className={IconClass}/>, // Insurance
  },
  {
    icon_id: 22,
    element: <RiShoppingBagLine className={IconClass}/>, // Shopping / Retail
  },
  {
    icon_id: 23,
    element: <FaShoppingCart className={IconClass}/>, // Groceries / Cart
  },
  {
    icon_id: 24,
    element: <FaCar className={IconClass}/>, // Car / Vehicle
  },
  {
    icon_id: 25,
    element: <MdTrain className={IconClass}/>, // Public Transport
  },
  {
    icon_id: 26,
    element: <IoBicycleOutline className={IconClass}/>, // Bike / Eco Transport
  },
  {
    icon_id: 27,
    element: <BiGasPump className={IconClass}/>, // Fuel / Gas
  },
  {
    icon_id: 28,
    element: <BiWater className={IconClass}/>, // Utilities (Water)
  },
  {
    icon_id: 29,
    element: <MdChildCare className={IconClass}/>, // Childcare / Kids
  },
  {
    icon_id: 30,
    element: <LuBaby className={IconClass}/>, // Baby / Family expenses
  },
  {
    icon_id:31,
    element: <IoPricetagOutline className={IconClass}/>
  },
  {
    icon_id:32,
    element : <CiWallet className={IconClass}/>
  }
];