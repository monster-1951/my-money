import { useState } from "react";
import type { account, SaveAccountParams } from "../../../types/types";
import MappedIcon from "../../UtilityComponent/MappedIcon";
import { Edit, Trash, Xmark } from "iconoir-react";
import EditAccount from "../../CreatAccount/EditAccount";
import { Delete, Update } from "../../../api/accounts";
import { toast } from "react-toastify";

interface AccountProps {
  account: account;
  accounts: account[];
  setAccounts: React.Dispatch<React.SetStateAction<account[]>>;
}

const Account = (props: AccountProps) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [createOrEditAccountDialogOpen, setCreateOrEditAccountDialogOpen] =
    useState(false);

  const UpdateAccount = async (params: SaveAccountParams) => {
    try {
      const response = await Update(params);
      console.log(response);
      if (response.updatedAccount) {
        toast.success(response.message);
        props.setAccounts((prev) => {
          const Accounts = [...prev]
          const index = Accounts.findIndex(
            (a) => a.id === response.updatedAccount.id,
          );
          Accounts[index] = response.updatedAccount;
          console.log("Prev after filter", prev);
          return Accounts;
        });
        setCreateOrEditAccountDialogOpen((prev) => !prev);
        setDropDownOpen((prev) => !prev);
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
      const response = await Delete({ id });
      console.log(response);
      if (response.deletedAccount) {
        toast.success(response.message);
        props.setAccounts(prev=>prev.filter(a=>a.id!==Number(id)))
        setCreateOrEditAccountDialogOpen((prev) => !prev);
        setDropDownOpen((prev) => !prev);
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
            Balance :{" "}
            <span className="text-green-500">{props.account.balance}</span>
          </div>
        </div>
        <button
          className="text-xl font-bold"
          onClick={() => {
            setDropDownOpen((prev) => !prev);
          }}
        >
          ...
        </button>
        {dropDownOpen && (
          <div className="z-10 absolute right-0 top-10 bg-white shadow-2xl flex flex-col border p-5 items-start gap-5 w-40">
            <button className="flex gap-3">
              <Edit className="text-sm" />
              <span
                onClick={() => {
                  setCreateOrEditAccountDialogOpen((prev) => !prev);
                }}
              >
                Edit
              </span>
            </button>
            <button
              className="flex gap-3"
              onClick={async () => {
                await deleteAccount(String(props.account.id));
              }}
            >
              <Trash className="text-sm" />
              Delete
            </button>
            <button
              onClick={() => {
                setDropDownOpen((prev) => !prev);
              }}
              className="flex gap-3"
            >
              <Xmark className="text-sm" />
              Close
            </button>
          </div>
        )}
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
