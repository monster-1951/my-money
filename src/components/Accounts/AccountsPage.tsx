import { useEffect, useState } from "react";
import AccountsHeader from "./AccountsHeader";
import AccountsList from "./AccountsList/AccountsList";
import { Get } from "../../api/accounts";
import { toast } from "react-toastify";
import type { account } from "../../types/types";

const AccountsPage = () => {
  const [accounts, setAccounts] = useState<account[]>([]);
  useEffect(() => {
    const GetAllAccounts = async () => {
      try {
        const response = await Get();
        if (!response.allAccounts) {
          toast.error(response.message);
        }

        setAccounts(response.allAccounts);
      } catch (error) {
        toast.error("Failed to fetch records");
      }
    };
   GetAllAccounts()
  }, []);
  return (
    <>
      <AccountsHeader allAccounts={1000} />
      <AccountsList accounts={accounts} setAccounts={setAccounts}/>
    </>
  );
};

export default AccountsPage;
