import type { ReactNode } from "react";

interface EditAccountOrCategoryLayoutProps {
  headerText: string;
  children: ReactNode;
}

const EditAccountOrCategoryLayout = (props: EditAccountOrCategoryLayoutProps) => {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center z-10">
      <div className="h-fit bg-white flex flex-col items-center p-5 gap-5 max-w-90 mx-auto shadow rounded-2xl py-10">
        <div className="text-xl ">{props.headerText}</div>
        {props.children}
      </div>
    </div>
  );
};

export default EditAccountOrCategoryLayout;
