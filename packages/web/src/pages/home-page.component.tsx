import { FAQ } from "../modules/faq/faq.component";
import { Header } from "../modules/header/header.component";
import { Categories } from "../modules/categories/categories.component";
import { JoinList } from "../modules/join-our-list/join-our-list.component";
import { PopularProducts } from "../modules/popular-products/popular-products.component";
import { ProductComparison } from "../modules/product-comparison/product-comparison.component";
import { Banner } from "../modules/banner/banner.component";

export function HomePage() {
  // ---------------------------------------------------------------------------
  return (
    <>
      {/* --------------------------------------------------------------------------- */}
      {/* HEADER COMPONENT */}
      {/* --------------------------------------------------------------------------- */}
      <Header />
      {/* --------------------------------------------------------------------------- */}
      {/* HEADER COMPONENT */}
      {/* --------------------------------------------------------------------------- */}
      <Banner />
      {/* --------------------------------------------------------------------------- */}
      {/* POPULAR PRODUCTS COMPONENT */}
      {/* --------------------------------------------------------------------------- */}
      <PopularProducts />
      {/* --------------------------------------------------------------------------- */}
      {/* FAQ COMPONENT */}
      {/* --------------------------------------------------------------------------- */}
      <FAQ />
      {/* --------------------------------------------------------------------------- */}
      {/* CATEGORIES COMPONENT */}
      {/* --------------------------------------------------------------------------- */}
      <Categories />
      {/* --------------------------------------------------------------------------- */}
      {/* PRODUCT COMPARISON COMPONENT */}
      {/* --------------------------------------------------------------------------- */}
      <ProductComparison />
      {/* --------------------------------------------------------------------------- */}
      {/* JOIN LIST COMPONENT */}
      {/* --------------------------------------------------------------------------- */}
      <JoinList />
    </>
  );
}
