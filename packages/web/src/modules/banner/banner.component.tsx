import { Images } from "../../assets/image";
import { Button } from "../../ui-components/button/button.component";

export function Banner() {
  return (
    <>
    <main
      style={{
        backgroundImage: `url(${Images.banner})`,
        backgroundSize: "cover",
      }}
      className="relative h-[100vh] flex justify-end flex-col"
    >
      <div className="flex-col flex  ps-[60px] pb-[60px]">
        <div className="text-[#fff] flex-col flex items-start leading-[70px] pb-[30px]">
          <span className="text-2xl">NEW</span>
          <span className="text-[80px]">PowerBeats Pro 2</span>
          <span className="text-[32px]">Built for athletes</span>
        </div>
        <div>
          <Button title="SHOP" mode="primary" />
        </div>
      </div>
    </main>
  </>
  )
}
