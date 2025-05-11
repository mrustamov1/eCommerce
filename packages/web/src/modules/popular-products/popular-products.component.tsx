import { products } from "./data";
import { useNavigate } from "react-router-dom";
import video from "../../assets/videos/video.mp4";
import { Button } from "../../ui-components/button/button.component";

export function PopularProducts() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------

  const navigate = useNavigate();
  // ---------------------------------------------------------------------------
  // functions
  // ---------------------------------------------------------------------------

  function handleID(id: number) {
    navigate(`/products/${id.toString()}`);
  }

  // ---------------------------------------------------------------------------
  return (
    <section className="flex flex-col justify-center items-center py-[4.5rem]">
      <h1 className="text-[2.5rem] font-bold">Popular Now</h1>
      <div className="w-full max-w-[1200px] mx-auto pt-16 max-md:max-w-full p-4">
        <div className="flex gap-5 overflow-x-auto md:overflow-x-visible scroll-smooth scrollbar-hidden">
          {products.slice(0, 3).map((product) => (
            <article
              onClick={() => handleID(product.id)}
              key={product.id}
              className="max-md:min-w-[400px] cursor-pointer bg-[#fff] p-[1.875rem] rounded-2xl flex flex-col leading-8 w-full shadow-[2px_4px_12px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-[1.02]"
            >
              <span className="text-[#e31837] font-bold">
                {product.version}
              </span>
              <span className="font-bold text-[32px] max-xl:text-[28px] max-lg:text-[20px] max-md:text-[32px]">
                {product.model}
              </span>
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

      <div className="relative w-full h-screen">
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover shadow-lg"
        ></video>
        <div className="absolute left-[60px] bottom-[60px] flex flex-col max-md:left-[30px] max-md:bottom-[30px]">
          <div className="text-[#fff] flex-col flex items-start leading-[70px] max-sm:leading-[50px] pb-[30px] max-sm:pb-[20px]">
            <span className="text-2xl">NEW</span>
            <span className="text-[80px] max-w-[100px] max-sm:text-[60px]">
              Beats Cables
            </span>
            <span className="text-[32px] max-sm:text-[25px]">
              Fresh juice for your devices
            </span>
          </div>
          <div className="flex gap-5">
            <Button
              onClick={() => navigate("/products")}
              title="SHOP"
              mode="primary"
            />
            <Button title="WATCH THE FILM" mode="light" />
          </div>
        </div>
      </div>
    </section>
  );
}
