import CategoryItem from "../category-item/category-item";
import { categoriesPropTypes } from "../../proptype";
import "./categories.scss";

function Categories({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

Categories.propTypes = {
  categories: categoriesPropTypes,
};

export default Categories;
