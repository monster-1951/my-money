import { CiWallet } from "react-icons/ci";
import type { record_type } from "../../types/types";
import { IoPricetagOutline } from "react-icons/io5";
import { PiBackspace } from "react-icons/pi";

interface RecordInputProps {
  record_type: record_type;
  amount:number
}

const RecordInput = (props: RecordInputProps) => {
  return (
    <div className="flex flex-col py-3">
      <>
        <div className="flex justify-around">
          <button className="w-full text-xs font-light">Account</button>
          <button className="w-full text-xs font-light">
            {props.record_type !== "Transfer" ? "Category" : "To"}
          </button>
        </div>
        <div className="flex justify-around px-1 space-x-1 ">
          <div className="w-full border flex justify-center rounded py-2 space-x-1">
            <CiWallet className="text-2xl" />
            <span>Account</span>
          </div>
          {props.record_type !== "Transfer" && (
            <div className="w-full border flex justify-center rounded py-2 space-x-1">
              <IoPricetagOutline className="text-2xl" />
              <span>Category</span>
            </div>
          )}
          {props.record_type === "Transfer" && (
            <div className="w-full border flex justify-center rounded py-2 space-x-1">
              <CiWallet className="text-2xl" />
              <span>Account</span>
            </div>
          )}
        </div>
      </>

      <>
      <div className="p-1">
        <textarea className="rounded border px-1 w-full h-[22vh] focus:border-0" placeholder="Add notes"/>
      </div>
      </>

      <>
      <div className="p-1">
        <div className="flex rounded border px-1 w-full h-[8vh] focus:border-0  justify-end space-x-2" ><span className="font-semibold text-4xl my-auto">{props.amount}</span><PiBackspace className="text-2xl my-auto"/></div>
      </div>
      </>
    </div>
  );
};

export default RecordInput;
