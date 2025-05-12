import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Header } from "../header/header.component";
import { useParams } from "react-router-dom";
import { Button } from "../../ui-components/button/button.component";
import { DeliveryInfoType } from "../../types/product.type";

export function ProductDetails() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState("");

  async function fetchProductDetails(id: string) {
    const response = await fetch(
      `http://localhost:9090/product/details/get/${id}`
    );
    if (!response.ok) throw new Error("Failed to fetch product details");
    const res = await response.json();
    return res;
  }

  const { data } = useQuery({
    queryFn: () => (id ? fetchProductDetails(id) : Promise.resolve(null)),
    queryKey: ["product-details", id],
    enabled: !!id,
  });

  useEffect(() => {
    if (data?.images?.length > 0) {
      setSelectedImage(data.images[0]);
    }
  }, [data]);

  // ---------------------------------------------------------------------------
  // conditional rendering
  // ---------------------------------------------------------------------------

  if (!data) return <div>Product not found.</div>;

  // ---------------------------------------------------------------------------
  return (
    <>
      <Header />
      <div className="bg-[#fff]">
        <section className="flex flex-col max-w-[1250px] w-full mx-auto max-xl:px-4">
          <div className="max-lg:flex-col flex pt-[50px] gap-5">
            <div className="flex gap-5 max-md:flex-col-reverse">
              <div className="max-md:flex gap-5 max-sm:gap-3">
                {data.images?.map((item: string, index: number) => (
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
                {data.title}
              </span>
              <span className="text-[20px]  leading-[1.2em]">
                {data.subTitle}
              </span>
              <div className="flex flex-col py-5">
                <span className="text[1.5rem] font-bold py-1">
                  {data.price}
                </span>
                <span className="text[1.5rem] font-bold text-gray-600">
                  {data.highlight}
                </span>
              </div>
              <Button title="ADD TO CARD" mode="dark" />
              <div className="border-y-[0.5px] border-y-gray-300 mt-10">
                {data.deliveryInfo?.map(
                  (item: DeliveryInfoType, index: number) => (
                    <div key={index} className="flex gap-3 items-center my-5">
                      <img className="w-[1.5rem] h-[1.5rem]" src={item.image} />
                      <div className="flex flex-col">
                        <span className="font-bold">{item.title}</span>
                        <span className="text-gray-500">{item.subTitle}</span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
