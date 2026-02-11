import { useState } from "react";
import { NavLink } from "react-router-dom";
import type { record_type } from "../../types/types";
import RecordInput from "./RecordInput";
const CreateOrEditTransactioinPage = () => {
    const [type,setType] = useState<record_type>("Expense")
    const [amount] = useState(0)
    const handleClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        setType(event.currentTarget.innerText as record_type)
    }

  return (
    <div className="flex flex-col">
      {/* Cancel Save Button */}
      <div className="flex justify-between p-5">
        <NavLink to={"/"}>&#10005; CANCEL</NavLink>
        <button>&#10003; SAVE</button>
      </div>

      <div className="flex justify-center space-x-3">
        <button onClick={handleClick} className={`${type==="Income" ? 'font-bold': ''}`}>Income</button> <span>|</span>
        <button onClick={handleClick} className={`${type==="Expense" ? 'font-bold': ''}`}>Expense</button> <span>|</span>
        <button onClick={handleClick} className={`${type==="Transfer" ? 'font-bold': ''}`}>Transfer</button>
      </div>
    <RecordInput record_type={type} amount={amount}/>

    </div>
  );
};

export default CreateOrEditTransactioinPage;
