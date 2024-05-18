import "./category-item.scss";
import { categoryItemPropTypes } from "../../proptype";

function CategoryItem({ category }) {
  const { imageUrl, title } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}
CategoryItem.propTypes = {
  category: categoryItemPropTypes,
};

export default CategoryItem;