import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/home-page.component";
import { SignUp } from "../../modules/sign-up/sign-up.component";
import { SignIn } from "../../modules/sign-in/sign-in.component";
import { ProductDetails } from "../../modules/product-details/product-details.component";
import { Products } from "../../modules/products/products.component";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
}
