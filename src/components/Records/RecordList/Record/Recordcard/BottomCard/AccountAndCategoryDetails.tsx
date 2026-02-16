import type { Record } from "../../../../../../types/types";
import SingleDetail from "./SingleDetail";

interface AccountAndCategoryDetailsProps {
  Record: Record;
}

const AccountAndCategoryDetails = (props: AccountAndCategoryDetailsProps) => {
  const account = props.Record.accounts_records_accountToaccounts;
  const category = props.Record.categories;
  const type = props.Record.type;
  const notes = props.Record.notes;
  const transferred_to_account = props.Record.accounts_records_transferred_to_accountToaccounts
  return (
    <div className="bg-white flex flex-col rounded-b-2xl p-3 gap-5">
      {type !== "Transfer" && category ? (
        <>
          <SingleDetail
            label="Account"
            icon_id={account.icon}
            name={account.name}
          />
          <SingleDetail
            label="Categoy"
            icon_id={category.icon}
            name={category.name}
          />
        </>
      ) : (
        transferred_to_account &&
        <>
          <SingleDetail
            label="From"
            icon_id={account.icon}
            name={account.name}
          />
          <SingleDetail label="To" icon_id={transferred_to_account.icon} name={transferred_to_account.name} />
        </>
      )}
      {notes && <div className="text-center font-light">{notes}</div>}
    </div>
  );
};

export default AccountAndCategoryDetails
