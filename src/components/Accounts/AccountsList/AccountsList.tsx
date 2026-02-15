import type { account } from "../../../types/types";
import CreateAccount from "../CreatAccount/AddNewAccountButton";
import Account from "./Account";

interface AccountsListProps {
  accounts: account[];
  setAccounts: React.Dispatch<React.SetStateAction<account[]>>;
}

const AccountsList = (props: AccountsListProps) => {
  return (
    <div className="p-3 py-5 flex flex-col gap-3 overflow-y-scroll min-h-screen">
      <div className="text-xl font-bold">Accounts</div>
      {props.accounts.map((a) => {
        return (
          <Account
            account={a}
            key={a.id}
            accounts={props.accounts}
            setAccounts={props.setAccounts}
          />
        );
      })}
      <CreateAccount
        setAccounts={props.setAccounts}
      />
    </div>
  );
};

export default AccountsList;
