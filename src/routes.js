import { Routes, Route } from "react-router-dom";
import MenuPage from "./pages/MenuPage";


const Router = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/login" />} /> */}
        <Route path="/customer-menu/" element={<MenuPage />} />
        <Route path="/customer-menu/menu" element={<MenuPage />} />
        {/* <Route path="reports/liquoroverview" element={<LiquorOverview />} /> */}
    </Routes>
  );
};

export default Router;
