import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Header } from "../header/header.component";
import { ProductType } from "../../types/product.type";
import { Input } from "../../ui-components/Input/input.component";
import { Button } from "../../ui-components/button/button.component";

export function Products() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const navigate = useNavigate();
  const [search, setSearch] = useState(false);

  // ---------------------------------------------------------------------------
  // functions
  // ---------------------------------------------------------------------------
  function handleID(id: number) {
    navigate(`/products/${id.toString()}`);
  }

  async function fetchProducts() {
    const response = await fetch("http://localhost:9090/products/get")
    const res = await response.json();
    return res;
  }

  const query = useQuery({
    queryFn: () => fetchProducts(),
    queryKey: ["products"],
  });

  function toggleSearch() {
    setSearch((prev) => !prev);
  }

  // ---------------------------------------------------------------------------
  return (
    <>
      {/* --------------------------------------------------------------------------- */}
      {/* HEADER */}
      {/* ----------------------------- ---------------------------------------------- */}
      <Header />
      <section className="p-[30px] max-sm:px-[15px]">
        <div className="flex justify-between items-center max-sm:gap-7">
          <h1 className="text-[3rem] font-semibold max-md:text-[2rem]">
            Products
          </h1>
          {search && (
            <div className="flex gap-2">
              <Input
                type="search"
                placeholder="Search your desired product..."
              />
              <Button title="Search" mode="login" className="rounded-[10px]" />
            </div>
          )}
          <div onClick={toggleSearch} className="lg:hidden">
            <i className="fa-regular fa-search"></i>
          </div>
        </div>
        {/* --------------------------------------------------------------------------- */}
        {/* DATA MAP */}
        {/* --------------------------------------------------------------------------- */}
        <div className="grid grid-cols-4 gap-5 perspective-[1000px] pt-12 max-xl:grid max-xl:grid-cols-3 max-lg:grid max-lg:grid-cols-2 max-sm:grid max-sm:grid-cols-1">
          {query.data?.map((product: ProductType) => (
            <article
              onClick={() => handleID(product.id)}
              key={product.id}
              className="cursor-pointer bg-[#fff] p-[1.875rem] rounded-2xl flex flex-col leading-8 flex-1 shadow-[2px_4px_12px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-[1.02]"
            >
              <span className="text-[#e31837] font-bold">
                {product.version}
              </span>
              <span className="font-bold text-[32px] max-2xl:text-[26px]">
                {product.model}
              </span>
              <span className="font-bold">{product.price}</span>
              <img
                className="max-h-[295px] my-auto"
                src={product.photo}
                alt="Product Photo"
              />
              {/* --------------------------------------------------------------------------- */}
              {/* PRODUCTCOLORS MAP */}
              {/* --------------------------------------------------------------------------- */}
              <div className="flex justify-center gap-2 pt-8">
                {product.colors?.map((color, index) => (
                  <span
                    key={index}
                    className="w-[1.25rem] h-[1.25rem] rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
