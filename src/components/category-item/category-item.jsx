import {
  CategoryItemBody,
  CategoryItemContainer,
  BackgroundImage,
} from "./category-item.styles.js";
import { categoryItemPropTypes } from "../../proptype";
import { useNavigate } from "react-router-dom";
function CategoryItem({ category }) {
  const { imageUrl, title, route } = category;

  const navigate = useNavigate();

  const onNavigate = () => navigate(route);
  return (
    <CategoryItemContainer onClick={onNavigate}>
      <BackgroundImage $imageUrl={imageUrl} />
      <CategoryItemBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryItemBody>
    </CategoryItemContainer>
  );
}
CategoryItem.propTypes = {
  category: categoryItemPropTypes,
};

export default CategoryItem;
