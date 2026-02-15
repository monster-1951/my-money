import type { Record } from "../../../../../types/types";
import AccountAndCategoryDetails from "./BottomCard/AccountAndCategoryDetails";
import AccountTypeandAmountDateDetails from "./TopCard/AccountTypeAndAmountDetails";

interface RecordCardProps {
  Record: Record;
  showAccountDetails: boolean;
  setShowAccountDetails: React.Dispatch<React.SetStateAction<boolean>>;
  DeleteRecord: (id: string) => Promise<void>;
  EditRecord: (record: Record) => Promise<void>;
}

const RecordCard = (props: RecordCardProps) => {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center z-10 justify-center">
      <div className="w-80 flex flex-col">
        <AccountTypeandAmountDateDetails
          Record={props.Record}
          setShowAccountDetails={props.setShowAccountDetails}
          DeleteRecord={props.DeleteRecord}
          EditRecord={props.EditRecord}
        />
        <AccountAndCategoryDetails Record={props.Record} />
      </div>
    </div>
  );
};

export default RecordCard;
