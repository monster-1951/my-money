import { useState } from "react";
import { accountIconsMap } from "../../lib/iconsMap";
import MappedIcon from "../UtilityComponent/MappedIcon";
import type { account, SaveAccountParams } from "../../types/types";

interface EditAccountProps {
  setCreateOrEditAccountDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  account?: account;
  SaveAccount: (params: SaveAccountParams) => Promise<void>;
}

const EditAccount = (props: EditAccountProps) => {
  const [initialAmount, setInitialAmount] = useState(
    props.account?.balance || 0,
  );
  const [accountName, setAccountName] = useState(props.account?.name || "");
  const [categoryIcon, setCategoryIcon] = useState(props.account?.icon || 0);

  const handleInitialAmountChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInitialAmount(Number(e.target.value));
  };

  const handleAccountNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountName(e.target.value);
  };
  const handleCategoryIconChange = (icon_id: number) => {
    setCategoryIcon(icon_id);
  };
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center z-10">
      <div className="h-fit bg-white flex flex-col items-center p-5 gap-5 max-w-90 mx-auto shadow rounded-2xl py-10">
        <div className="text-xl ">Add new account</div>
        <div className="flex flex-col gap-2 p-3">
          <div className="flex justify-between items-center gap-3">
            <span className="">Initial Amount</span>
            <input
              type="number"
              placeholder="0"
              className="border p-3 focus:border-0"
              value={initialAmount}
              onChange={handleInitialAmountChange}
            />
          </div>
          <p className="text-sm font-light">
            *Initial amount will not be reflected in analysis
          </p>
          <div className="flex justify-between gap-3 items-center">
            <span>Name</span>
            <input
              type="text"
              placeholder="Account name"
              className="border p-3 focus:border-0"
              value={accountName}
              onChange={handleAccountNameChange}
            />
          </div>
          <div className="flex flex-col gap-3">
            <span>Icon</span>
            <div className="grid grid-rows-2 grid-flow-col overflow-x-auto max-w-75 p-3 border shadow-inner gap-3">
              {accountIconsMap.map((i) => (
                <button
                  onClick={() => {
                    handleCategoryIconChange(i.icon_id);
                  }}
                  key={i.icon_id}
                >
                  <MappedIcon
                    key={i.icon_id}
                    id={i.icon_id}
                    className={`p-2 rounded w-fit ${categoryIcon === i.icon_id && "border"}`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-full justify-around">
          <button
            onClick={() => {
              props.setCreateOrEditAccountDialogOpen((prev) => !prev);
            }}
            className="border py-2 px-3 rounded"
          >
            Cancel
          </button>
          <button
            className="border py-2 px-3 rounded"
            onClick={async () => {
              await props.SaveAccount({
                data: {
                  name: accountName,
                  balance: Number(initialAmount),
                  icon: categoryIcon,
                },
                id: String(props.account?.id),
              });
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditAccount;
