import { Routes, Route } from "react-router-dom";
import MenuPage from "./pages/MenuPage";


const Router = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/login" />} /> */}
        <Route path="/" element={<MenuPage />} />
        {/* <Route path="reports/liquoroverview" element={<LiquorOverview />} /> */}
    </Routes>
  );
};

export default Router;
