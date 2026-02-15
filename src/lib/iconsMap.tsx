import {
  Car,
  Shirt,
  Cutlery,
  HomeAlt,
  Cart,
  CinemaOld,
  PharmacyCrossCircle,
  SecureWindow,
  TennisBall,
  Cut,
  SmartphoneDevice,
  Archive,
  Flower,
  Group,
  Notes,
  Bus,
  MoneySquare,
  ShoppingCode,
  CoffeeCup,
  CashSolid,
  Gift,
  Restart,
  Wallet,
  Cash,
  CreditCard,
  PiggyBank,
  MastercardCard,
  Coins,
  CardWallet,
  Paypal,
  LightBulbOn,
  Potion,
  Bank,
  Suitcase,
} from "iconoir-react";
import type { Icons } from "../types/types";



const IconClass = "";

export const IconsMap: Icons[] = [
  { icon_id: 1, element: <Wallet className={IconClass} /> },
  { icon_id: 2, element: <CreditCard className={IconClass} /> },
  { icon_id: 3, element: <Bank className={IconClass} /> },
  { icon_id: 4, element: <Cash className={IconClass} /> },
  { icon_id: 5, element: <CashSolid className={IconClass} /> },
  { icon_id: 6, element: <PiggyBank className={IconClass} /> },
  { icon_id: 7, element: <Coins className={IconClass} /> },
  { icon_id: 8, element: <MoneySquare className={IconClass} /> },
  { icon_id: 9, element: <CardWallet className={IconClass} /> },
  { icon_id: 10, element: <MastercardCard className={IconClass} /> },
  { icon_id: 11, element: <Paypal className={IconClass} /> },

  // Shopping & Lifestyle
  { icon_id: 12, element: <Cart className={IconClass} /> },
  { icon_id: 13, element: <ShoppingCode className={IconClass} /> },
  { icon_id: 14, element: <Shirt className={IconClass} /> },
  { icon_id: 15, element: <Cutlery className={IconClass} /> },
  { icon_id: 16, element: <CoffeeCup className={IconClass} /> },
  { icon_id: 17, element: <Gift className={IconClass} /> },

  // Home & Utilities
  { icon_id: 18, element: <HomeAlt className={IconClass} /> },
  { icon_id: 19, element: <LightBulbOn className={IconClass} /> },
  { icon_id: 20, element: <SecureWindow className={IconClass} /> },
  { icon_id: 21, element: <SmartphoneDevice className={IconClass} /> },

  // Health & Care
  { icon_id: 22, element: <PharmacyCrossCircle className={IconClass} /> },
  { icon_id: 23, element: <Potion className={IconClass} /> },

  // Transport
  { icon_id: 24, element: <Car className={IconClass} /> },
  { icon_id: 25, element: <Bus className={IconClass} /> },

  // Sports & Fun
  { icon_id: 26, element: <TennisBall className={IconClass} /> },
  { icon_id: 27, element: <CinemaOld className={IconClass} /> },

  // Misc
  { icon_id: 28, element: <Cut className={IconClass} /> },
  { icon_id: 29, element: <Archive className={IconClass} /> },
  { icon_id: 30, element: <Notes className={IconClass} /> },
  { icon_id: 31, element: <Flower className={IconClass} /> },
  { icon_id: 32, element: <Group className={IconClass} /> },
  { icon_id: 33, element: <Restart className={IconClass} /> },
   { icon_id: 34, element: <Suitcase className={IconClass} /> },
];

export const accountIconsMap = IconsMap.slice(0,11)
