import { useState } from "react";
import { data } from "./product-detail.data";
import { useParams } from "react-router-dom";
import { Header } from "../header/header.component";
import { Button } from "../../ui-components/button/button.component";

export function ProductDetails() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const { id } = useParams();
  const numericId = Number(id);
  const products = data.find((p) => p.id === numericId);
  const [selectedImage, setSelectedImage] = useState(products?.images[0] || "");

  // ---------------------------------------------------------------------------
  // conditional rendering
  // ---------------------------------------------------------------------------

  if (!products) return <div>Product not found.</div>;

  // ---------------------------------------------------------------------------
  return (
    <>
      <Header />
      <div className="bg-[#fff]">
        <section className="flex flex-col max-w-[1250px] w-full mx-auto max-xl:px-4">
          <div className="max-lg:flex-col flex pt-[50px] gap-5">
            <div className="flex gap-5 max-md:flex-col-reverse">
              <div className="max-md:flex gap-5 max-sm:gap-3">
                {products.images.map((item, index) => (
                  <div key={index}>
                    <img
                      className={`max-w-[100px] w-full rounded-2xl mb-4 shadow-[2px_4px_12px_rgba(0,0,0,0.1)] cursor-pointer ${selectedImage === item ? "border-2 border-[#000]" : ""}`}
                      src={item}
                      onClick={() => setSelectedImage(item)}
                      alt="Images"
                    />
                  </div>
                ))}
              </div>
              <img
                className="max-w-[700px] w-full max-h-[565px] h-screen max-sm:max-h-[450px] rounded-2xl shadow-[2px_4px_12px_rgba(0,0,0,0.1)]"
                src={selectedImage}
                alt="Main Image"
              />
            </div>
            <div className="flex flex-col pt-5">
              <span className="text-[40px] font-semibold leading-[1.2em]">
                {products.title}
              </span>
              <span className="text-[20px]  leading-[1.2em]">
                {products.subTitle}
              </span>
              <div className="flex flex-col py-5">
                <span className="text[1.5rem] font-bold py-1">
                  {products.price}
                </span>
                <span className="text[1.5rem] font-bold text-gray-600">
                  {products.highlight}
                </span>
              </div>
              <Button title="ADD TO CARD" mode="dark" />
              <div className="border-y-[0.5px] border-y-gray-300 mt-10">
                {products.deliveryInfo.map((item, index) => (
                  <div key={index} className="flex gap-3 items-center my-5">
                    <img className="w-[1.5rem] h-[1.5rem]" src={item.image} />
                    <div className="flex flex-col">
                      <span className="font-bold">{item.title}</span>
                      <span className="text-gray-500">{item.subTitle}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
