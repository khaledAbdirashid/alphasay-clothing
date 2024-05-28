import "./category-preview.scss";
import ProductCard from "../product-card/product-card";
import { categoryPreviewPropTypes } from "../../proptype";
import { Link } from "react-router-dom";

function CategoryPreview({ title, products }) {
  // const { category } = useParams();
  return (
    <div className="category-preview ">
      <h2 className="title">
        <Link to={title}>{title.toUpperCase()}</Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

CategoryPreview.propTypes = categoryPreviewPropTypes;

export default CategoryPreview;
