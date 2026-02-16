import { useEffect, useState } from "react";
import type { Category, record_type } from "../../../../../../../types/types";
import MappedIcon from "../../../../../../UtilityComponents/MappedIcon";
import SelectCategory from "../Select/SelectCategory";

interface CategoryInputProps {
  categories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  record_type: record_type;
  setCategory: React.Dispatch<React.SetStateAction<number>>;
  category: number;
}

const CategoryInput = (props: CategoryInputProps) => {
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

  useEffect(() => {
    const selectedCategory = props.categories.find(
      (c) => c.id === props.category,
    );
    if (selectedCategory) {
      setCategoryName(selectedCategory.name);
      setCategoryIcon(selectedCategory.icon);
    }
  });

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
            setCategories={props.setCategories}
          />
        </div>
      )}
    </>
  );
};

export default CategoryInput;
