import { useState } from "react";
import { accountIconsMap } from "../../../../lib/iconsMap";
import type { account, SaveAccountParams } from "../../../../types/types";
import EditAccountOrCategoryLayout from "../../../UtilityComponents/EditAccountOrCategory";
import IconsInput from "../../../UtilityComponents/IconsInput";
import AccountNameInput from "./AccountNameInput";
import AccountBalanceInput from "./AccountBalanceInput";
import SaveCancelButton from "../../../UtilityComponents/SaveCancelButton";

interface EditAccountProps {
  setCreateOrEditAccountDialogOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  account?: account;
  SaveAccount: (params: SaveAccountParams) => Promise<void>;
}

const EditAccount = (props: EditAccountProps) => {
  const [initialAmount, setInitialAmount] = useState(
    Number(props.account?.balance) || 0,
  );
  const [accountName, setAccountName] = useState(props.account?.name || "");
  const [Icon, setIcon] = useState(props.account?.icon || 0);

  const handleSave = async () => {
    await props.SaveAccount({
      data: {
        name: accountName,
        balance: Number(initialAmount),
        icon: Icon,
      },
      id: String(props.account?.id),
    });
  };

  return (
    <EditAccountOrCategoryLayout
      headerText={props.account ? "Edit account" : "Add new account"}
    >
      <div className="flex flex-col gap-2 p-3">
        <AccountBalanceInput
          initialAmount={initialAmount}
          setInitialAmount={setInitialAmount}
        />
        <AccountNameInput
          accountName={accountName}
          setAccountName={setAccountName}
        />
        <IconsInput Icons={accountIconsMap} Icon={Icon} setIcon={setIcon} />
      </div>
      <SaveCancelButton
        save={handleSave}
        setDialogOpen={props.setCreateOrEditAccountDialogOpen}
      />
    </EditAccountOrCategoryLayout>
  );
};

export default EditAccount;
