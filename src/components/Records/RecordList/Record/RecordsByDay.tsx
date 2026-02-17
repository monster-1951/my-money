import type { GroupedByDateInterface, Record } from "../../../../types/types";
import RecordItem from "./Record";

  interface RecordByDayProps {
    RecordsGroupedByDay:GroupedByDateInterface
      DeleteRecord: (id: string) => Promise<void>;
  EditRecord: (record: Record) => Promise<void>;
  }
  const RecordsByDay = (props:RecordByDayProps) => {
    return (
      <>
        {Object.keys(props.RecordsGroupedByDay).map((key) => {
          const Records = props.RecordsGroupedByDay[key];
          if (Records?.length)
            return (
              <div className="py-5">
                <div className="p-3 font-bold border-b">{new Date(key).toDateString().slice(4)}</div>
                {Records.map((Record: Record) => (
                  <RecordItem
                    Record={Record}
                    key={Record.id}
                    DeleteRecord={props.DeleteRecord}
                    EditRecord={props.EditRecord}
                  />
                ))}
              </div>
            );
        })}
      </>
    );
  };

  export default RecordsByDay