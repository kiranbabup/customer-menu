import { Routes, Route } from "react-router-dom";
import MenuPage from "./pages/MenuPage";

const Router = () => {
  
  return (
    <Routes>
        {/* <Route path="/" element={<MenuPage />} /> */}
        <Route path="/customer-menu/:id" element={<MenuPage />} />
    </Routes>
  );
};

export default Router;
