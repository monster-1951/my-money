import { useEffect, useState } from "react";
import AccountsHeader from "./AccountsHeader";
import AccountsList from "./AccountsList/AccountsList";
import { toast } from "react-toastify";
import type { account } from "../../types/types";
import { GetAccountsapi } from "../../api/accounts";
import Decimal from "decimal.js";

const AccountsPage = () => {
  const [accounts, setAccounts] = useState<account[]>([]);
  const [totalOfAccounts,setTotalOfAccounts] = useState(Decimal(0))
  useEffect(() => {
    const GetAllAccounts = async () => {
      try {
        const response = await GetAccountsapi();
        if (!response.allAccounts) {
          toast.error(response.message);
        }
        const allAccounts = response.allAccounts as account[]
        setAccounts(allAccounts);
        setTotalOfAccounts(() => {
          const balances = allAccounts.map((a) => Decimal(a.balance));
          return balances.reduce((x, y) => x.add(y), Decimal(0));
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
