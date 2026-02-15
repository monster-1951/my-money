import { PlusCircle } from "iconoir-react";
import EditCategory from "./EditCategory/EditCategory";
import { useState } from "react";
import type { Category, SaveCategoryParams } from "../../../types/types";
import { toast } from "react-toastify";
import { CreateCategoryApi } from "../../../api/categories";

interface AddNewAccountButtonProps {
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
}

const AddNewCategoryButton = (props: AddNewAccountButtonProps) => {
  const [createOrEditCategoryDialogOpen, setCreateOrEditCategoryDialogOpen] =
    useState(false);
  const CreateNewCategory = async (params: SaveCategoryParams) => {
    try {
      const response = await CreateCategoryApi(params.data);
      console.log(response);
      if (response.newCategory) {
        props.setCategories((prev) => [...prev, response.newCategory]);
        setCreateOrEditCategoryDialogOpen((prev) => !prev);
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to create category");
    }
  };
  return (
    <div className="pb-3">
      <button
        className="border flex justify-center p-2 gap-3 w-fit mx-auto py-3"
        onClick={() => {
          setCreateOrEditCategoryDialogOpen((prev) => !prev);
        }}
      >
        <PlusCircle />
        <span>ADD NEW CATEGORY</span>
      </button>
      {createOrEditCategoryDialogOpen && (
        <EditCategory
          setCreateOrEditCategoryDialogOpen={setCreateOrEditCategoryDialogOpen}
          SaveCategory={CreateNewCategory}
        />
      )}
    </div>
  );
};

export default AddNewCategoryButton;
