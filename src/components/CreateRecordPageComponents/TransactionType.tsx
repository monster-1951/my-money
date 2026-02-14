import type { record_type } from "../../types/types"

interface TransactionTypeProps{
    type:record_type
    setType:React.Dispatch<React.SetStateAction<record_type>>  
  
  }

const TransactionType = (props:TransactionTypeProps) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.setType(event.currentTarget.innerText as record_type);
  };
    return <div className="flex justify-center space-x-3 p-3">
        <button
          onClick={handleClick}
          className={`${props.type === "Income" ? "font-bold" : ""}`}
        >
          Income
        </button>{" "}
        <span>|</span>
        <button
          onClick={handleClick}
          className={`${props.type === "Expense" ? "font-bold" : ""}`}
        >
          Expense
        </button>{" "}
        <span>|</span>
        <button
          onClick={handleClick}
          className={`${props.type === "Transfer" ? "font-bold" : ""}`}
        >
          Transfer
        </button>
      </div>
}

export default TransactionType