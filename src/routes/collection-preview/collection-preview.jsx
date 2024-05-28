import { useContext } from "react";
import { CategoriesContext } from "../../context/categoriescontext";
import CategoryPreview from "../../components/category-preview/category-preview";

function CollectionPreview() {
  const { categoryMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoryMap).map((title) => (
        <CategoryPreview
          key={title}
          title={title}
          products={categoryMap[title]}
        />
      ))}
    </>
  );
}

export default CollectionPreview;
