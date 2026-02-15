interface CategoryNameInputProps {
  categoryName: string;
  setCategoryName: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryNameInput = (props: CategoryNameInputProps) => {
  const handlCategoryNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setCategoryName(e.target.value);
  };
  return (
    <div className="flex justify-between gap-3 items-center">
      <span>Name</span>
      <input
        type="text"
        placeholder="Account name"
        className="border p-3 focus:border-0"
        value={props.categoryName}
        onChange={handlCategoryNameChange}
      />
    </div>
  );
};


export default CategoryNameInput