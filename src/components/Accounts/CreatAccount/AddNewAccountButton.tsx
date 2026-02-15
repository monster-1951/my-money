import { PlusCircle } from "iconoir-react";
import { useState } from "react";
import EditAccount from "./EditAccount/EditAccount";
import { toast } from "react-toastify";
import type { account, SaveAccountParams } from "../../../types/types";
import { CreateAccountApi } from "../../../api/accounts";

interface AddNewAccountButtonProps {
  setAccounts: React.Dispatch<React.SetStateAction<account[]>>;
}

const AddNewAccountButton = (props: AddNewAccountButtonProps) => {
  const [createOrEditAccountDialogOpen, setCreateOrEditAccountDialogOpen] =
    useState(false);

  const CreateNewAccount = async (params: SaveAccountParams) => {
    try {
      const response = await CreateAccountApi(params.data);
      console.log(response);
      if (response.newAccount) {
        toast.success(response.message);
        props.setAccounts((prev) => [...prev, response.newAccount]);
        setCreateOrEditAccountDialogOpen((prev) => !prev);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to create an account");
    }
  };
  return (
    <>
      <button
        className="border flex justify-center p-2 gap-3 w-fit mx-auto"
        onClick={() => {
          setCreateOrEditAccountDialogOpen((prev) => !prev);
        }}
      >
        <PlusCircle />
        <span>ADD NEW ACCOUNT</span>
      </button>
      {createOrEditAccountDialogOpen && (
        <EditAccount
          setCreateOrEditAccountDialogOpen={setCreateOrEditAccountDialogOpen}
          SaveAccount={CreateNewAccount}
        />
      )}
    </>
  );
};

export default AddNewAccountButton;
