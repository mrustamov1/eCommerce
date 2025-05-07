import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../modules/home-page/home-page.component";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
