import { useEffect, useState } from "react";
import CategoryList from "./CategoryList/CategoryList";
import AddNewCategoryButton from "./CreateCategory/AddNewCategory";
import { toast } from "react-toastify";
import type { Category } from "../../types/types";
import { Get } from "../../api/categories";

const CategoriesPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
   useEffect(() => {
      const GetAllCategories = async () => {
        try {
          const response = await Get();
          if (!response.categories) {
            toast.error(response.message);
          }
          const allCategories = response.categories as Category[]
          setCategories(allCategories);
        } catch (error) {
          toast.error("Failed to fetch records");
        }
      };
     GetAllCategories()
    }, []);
  return (
    <div className="min-h-screen">
      <CategoryList categories={categories} setCategories={setCategories} />
      <AddNewCategoryButton setCategories={setCategories} />
    </div>
  );
};

export default CategoriesPage;
