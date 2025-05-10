import { Images } from "../../assets/image";
import { useParams } from "react-router-dom";
import { Header } from "../header/header.component";
import { ProductType } from "../../types/product.type";
import { Button } from "../../ui-components/button/button.component";
import { useState } from "react";

export function ProductDetails() {
  const { id } = useParams();

  const numericId = Number(id);
  const data: ProductType[] = [
    {
      id: 1,
      images: [
        Images.airpod,
        Images.pro,
        Images.pro1,
        Images.pro3,
        Images.pro4,
      ],
      title: "Beats Studio Pro",
      subTitle: "Iconic Sound",
      price: "$349.99",
      highlight: "Up to 40 hours of battery life",
      deliveryInfo: [
        {
          image: Images.box,
          title: "Free Shipping and Returns",
          subTitle: "Enjoy free 2-day delivery and 14-day returns.",
        },
        {
          image: Images.pickup,
          title: "In-store pickup",
          subTitle: "Pick up your Beats at an Apple Store near you.",
        },
        {
          image: Images.music,
          title: "Free Apple Music trial",
          subTitle:
            "Get 3 months of access to over 100 million songs, ad-free.6",
        },
      ],
    },
    {
      id: 2,
      images: [
        Images.airpod2,
        Images.head1,
        Images.head2,
        Images.head3,
        Images.head4,
      ],
      title: "Beats Studio Pro",
      subTitle: "Iconic Sound",
      price: "$349.99",
      highlight: "Up to 40 hours of battery life",
      deliveryInfo: [
        {
          image: Images.box,
          title: "Free Shipping and Returns",
          subTitle: "Enjoy free 2-day delivery and 14-day returns.",
        },
        {
          image: Images.pickup,
          title: "In-store pickup",
          subTitle: "Pick up your Beats at an Apple Store near you.",
        },
        {
          image: Images.music,
          title: "Free Apple Music trial",
          subTitle:
            "Get 3 months of access to over 100 million songs, ad-free.6",
        },
      ],
    },
    {
      id: 3,
      images: [
        Images.airpod3,
        Images.mic1,
        Images.mic2,
        Images.mic3,
        Images.mic4,
      ],
      title: "Beats Pill",
      subTitle: "Seriously loud.",
      price: "$149.99",
      highlight: "Up to 40 hours of battery life",
      deliveryInfo: [
        {
          image: Images.box,
          title: "Free Shipping and Returns",
          subTitle: "Enjoy free 2-day delivery and 14-day returns.",
        },
        {
          image: Images.pickup,
          title: "In-store pickup",
          subTitle: "Pick up your Beats at an Apple Store near you.",
        },
        {
          image: Images.music,
          title: "Free Apple Music trial",
          subTitle:
            "Get 3 months of access to over 100 million songs, ad-free.6",
        },
      ],
    },
  ];

  const products = data.find((p) => p.id === numericId);
  const [selectedImage, setSelectedImage] = useState(products?.images[0] || "");
  if (!products) return <div>Product not found.</div>;
  return (
    <>
      <Header />
      <div className="bg-[#fff]">
        <section className="flex flex-col max-w-[1250px] w-full mx-auto">
          <div className="flex pt-[50px] gap-5">
            <div>
              {products.images.map((item, index) => (
                <div key={index}>
                  <img
                    className={`max-w-[100px] rounded-2xl mb-4 shadow-[2px_4px_12px_rgba(0,0,0,0.1)] cursor-pointer ${selectedImage === item ? "border-2 border-[#000]" : ""}`}
                    src={item}
                    onClick={() => setSelectedImage(item)}
                    alt="Images"
                  />
                </div>
              ))}
            </div>
            <img
              className="max-w-[700px] w-full max-h-[565px] rounded-2xl shadow-[2px_4px_12px_rgba(0,0,0,0.1)]"
              src={selectedImage}
              alt="Main Image"
            />
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
