import { useState } from "react";
import type { Record } from "../../../../types/types";
import MappedIcon from "../../../UtilityComponents/MappedIcon";
import AccountDetails from "./AccountDetails";
import Amount from "./Amount";
import RecordCard from "./Recordcard/RecordCard";

interface RecordProps {
  Record: Record;
  DeleteRecord: (id: string) => Promise<void>;
  EditRecord: (record: Record) => Promise<void>;
}

const RecordItem = (props: RecordProps) => {
  const [showAccountDetails, setShowAccountDetails] = useState(false);
  const handleRecordClick = () => {
    setShowAccountDetails(true);
  };

  return (
    <>
      <div
        className="flex w-full mx-auto p-3 gap-3"
        onClick={handleRecordClick}
      >
        <MappedIcon
          id={props.Record.categories?.icon || 35}
          className="text-lg rounded-full my-auto p-2 border"
        />
        <div className="flex justify-between w-full border-b border-gray-700">
          <div className="flex flex-col">
            <span>{props.Record.categories?.name || "Transfer"}</span>
            <AccountDetails Record={props.Record} />
          </div>
          <Amount amount={props.Record.amount} type={props.Record.type} />
        </div>
      </div>
      {showAccountDetails && (
        <RecordCard
          Record={props.Record}
          showAccountDetails={showAccountDetails}
          setShowAccountDetails={setShowAccountDetails}
          DeleteRecord={props.DeleteRecord}
          EditRecord={props.EditRecord}
        />
      )}
    </>
  );
};

export default RecordItem;
