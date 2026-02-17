import type { GroupedByDateInterface, Record } from "../../../types/types";
import RecordsByDay from "./Record/RecordsByDay";

interface RecordsProps {
  Records: Record[] | undefined;
  DeleteRecord: (id: string) => Promise<void>;
  EditRecord: (record: Record) => Promise<void>;
}


const RecordList = (props: RecordsProps) => {
  const Records = (props.Records || []).sort((a, b) => {
    return new Date(b.time).getTime() - new Date(a.time).getTime();
  });
  if (!Records.length) return <>No records</>;

  const GroupedByDate: GroupedByDateInterface = Object.groupBy(
    Records,
    (record) => {
      return record.time.substring(0, 10);
    },
  );
  return (
    <div className="flex flex-1 min-h-screen flex-col py-3">
      <RecordsByDay RecordsGroupedByDay={GroupedByDate} DeleteRecord={props.DeleteRecord} EditRecord={props.EditRecord}/>
    </div>
  );
};

export default RecordList;
