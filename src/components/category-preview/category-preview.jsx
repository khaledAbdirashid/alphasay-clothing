import ProductCard from "../product-card/product-card";
import { categoryPreviewPropTypes } from "../../proptype";
import { Link } from "react-router-dom";
import {
  CategoryPreviewContainer,
  CategoryPreviewTitle,
  Preview,
} from "./category-preview.styles";

function CategoryPreview({ title, products }) {
  return (
    <CategoryPreviewContainer>
      <CategoryPreviewTitle as="h2">
        <Link to={title}>{title.toUpperCase()}</Link>
      </CategoryPreviewTitle>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
}

CategoryPreview.propTypes = categoryPreviewPropTypes;

export default CategoryPreview;
