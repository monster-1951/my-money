import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import type { Category } from "../../../../../../types/types";
import MappedIcon from "../../../../../UtilityComponent/MappedIcon";

interface SelectCategoryProps {
    title:string;
  categories: Category[];
  handleCategoryChange:(option: Category) => void;
}
const SelectCategory = (props: SelectCategoryProps) => {
  return (
    <>
      <div
        className={`flex-1 z-10 bottom-0 left-0 fixed border bg-white w-full flex flex-col justify-center p-5 gap-5`}
      >
          <>
            <div className="text-center text-xl">{props.title}</div>
            <div className="grid grid-cols-3 max-h-150 overflow-scroll shadow-inner">
              {props.categories.map((category) => (
                <button
                  key={category.id}
                  className="flex flex-col p-5 gap-3 justify-between"
                  onClick={() => {
                    props.handleCategoryChange(category);
                  }}
                >
                  <span className="rounded-full border w-fit p-2 mx-auto">
                    <MappedIcon id={category.icon}/>
                  </span>
                  <span className="p-2 text-sm"> {category.name.slice(0,6)}...</span>
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
      </div>
    </>
  );
};

export default SelectCategory;
