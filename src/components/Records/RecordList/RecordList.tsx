import type { Record } from "../../../types/types";
import RecordItem from "./Record/Record";

interface RecordsProps {
  Records: Record[] | undefined;
  DeleteRecord:(id:string)=>Promise<void>
    EditRecord: (record: Record) => Promise<void>;
}

const RecordList = (props: RecordsProps) => {
  const renderTransactionRecord = props.Records?.length ? (
    props.Records.map((Record: Record) => (
    <RecordItem Record={Record} key={Record.id} DeleteRecord={props.DeleteRecord}  EditRecord={props.EditRecord}/>
    ))
  ) : (
    <>No transactions</>
  );
  return (
    <div className="flex flex-1 min-h-screen flex-col py-3">
      {renderTransactionRecord}
    </div>
  );
};

export default RecordList;
