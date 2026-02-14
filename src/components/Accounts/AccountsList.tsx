import { mockAccounts } from "../../lib/constants";
import CreateAccount from "../CreatAccount/CreateAccount";
import MappedIcon from "../UtilityComponent/MappedIcon";

const AccountsList = () => {
  return (
    <div className="p-3 py-5 flex flex-col gap-3 overflow-y-scroll">
      Accounts
      {mockAccounts.map((a) => {
        return (
          <div key={a.id} className="flex border p-3 gap-3">
            <MappedIcon id={a.icon} className="my-auto text-xl p-2 rounded"/>
            <div className="flex flex-1 justify-between">
              <div className="flex flex-col font-semibold">
                <div>{a.name}</div>
                <div>Balance : <span className="text-green-500">{a.balance}</span></div>
              </div>
              <button className="text-xl font-bold">...</button>
            </div>
          </div>
        );
      })}
      <CreateAccount/>
    </div>
  );
};

export default AccountsList;
