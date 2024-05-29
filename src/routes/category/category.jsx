import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../context/categoriescontext";
import ProductCard from "../../components/product-card/product-card";
import { CategoryContainer, CategoryTitle } from "./category.styles";

function Category() {
  const { category } = useParams();
  const { categoryMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoryMap[category]);

  useEffect(() => {
    setProducts(categoryMap[category]);
  }, [categoryMap, category]);

  return (
    <>
      <CategoryTitle as="h2">{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
}

export default Category;
