import { useState } from "react";
import MappedIcon from "../../../../UtilityComponents/MappedIcon";
import SelectAccount from "./Select/SelectAccount";
import type { account } from "../../../../../types/types";

interface AccountInputInterFace {
  accounts: account[];
  setAccounts: React.Dispatch<React.SetStateAction<account[]>>;
  setAccount: React.Dispatch<React.SetStateAction<number>>;
}

const AccountInput = (props: AccountInputInterFace) => {
  const [selectAccountMenuOpen, setSelectAccountMenuOpen] = useState(false);
  const [accountIcon, setAccountIcon] = useState(32);
  const [accountName, setAccountName] = useState("Account");
  const ToggleAccountMenu = () => {
    setSelectAccountMenuOpen((prev) => !prev);
  };

  const handleAccountChange = (option: account) => {
    const name = option.name;
    const icon_id = option.icon;
    setAccountIcon(icon_id || accountIcon);
    setAccountName(name || "Account");
    props.setAccount(Number(option.id));
    setSelectAccountMenuOpen((prev) => !prev);
  };
  return (
    <>
      <button
        className="w-full border flex justify-center rounded py-2 space-x-1"
        onClick={ToggleAccountMenu}
      >
        <span className="p-2">
          <MappedIcon id={accountIcon} />
        </span>
        <span className="my-auto">{accountName}</span>
      </button>
      {selectAccountMenuOpen && (
        <div className="fixed inset-0 bg-black/40">
          <SelectAccount
            title="Select an account"
            accounts={props.accounts}
            handleAccountChange={handleAccountChange}
            setAccounts={props.setAccounts}
          />
        </div>
      )}
    </>
  );
};

export default AccountInput;
