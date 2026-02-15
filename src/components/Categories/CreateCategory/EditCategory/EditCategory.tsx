import { useState } from "react";
import type { Category, SaveCategoryParams } from "../../../../types/types";
import { IconsMap } from "../../../../lib/iconsMap";
import SaveCancelButton from "../../../UtilityComponents/SaveCancelButton";
import IconsInput from "../../../UtilityComponents/IconsInput";
import CategoryNameInput from "./CategoryNameInput";
import CategoryTypeInput from "./CategoryTypeInput";
import EditAccountOrCategoryLayout from "../../../UtilityComponents/EditAccountOrCategory";

interface EditCategoryProps {
  setCreateOrEditCategoryDialogOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  category?: Category;
  SaveCategory: (params: SaveCategoryParams) => Promise<void>;
}

const EditCategory = (props: EditCategoryProps) => {
  const [type, setType] = useState(props.category?.category_type || "Income");
  const [categoryName, setCategoryName] = useState(props.category?.name || "");
  const [Icon, setIcon] = useState(props.category?.icon || 0);

  const handleSave = async () => {
    await props.SaveCategory({
      data: {
        name: categoryName,
        icon: Icon,
        category_type:type,
      },
      id: String(props.category?.id),
    });
  };
  return (
   <EditAccountOrCategoryLayout headerText={ props.category ? "Edit category" : "Add new category"}>
       <div className="flex flex-col gap-2 p-3">
          <CategoryTypeInput type={type} setType={setType} />
          <CategoryNameInput
            categoryName={categoryName}
            setCategoryName={setCategoryName}
          />
          <IconsInput Icon={Icon} setIcon={setIcon} Icons={IconsMap} />
        </div>
        <SaveCancelButton
          setDialogOpen={props.setCreateOrEditCategoryDialogOpen}
          save={handleSave}
        />
   </EditAccountOrCategoryLayout>
  );
};

export default EditCategory;
