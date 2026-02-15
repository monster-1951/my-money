import { Check } from "iconoir-react";
import type { category_type } from "../../../../types/types";

interface CategoryTypeInputProps {
  type: category_type;
  setType: React.Dispatch<React.SetStateAction<category_type>>;
}

const CategoryTypeInput = (props: CategoryTypeInputProps) => {
  return (
    <div className="flex gap-11 items-center">
      <span>Type</span>
      <div className="flex flex-1 p-3 justify-between">
        <div
          className={`${props.type === "Income" ? "font-semibold" : "font-extralight"} flex gap-2`}
        >
          {props.type === "Income" && <Check />}
          <button
            onClick={() => {
              props.setType("Income");
            }}
          >
            Income
          </button>
        </div>
        <div
          className={`${props.type === "Expense" ? "font-semibold" : "font-extralight"} flex gap-2`}
        >
          {props.type === "Expense" && <Check/>}
          <button
            onClick={() => {
              props.setType("Expense");
            }}
          >
            Expense
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryTypeInput