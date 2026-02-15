import type { Record } from "../../../../../../types/types";
import DateFormatter from "../../../../../UtilityComponents/DateFormatter";
import RecordAmountAndType from "./RecordAmountAndType";
import RecordCardActionBar from "./RecordCardActionbar";

interface AccountTypeAndAmountDateDetailsProps {
  Record: Record;
  setShowAccountDetails: React.Dispatch<React.SetStateAction<boolean>>;
  DeleteRecord: (id: string) => Promise<void>;
  EditRecord: (record: Record) => Promise<void>;
}
const AccountTypeandAmountDateDetails = (
  props: AccountTypeAndAmountDateDetailsProps,
) => {
  const back_ground = `${props.Record.type === "Income" ? "bg-green-600" : props.Record.type === "Expense" ? "bg-red-600" : "bg-blue-600"}`;
  return (
    <div className={`${back_ground} text-white p-3 rounded-t-2xl`}>
      <RecordCardActionBar
        Record={props.Record}
        setShowAccountDetails={props.setShowAccountDetails}
        DeleteRecord={props.DeleteRecord}
        EditRecord={props.EditRecord}
      />
      <RecordAmountAndType
        amount={props.Record.amount}
        type={props.Record.type}
      />
      <DateFormatter date={props.Record.time} />
    </div>
  );
};

export default AccountTypeandAmountDateDetails;
