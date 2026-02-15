import type { Record } from "../../../../types/types";
import MappedIcon from "../../../UtilityComponents/MappedIcon";

interface AccountDetailsProps {
  Record: Record;
}
const AccountDetails = (props: AccountDetailsProps) => {
  const transferRecordAccountDetails =
    props.Record.accounts_records_accountToaccounts.name.slice(0, 12) +
    "..." +
    " < ------ >" +
    props.Record.accounts_records_transferred_to_accountToaccounts?.name.slice(
      0,
      12,
    ) +
    "...";
  const account_icon = props.Record.accounts_records_accountToaccounts.icon;
  const account_name = props.Record.accounts_records_accountToaccounts.name;
  return (
    <span className="text-sm">
      {props.Record.type === "Transfer" ? (
        transferRecordAccountDetails
      ) : (
        <div className="flex gap-2 py-2">
          <MappedIcon id={account_icon} />
          <span className="my-auto">{account_name}</span>
        </div>
      )}
    </span>
  );
};

export default AccountDetails