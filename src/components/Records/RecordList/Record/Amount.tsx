import type { record_type } from "../../../../types/types";

interface AmountProps {
  type: record_type;
  amount: string;
}

const Amount = (props: AmountProps) => {
  return (
    <div className="font-semibold">
      <span
        className={`${props.type == "Income" ? "text-green-600" : `${props.type == "Expense" ? "text-red-600" : "text-blue-500"}`}`}
      >
        &#8377;{props.amount}
      </span>
    </div>
  );
};

export default Amount