import { PlusCircle } from "iconoir-react";
import { useState } from "react";
import EditAccount from "./EditAccount";

const CreateAccount = () => {
  const [createOrEditIconDialogOpen, setCreateOrEditIconDialogOpen] =
    useState(false);
  return (
    <>
      <button
        className="border flex justify-center p-2 gap-3 w-fit mx-auto"
        onClick={() => {
          setCreateOrEditIconDialogOpen((prev) => !prev);
        }}
      >
        <PlusCircle />
        <span>ADD NEW ACCOUNT</span>
      </button>
      {createOrEditIconDialogOpen && (
        <EditAccount setCreateOrEditIconDialogOpen={setCreateOrEditIconDialogOpen}/>
      )}
    </>
  );
};

export default CreateAccount;
