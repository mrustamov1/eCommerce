import { Images } from "../../assets/image";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui-components/button/button.component";

export function Banner() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const navigate = useNavigate();

  // ---------------------------------------------------------------------------

  return (
    <>
      <main
        style={{
          backgroundImage: `url(${Images.banner})`,
        }}
        className="relative h-screen flex flex-col justify-end bg-cover bg-center"
      >
        <div className="flex-col flex ps-[60px] pb-[60px]  max-md:ps-[30px] max-md:pb-[30px]">
          <div className="text-[#fff] flex-col flex items-start leading-[70px] max-md:leading-[50px] pb-[30px]">
            <span className="text-2xl">NEW</span>
            <span className="text-[80px] max-sm:text-[40px]">
              PowerBeats Pro 2
            </span>
            <span className="text-[32px]">Built for athletes</span>
          </div>
          <div>
            <Button
              onClick={() => navigate("/products")}
              title="SHOP"
              mode="primary"
            />
          </div>
        </div>
      </main>
    </>
  );
}
