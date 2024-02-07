import { Routes, Route, useParams } from "react-router-dom";
import MenuPage from "./pages/MenuPage";

const Router = () => {
  const { id } = useParams();
    const urlParams = new URLSearchParams(window.location.search);
    const foodListParam = urlParams.get('foodList');
    const foodList = JSON.parse(decodeURIComponent(foodListParam));
  return (
    <Routes>
        {/* <Route path="/" element={<MenuPage />} /> */}
        <Route path="/customer-menu/:id" element={<MenuPage foodList={foodList} id={id}/>} />
    </Routes>
  );
};

export default Router;
