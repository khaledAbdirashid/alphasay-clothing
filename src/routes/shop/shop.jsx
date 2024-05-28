import { Route, Routes } from "react-router-dom";
import CollectionPreview from "../collection-preview/collection-preview";
import Category from "../category/category";

function Shop() {
  return (
    <Routes>
      <Route index element={<CollectionPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}

export default Shop;
