import { useNavigate } from "react-router-dom";
import video from "../../assets/videos/video.mp4";
import { Button } from "../../ui-components/button/button.component";
import { products } from "./data";

export function PopularProducts() {
  const navigate = useNavigate();
  // ---------------------------------------------------------------------------
  // data
  // ---------------------------------------------------------------------------

  function handleID(id: number) {
    navigate(`/products/${id.toString()}`);
  }

  // ---------------------------------------------------------------------------
  return (
    <section className="flex flex-col justify-center items-center py-[4.5rem]">
      <h1 className="text-[2.5rem] font-bold">Popular Now</h1>
      <div className="w-full max-w-[1200px] mx-auto pt-16">
        <div className="flex gap-5 perspective-[1000px]">
          {products.slice(0, 3).map((product) => (
            <article
              onClick={() => handleID(product.id)}
              key={product.id}
              className="cursor-pointer bg-[#fff] p-[1.875rem] rounded-2xl flex flex-col leading-8 flex-1 shadow-[2px_4px_12px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-[1.02]"
            >
              <span className="text-[#e31837] font-bold">
                {product.version}
              </span>
              <span className="font-bold text-[32px]">{product.model}</span>
              <span className="font-bold">{product.price}</span>
              <img
                className="max-h-[295px] my-auto"
                src={product.photo}
                alt="Product Photo"
              />
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
      </div>

      {/* --------------------------------------------------------------------------- */}
      {/* VIDEO */}
      {/* --------------------------------------------------------------------------- */}

      <div className="relative w-full h-auto">
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto shadow-lg mt-20 relative"
        ></video>
        <div className="flex-col flex ps-[60px] pb-[60px] absolute top-[60%]">
          <div className="text-[#fff] flex-col flex items-start leading-[70px] pb-[30px]">
            <span className="text-2xl">NEW</span>
            <span className="text-[80px] max-w-[100px]">Beats Cables</span>
            <span className="text-[32px]">Fresh juice for your devices</span>
          </div>
          <div className="flex gap-5">
            <Button
              onClick={() => navigate("/products")}
              title="SHOP"
              mode="primary"
            />
            <Button title=" WATCH THE FILM" mode="light" />
          </div>
        </div>
      </div>
    </section>
  );
}
