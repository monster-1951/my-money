import { useState } from "react";
import { accountIconsMap } from "../../lib/iconsMap";
import MappedIcon from "../UtilityComponent/MappedIcon";
import { Create } from "../../api/accounts";
import { toast } from "react-toastify";

interface EditAccountProps {
  setCreateOrEditIconDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditAccount = (props: EditAccountProps) => {
  const [initialAmount, setInitialAmount] = useState(0);
  const [accountName, setAccountName] = useState("");
  const [categoryIcon, setCategoryIcon] = useState(0);

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

  const CreateAccount = async () => {
    const params = {
      name: accountName,
      balance: initialAmount,
      icon: categoryIcon,
    };
    try {
      const response = await Create(params);
      console.log(response);
      if (response.newAccount) {
        toast.success(response.message);
        props.setCreateOrEditIconDialogOpen((prev) => !prev);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to create an account");
    }
  };
  return (
    <div className="fixed inset-0 bg-black/30 pt-15">
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
          <button className="border py-2 px-3 rounded">Cancel</button>
          <button
            className="border py-2 px-3 rounded"
            onClick={async () => {
              await CreateAccount();
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
