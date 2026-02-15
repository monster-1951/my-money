import { useState } from "react";
import type { account, SaveAccountParams } from "../../../types/types";
import MappedIcon from "../../UtilityComponents/MappedIcon";
import EditAccount from "../CreatAccount/EditAccount/EditAccount";
import { toast } from "react-toastify";
import DropDown from "../../UtilityComponents/DropDown";
import { DeleteAccountApi, UpdateAccountApi } from "../../../api/accounts";

interface AccountProps {
  account: account;
  accounts: account[];
  setAccounts: React.Dispatch<React.SetStateAction<account[]>>;
}

const Account = (props: AccountProps) => {
  const [createOrEditAccountDialogOpen, setCreateOrEditAccountDialogOpen] =
    useState(false);

  const UpdateAccount = async (params: SaveAccountParams) => {
    try {
      const response = await UpdateAccountApi(params);
      console.log(response);
      if (response.updatedAccount) {
        toast.success(response.message);
        props.setAccounts((prev) => {
          const Accounts = [...prev];
          const index = Accounts.findIndex(
            (a) => a.id === response.updatedAccount.id,
          );
          Accounts[index] = response.updatedAccount;
          console.log("Prev after filter", prev);
          return Accounts;
        });
        setCreateOrEditAccountDialogOpen((prev) => !prev);
      } else {
        toast.error(response.message || "Can't update acount");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to update account");
    }
  };

  const deleteAccount = async (id: string) => {
    try {
      const response = await DeleteAccountApi({ id });
      console.log(response);
      if (response.deletedAccount) {
        toast.success(response.message);
        props.setAccounts((prev) => prev.filter((a) => a.id !== Number(id)));
        setCreateOrEditAccountDialogOpen((prev) => !prev);
      } else {
        toast.error(response.message || "Can't delete acount");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete account");
    }
  };
  return (
    <div key={props.account.id} className="flex border p-3 gap-3">
      <MappedIcon
        id={props.account.icon}
        className="my-auto text-xl p-2 rounded"
      />
      <div className="flex flex-1 justify-between relative">
        <div className="flex flex-col font-semibold">
          <div>{props.account.name}</div>
          <div>
            Balance :
            <span className="text-green-500">{props.account.balance}</span>
          </div>
        </div>
        <DropDown
          delete={deleteAccount}
          id={String(props.account.id)}
          setCreateOrEditDialogOpen={setCreateOrEditAccountDialogOpen}
        />
        {createOrEditAccountDialogOpen && (
          <EditAccount
            setCreateOrEditAccountDialogOpen={setCreateOrEditAccountDialogOpen}
            account={props.account}
            SaveAccount={UpdateAccount}
          />
        )}
      </div>
    </div>
  );
};

export default Account;
