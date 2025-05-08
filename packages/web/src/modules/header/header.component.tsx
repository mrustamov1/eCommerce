import { Images } from "../../assets/image";
import { Button } from "../../ui-components/button/button.component";

export function Header() {
  return (
    <>
      <header className="flex justify-between items-center px-[30px] py-[13px] sticky top-0 z-2 bg-[#fff]">
        <img className="w-[40px] h-[40px]" src={Images.logo} alt="Logo" />
        <ul className="flex gap-25 text-[20px] font-bold">
          <li>
            <a href="Shop">Shop</a>
          </li>
          <li>
            <a href="Shop">Support</a>
          </li>
        </ul>
        <button className="relative overflow-hidden group px-[37px] py-[5px] font-medium text-[#161616] border-2 border-[#161616] rounded-3xl cursor-pointer">
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white ">
            Sign In
          </span>
          <span className="absolute bottom-0 left-0 w-full h-0 bg-[#F04847] transition-all duration-300 ease-in-out group-hover:h-full"></span>
        </button>
      </header>
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
            <button className="relative overflow-hidden group px-[25px] py-[8px] tracking-tight font-semibold text-[#161616] rounded-3xl bg-[#fff] border-2 border-transparent hover:border-2 hover:border-[#fff] cursor-pointer">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white ">
                SHOP
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0 bg-[#EB4443] transition-all duration-300 ease-in-out group-hover:h-full"></span>
            </button>
            <Button title="SHOP" mode="primary" />
          </div>
        </div>
      </main>
    </>
  );
}
