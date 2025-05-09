import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/home-page.component";
import { ProductDetails } from "../../modules/product-details/product-details.component";
import { SignUp } from "../../modules/sign-up/sign-up.component";
import { SignIn } from "../../modules/sign-in/sign-in.component";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product:id" element={<ProductDetails />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
}
