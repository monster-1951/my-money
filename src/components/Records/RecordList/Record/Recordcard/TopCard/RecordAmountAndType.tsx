import type { record_type } from "../../../../../../types/types";

interface RecordAmountAndTypeProps {
  type: record_type
  amount: string;
}
const RecordAmountAndType = (props: RecordAmountAndTypeProps) => {
  return (
    <div className="text-center p-5 flex flex-col gap-3">
      <p>{props.type}</p>
      <p className="text-2xl font-semibold">
        {props.type === "Expense" && " - "}&#8377;
        {props.amount}
      </p>
    </div>
  );
};

export default RecordAmountAndType;