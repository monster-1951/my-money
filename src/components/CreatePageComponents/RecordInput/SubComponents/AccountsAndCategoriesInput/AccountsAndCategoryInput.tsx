import type {
  record_type,
  account,
  Category,
} from "../../../../../types/types";

import AccountInput from "./AccountInput";
import CategoryInput from "./CategoryInput";
import TransferredToAccountInput from "./TransferToAccountInput";

interface AccountsAndCategoryInputInterface {
  record_type: record_type;
  accounts: account[];
  setAccount: React.Dispatch<React.SetStateAction<number>>;
  categories: Category[];
  setCategory: React.Dispatch<React.SetStateAction<number>>;
  setTransferredToAccount: React.Dispatch<React.SetStateAction<number>>;
}

const AccountsAndCategoryInput = (props: AccountsAndCategoryInputInterface) => {
  return (
    <>
      <div className="flex justify-around">
        <button className="w-full text-xs font-light">Account</button>
        <button className="w-full text-xs font-light">
          {props.record_type !== "Transfer" ? "Category" : "To"}
        </button>
      </div>
      <div className="flex justify-around px-1 py-2 space-x-1 font-semibold">
        <AccountInput accounts={props.accounts} setAccount={props.setAccount} />
        {props.record_type !== "Transfer" && (
          <CategoryInput
            categories={props.categories}
            record_type={props.record_type}
            setCategory={props.setCategory}
          />
        )}
        {props.record_type === "Transfer" && (
          <TransferredToAccountInput
            accounts={props.accounts}
            setTransferredToAccount={props.setTransferredToAccount}
          />
        )}
      </div>
    </>
  );
};

export default AccountsAndCategoryInput;
