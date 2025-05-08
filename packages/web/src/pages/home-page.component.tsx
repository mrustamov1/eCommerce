import { FAQ } from "../modules/faq/faq.component";
import { Header } from "../modules/header/header.component";
import { Products } from "../modules/products/products.component";
import { JoinList } from "../modules/join-our-list/join-our-list.component";
import { PopularProducts } from "../modules/popular-products/popular-products.component";
import { ProductComparison } from "../modules/product-comparison/product-comparison.component";

export function HomePage() {
  return (
    <>
      <Header />
      <PopularProducts />
      <FAQ />
      <Products />
      <ProductComparison />
      <JoinList />
    </>
  );
}
