import { Images } from "../../assets/image";

export function FAQ() {
  const data = [
    {
      id: 1,
      photo: `${Images.box}`,
      title: "Fast and Free Delivery",
      description: "Enjoy free two-day delivery on most in-stock items.",
    },
    {
      id: 1,
      photo: `${Images.shoppingbeg}`,
      title: "In-Store Pickup",
      description: "Pick up your online order at an Apple Store near you.",
    },
    {
      id: 1,
      photo: `${Images.rotate}`,
      title: "Easy Returns",
      description: "Return eligible items to Apple within 14 days of receipt.",
    },
  ];
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-[2rem] font-bold">Seamless Shopping Through Apple</h1>
      <div className="w-full max-w-[1200px] mx-auto pt-16 gap-6 flex flex-col">
        <div className="flex justify-between gap-[3rem]">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-center items-center text-center gap-2"
            >
              <img
                className="w-[64px] h-[64px] mb-3"
                src={item.photo}
                alt="Photo"
              />
              <span className="text-2xl font-bold">{item.title}</span>
              <p className="text-xl">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="relative overflow-hidden group px-[30px] py-[8px] font-medium text-[#161616] border-2 border-[#161616] rounded-3xl hover:border-2 cursor-pointer">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white ">
              VIEW ALL FAQS
            </span>
            <span className="absolute bottom-0 left-0 w-full h-0 bg-[#EB4443] transition-all duration-300 ease-in-out group-hover:h-full"></span>
          </button>
        </div>
      </div>

      <div className="pt-16 relative">
        <img src={Images.studio} alt="" />
        <div className="absolute top-[50%] pl-[60px]">
          <div className="leading-[4.375rem] mb-[30px]">
            <h1 className="text-[5rem] font-semibold">Beats Studio Pro</h1>
            <span className="text-[2rem]">Featuring Shohei Ohtani</span>
          </div>
          <div>
            <button className="relative overflow-hidden group px-[25px] py-[8px] tracking-tight font-semibold text-[#fff] rounded-3xl bg-[#161616] border-2 border-transparent hover:border-2 hover:border-[#000] cursor-pointer">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white ">
                SHOP
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0 bg-[#EB4443] transition-all duration-300 ease-in-out group-hover:h-full"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
