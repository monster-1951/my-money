import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import type { account, Category, record_type } from "../../../../types/types";
import MappedIcon from "../../../UtilityComponent/MappedIcon";

interface SelectOptionProps {
  accounts?: account[];
  categories?: Category[];
  type?: record_type;
  handleTransferToAccountChange: Function
  handleAccountChange: Function
  handleCategoryChange:Function
}
const SelectOptions = (props: SelectOptionProps) => {
  return (
    <>
      <div
        className={`flex-1 z-10 bottom-0 left-0 fixed border bg-white w-full flex flex-col justify-center p-5 gap-5`}
      >
        {props.accounts && (
          <>
            <div className="text-center text-xl">Select an accoount</div>
            <div className="flex flex-col py-5 gap-5 max-h-80 overflow-scroll shadow-inner">
              {props.accounts.map((a) => {
                return (
                  <button
                    key={a.id}
                    onClick={() => {
                      if (props.type === "Transfer") {
                        props.handleTransferToAccountChange(a.id);
                      } else {
                        props.handleAccountChange(a.id);
                      }
                    }}
                    className="mx-auto p-3 w-full flex justify-between"
                  >
                    <span className="flex p-3 gap-2">
                      <span>
                        <MappedIcon id={a.icon}/>
                      </span>
                      <span className="my-auto"> {a.name}</span>
                    </span>
                    <span>{a.balance}</span>
                  </button>
                );
              })}
            </div>

            <Link to={"/"}>
              <button className="border flex justify-center p-2 gap-3 w-fit mx-auto">
                <IoAddCircleOutline className="text-2xl" />
                <span>ADD NEW ACCOUNT</span>
              </button>
            </Link>
          </>
        )}
        {props.categories && (
          <>
            {" "}
            <div className="text-center text-xl">Select a category</div>
            <div className="grid grid-cols-3 max-h-150 overflow-scroll shadow-inner">
              {props.categories.map((category) => (
                <button
                  key={category.id}
                  className="flex flex-col p-5 gap-3 justify-between"
                  onClick={() => {
                    props.handleCategoryChange(category.id);
                  }}
                >
                  <span className="rounded-full border w-fit p-2 mx-auto">
                    <MappedIcon id={category.icon}/>
                  </span>
                  <span className="p-2 text-xl"> {category.name}</span>
                </button>
              ))}
            </div>
            <Link to={"/"}>
              <button className="border flex justify-center p-2 gap-3 w-fit mx-auto">
                <IoAddCircleOutline className="text-2xl" />
                <span>ADD NEW CATEGORY</span>
              </button>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default SelectOptions;
