import { Edit, Trash, Xmark } from "iconoir-react";
import { useState } from "react";

interface DropDownProps {
  id: string;
  setCreateOrEditDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  delete: (id: string) => Promise<void>;
}

const DropDown = (props: DropDownProps) => {
    const [dropDownOpen, setDropDownOpen] = useState(false);
  return (
    <>
    <button
          className="text-xl font-bold"
          onClick={() => {
            setDropDownOpen((prev) => !prev);
          }}
        >
          ...
        </button>
        {dropDownOpen && (

    <div className="z-10 absolute right-0 top-10 bg-white shadow-2xl flex flex-col border p-5 items-start gap-5 w-40">
      <button className="flex gap-3">
        <Edit className="text-sm" />
        <span
          onClick={() => {
            props.setCreateOrEditDialogOpen((prev) => !prev);
            setDropDownOpen(prev=>!prev)
          }}
        >
          Edit
        </span>
      </button>
      <button
        className="flex gap-3"
        onClick={async () => {
          await props.delete(String(props.id));
          setDropDownOpen(prev=>!prev)
        }}
      >
        <Trash className="text-sm" />
        Delete
      </button>
      <button
        onClick={() => {
          setDropDownOpen((prev) => !prev);
        }}
        className="flex gap-3"
      >
        <Xmark className="text-sm" />
        Close
      </button>
    </div>
        )}
    </>
  );
};

export default DropDown;