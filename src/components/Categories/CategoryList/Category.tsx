import { useState } from "react";
import type { Category, SaveCategoryParams } from "../../../types/types";
import MappedIcon from "../../UtilityComponents/MappedIcon";
import EditCategory from "../CreateCategory/EditCategory/EditCategory";
import DropDown from "../../UtilityComponents/DropDown";
import { Delete, Update } from "../../../api/categories";
import { toast } from "react-toastify";

interface CategoryProps {
  category: Category;
  categories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
}

const SingleCategory = (props: CategoryProps) => {
  const [createOrEditCategoryDialogOpen, setCreateOrEditCategoryDialogOpen] =
    useState(false);

  const UpdateCategory = async (params: SaveCategoryParams) => {
    try {
      const response = await Update(params);
      console.log(response);
      if (response.updatedCategory) {
        toast.success(response.message);
        props.setCategories((prev) => {
          const Categories = [...prev];
          const index = Categories.findIndex(
            (a) => a.id === response.updatedCategory.id,
          );
          Categories[index] = response.updatedCategory;
          console.log("Prev after filter", prev);
          return Categories;
        });
        setCreateOrEditCategoryDialogOpen((prev) => !prev);
      } else {
        toast.error(response.message || "Can't update category");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to update category");
    }
  };

  const deleteCategory = async (id: string) => {
    try {
      const response = await Delete({ id });
      console.log(response);
      if (response.deletedCategory) {
        toast.success(response.message);
        props.setCategories((prev) =>{
          return prev.filter((a) => 
            a.id !== Number(id)
          )
        }
        );
        setCreateOrEditCategoryDialogOpen((prev) => !prev);
      } else {
        toast.error(response.message || "Can't delete category");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete category");
    }
  };
  return (
    <div className="flex p-2 gap-3">
      <MappedIcon id={props.category.icon} className="border p-2 rounded" />
      <div className="flex flex-1 justify-between my-auto relative">
        <div>{props.category.name}</div>
        <DropDown
          delete={deleteCategory}
          id={String(props.category.id)}
          setCreateOrEditDialogOpen={setCreateOrEditCategoryDialogOpen}
        />
        {createOrEditCategoryDialogOpen && (
          <EditCategory
            category={props.category}
            setCreateOrEditCategoryDialogOpen={
              setCreateOrEditCategoryDialogOpen
            }
            SaveCategory={UpdateCategory}
          />
        )}
      </div>
    </div>
  );
};

export default SingleCategory;
