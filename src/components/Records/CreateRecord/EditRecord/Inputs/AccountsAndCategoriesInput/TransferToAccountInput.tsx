import { useState } from "react";
import SelectAccount from "./Select/SelectAccount";
import MappedIcon from "../../../../../UtilityComponents/MappedIcon";
import type { account } from "../../../../../../types/types";

interface TransferredToAccountInputProps {
  setTransferredToAccount: React.Dispatch<React.SetStateAction<number>>;
  accounts: account[];
  setAccounts: React.Dispatch<React.SetStateAction<account[]>>;
}

const TransferredToAccountInput = (props: TransferredToAccountInputProps) => {
  const [selectTransferToAccountMenuOpen, setSelectTransferToAccountMenuOpen] =
    useState(false);
  const [transferredToAccountName, setTransferredToAccountName] =
    useState("To Account");
  const [transferredToAccountIcon, setTransferredToAccountIcon] = useState(32);

  const ToggleTransferToAccountMenu = () => {
    setSelectTransferToAccountMenuOpen((prev) => !prev);
  };

  const handleTransferToAccountChange = (option: account) => {
    const name = option.name;
    const icon_id = option.icon;
    setTransferredToAccountIcon(icon_id || transferredToAccountIcon);
    setTransferredToAccountName(name || "To Account");
    props.setTransferredToAccount(Number(option.id));
    setSelectTransferToAccountMenuOpen(prev=>!prev)
  };
  return (
    <>
      <button
        className="w-full border flex justify-center rounded py-2 space-x-1"
        onClick={ToggleTransferToAccountMenu}
      >
        <span className="p-2">
          <MappedIcon id={transferredToAccountIcon} />
        </span>
        <span className="my-auto">{transferredToAccountName}</span>
      </button>
      {selectTransferToAccountMenuOpen && (
        <div className="fixed inset-0 bg-black/40">
          transferring
          <SelectAccount
            title="Transfer to"
            accounts={props.accounts}
            handleAccountChange={handleTransferToAccountChange}
            setAccounts={props.setAccounts}
          />
        </div>
      )}
    </>
  );
};

export default TransferredToAccountInput;
