import { EditPencil, Trash, Xmark } from "iconoir-react";
import type { Record } from "../../../../../../types/types";

interface RecordCardActionBarProps {
  Record :Record;
  setShowAccountDetails: React.Dispatch<React.SetStateAction<boolean>>;
  DeleteRecord: (id: string) => Promise<void>;
  EditRecord:(record:Record)=>Promise<void>
}

const RecordCardActionBar = (props: RecordCardActionBarProps) => {
  return (
    <div className="flex justify-between">
      <Xmark
        onClick={() => {
          props.setShowAccountDetails((prev) => !prev);
        }}
      />
      <div className="flex gap-5">
        <Trash onClick={() => {
          props.DeleteRecord(String(props.Record.id))
          props.setShowAccountDetails(prev=>!prev)
        }}/> <EditPencil onClick={() => {
          props.EditRecord(props.Record)
        }} />
      </div>
    </div>
  );
};

export default RecordCardActionBar;
