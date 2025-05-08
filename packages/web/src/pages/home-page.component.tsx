import { FAQ } from "../modules/faq/faq.component";
import { Header } from "../modules/header/home-page.component";
import { PopularProducts } from "../modules/popular-products/popular-products.component";
import { Products } from "../modules/products/products.component";

export function HomePage() {
  return (
    <>
      <Header />
      <PopularProducts />
      <FAQ />
      <Products />
    </>
  );
}
