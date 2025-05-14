import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/home-page.component";
import { SignUp } from "../../modules/sign-up/sign-up.component";
import { SignIn } from "../../modules/sign-in/sign-in.component";
import { Products } from "../../modules/products/products.component";
import { ProductDetails } from "../../modules/product-details/product-details.component";
// import { AdminRoutes } from "./admin.route";
import { Admin } from "../../modules/admin-panel/admin-panel.component";
// import { useAuthorization } from "../../context/authorization.context";
// import { ProtectedRoute } from "./protected.route";

export function MainRoutes() {
  // const { user } = useAuthorization();

  // if (user && user.role === "admin") {
  //   return <AdminRoutes />;
  // }

  return (
    <Routes>
      <Route path="/admin" element={<Admin />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      {/* {user && user.role === "user" && ( */}
      {/* <Route element={<ProtectedRoute />}> */}
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      {/* </Route> */}
      {/* )} */}
    </Routes>
  );
}
