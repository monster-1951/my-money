import { useEffect, useState } from "react";


import AccountInput from "./Inputs/AccountInput";
import CategoryInput from "./Inputs/CategoryInput";
import TransferredToAccountInput from "./TransferToAccountInput";
import { toast } from "react-toastify";
import type { account, Category, record_type } from "../../../../../../types/types";
import { GetAccountsapi } from "../../../../../../api/accounts";
import { GetCategoriesApi } from "../../../../../../api/categories";

interface AccountsAndCategoryInputInterface {
  record_type: record_type;
  account:number;
  category:number;
  setAccount: React.Dispatch<React.SetStateAction<number>>;
  setCategory: React.Dispatch<React.SetStateAction<number>>;
  setTransferredToAccount: React.Dispatch<React.SetStateAction<number>>;
  transferred_to_account:number
}

const AccountsAndCategoryInput = (props: AccountsAndCategoryInputInterface) => {
  const [accounts, setAccounts] = useState<account[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const GetAllAccounts = async () => {
      try {
        const response = await GetAccountsapi();
        if (!response.allAccounts) {
          toast.error(response.message);
        }
        setAccounts(response.allAccounts);
      } catch (error) {
        toast.error("Failed to fetch records");
      }
    };
    const GetAllCategories = async () => {
      try {
        const response = await GetCategoriesApi();
        if (!response.categories) {
          toast.error(response.message);
        }
        const allCategories = response.categories as Category[];
        setCategories(allCategories);
      } catch (error) {
        toast.error("Failed to fetch records");
      }
    };
    GetAllAccounts();
    GetAllCategories()
  }, []);
  return (
    <>
      <div className="flex justify-around">
        <button className="w-full text-xs font-light">Account</button>
        <button className="w-full text-xs font-light">
          {props.record_type !== "Transfer" ? "Category" : "To"}
        </button>
      </div>
      <div className="flex justify-around px-1 py-2 space-x-1 font-semibold">
        <AccountInput
          accounts={accounts}
          setAccount={props.setAccount}
          setAccounts={setAccounts}
          account={props.account}
        />
        {props.record_type !== "Transfer" && (
          <CategoryInput
            categories={categories}
            record_type={props.record_type}
            setCategory={props.setCategory}
            setCategories={setCategories}
            category={props.category}
          />
        )}
        {props.record_type === "Transfer" && (
          <TransferredToAccountInput
            accounts={accounts}
            setTransferredToAccount={props.setTransferredToAccount}
            setAccounts={setAccounts}
            transferred_to_account={props.transferred_to_account}
          />
        )}
      </div>
    </>
  );
};

export default AccountsAndCategoryInput;
