import { Outlet } from "react-router-dom";
import Categories from "../../components/categories/categories";

function Home() {
  return (
    <div>
      <Categories />
      <Outlet />
    </div>
  );
}

export default Home;
