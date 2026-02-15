import type { account } from "../../../../../../types/types";
import MappedIcon from "../../../../../UtilityComponents/MappedIcon";
import CreateAccount from "../../../../../Accounts/CreatAccount/AddNewAccountButton";

interface SelectAccountProps {
    title:string
  accounts: account[];
  handleAccountChange: (option: account) => void;
   setAccounts:React.Dispatch<React.SetStateAction<account[]>>
}
const SelectAccount = (props: SelectAccountProps) => {
  return (
    <>
      <div
        className="flex-1 z-10 bottom-0 left-0 fixed border bg-white w-full flex flex-col justify-center p-5 gap-5"
      >
        <>
          <div className="text-center text-xl">{props.title}</div>
          <div className="flex flex-col py-5 gap-5 max-h-80 overflow-scroll shadow-inner">
            {props.accounts.map((a) => {
              return (
                <button
                  key={a.id}
                  onClick={() => {
                    props.handleAccountChange(a);
                  }}
                  className="mx-auto p-3 w-full flex justify-between"
                >
                  <span className="flex p-3 gap-2">
                    <span>
                      <MappedIcon id={a.icon} />
                    </span>
                    <span className="my-auto"> {a.name}</span>
                  </span>
                  <span>{a.balance}</span>
                </button>
              );
            })}
          </div>
          <CreateAccount setAccounts={props.setAccounts}/>
        </>
      </div>
    </>
  );
};

export default SelectAccount;
