import { AdminRoutes } from "./admin.route";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/home-page.component";
import { SignUp } from "../../modules/sign-up/sign-up.component";
import { SignIn } from "../../modules/sign-in/sign-in.component";
import { Products } from "../../modules/products/products.component";
import { useAuthorization } from "../../context/authorization.context";
import { ProductDetails } from "../../modules/product-details/product-details.component";
import { Admin } from "../../modules/admin-panel/admin-panel.component";

export function MainRoutes() {
  // const { user } = useAuthorization();
  return (
    <>
      {/* {user && user.role === "admin" ? ( */}
      {/* <AdminRoutes /> */}
      {/* ) : user && user.role === "user" ? ( */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      {/* ) : ( */}
      {/* <Routes> */}
      {/* <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} /> */}
      {/* </Routes> */}
      {/* )} */}
    </>
  );
}
