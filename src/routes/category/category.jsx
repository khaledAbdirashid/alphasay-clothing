import { useParams } from "react-router-dom";
import "./category.scss";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../context/categoriescontext";
import ProductCard from "../../components/product-card/product-card";

function Category() {
  const { category } = useParams();
  const { categoryMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoryMap[category]);

  useEffect(() => {
    setProducts(categoryMap[category]);
  }, [categoryMap, category]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
}

export default Category;
