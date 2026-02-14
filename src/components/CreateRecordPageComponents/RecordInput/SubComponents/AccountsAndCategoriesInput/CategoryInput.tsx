import { useState } from "react";
import MappedIcon from "../../../../UtilityComponent/MappedIcon";
import SelectCategory from "./Select/SelectCategory";
import type { Category, record_type } from "../../../../../types/types";

interface CategoryInputProps {
    categories:Category[]
    record_type:record_type
     setCategory: React.Dispatch<React.SetStateAction<number>>;
}

const CategoryInput = (props:CategoryInputProps) => {
  const [categoryName, setCategoryName] = useState("Category");
  const [CategoryIcon, setCategoryIcon] = useState(31);

  const [selctCategoryMenuOpen, setSelctCategoryMenuOpen] = useState(false);

  const ToggleCategoryMenu = () => {
    setSelctCategoryMenuOpen((prev) => !prev);
  };

    const handleCategoryChange = (option: Category) => {
    const name = option.name;
    const icon_id = option.icon;
    setCategoryIcon(icon_id || CategoryIcon);
    setCategoryName(name || "Category");
    props.setCategory(Number(option.id));
    setSelctCategoryMenuOpen((prev) => !prev);
  };

  return (
    <>
      <button
        className="w-full border flex justify-center rounded py-2 space-x-1"
        onClick={ToggleCategoryMenu}
      >
        <span className="p-2">
          <MappedIcon id={CategoryIcon} />
        </span>
        <span className="my-auto">{categoryName}</span>
      </button>
      {selctCategoryMenuOpen && (
        <div className="fixed inset-0 bg-black/40">
          <SelectCategory
            title="Select a category"
            categories={props.categories.filter(
              (c) => c.category_type === props.record_type,
            )}
            handleCategoryChange={handleCategoryChange}
          />
        </div>
      )}
    </>
  );
};

export default CategoryInput;
