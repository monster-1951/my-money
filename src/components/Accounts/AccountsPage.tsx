import AccountsHeader from "./AccountsHeader";
import AccountsList from "./AccountsList";

const AccountsPage = () => {
  return (
    <>
      <AccountsHeader allAccounts={1000} />
      <AccountsList/>
    </>
  );
};

export default AccountsPage;
