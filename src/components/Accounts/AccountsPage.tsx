import { useEffect, useState } from "react";
import AccountsHeader from "./AccountsHeader";
import AccountsList from "./AccountsList/AccountsList";
import { Get } from "../../api/accounts";
import { toast } from "react-toastify";
import type { account } from "../../types/types";

const AccountsPage = () => {
  const [accounts, setAccounts] = useState<account[]>([]);
  const [totalOfAccounts,setTotalOfAccounts] = useState(0)
  useEffect(() => {
    const GetAllAccounts = async () => {
      try {
        const response = await Get();
        if (!response.allAccounts) {
          toast.error(response.message);
        }
        const allAccounts = response.allAccounts as account[]
        setAccounts(allAccounts);
        setTotalOfAccounts(() => {
          const balances = allAccounts.map((a) => Number(a.balance));
          return balances.reduce((x, y) => x + y, 0);
        });
      } catch (error) {
        toast.error("Failed to fetch records");
      }
    };
   GetAllAccounts()
  }, []);
  return (
    <>
      <AccountsHeader allAccounts={totalOfAccounts} />
      <AccountsList accounts={accounts} setAccounts={setAccounts}/>
    </>
  );
};

export default AccountsPage;
