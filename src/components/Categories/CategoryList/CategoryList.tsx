import type { Category, category_type } from "../../../types/types";
import SingleCategory from "./Category";


interface CategoryListProps {
  categories: Category[];
  setCategories : React.Dispatch<React.SetStateAction<Category[]>>;
}


interface renderCategoryByTypeProps{
    categories:Category[]
    type:category_type
    setCategories : React.Dispatch<React.SetStateAction<Category[]>>;
}
const RenderCategoryByType = (props:renderCategoryByTypeProps) => {
    return <div className="py-3">
    <div className="font-semibold border-b pb-3 mb-3">{props.type} Categories</div>
    {props.categories.map((category) => {
        if(category.category_type === props.type)
          return (
            <SingleCategory category={category} categories={props.categories} setCategories={props.setCategories} key={category.id}/>
          );
      })}
    </div>
}
const CategoryList = (props: CategoryListProps) => {
  return (
    <div className="flex flex-col p-5 px-2">
      <RenderCategoryByType categories={props.categories} type="Income" setCategories={props.setCategories}/>
      <RenderCategoryByType categories={props.categories} type="Expense" setCategories={props.setCategories}/>
    </div>
  );
};

export default CategoryList;
