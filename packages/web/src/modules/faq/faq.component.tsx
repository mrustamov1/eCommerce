import { Images } from "../../assets/image";
import { Button } from "../../ui-components/button/button.component";

export function FAQ() {
  // ---------------------------------------------------------------------------
  // data
  // ---------------------------------------------------------------------------
  const data = [
    {
      id: 1,
      photo: `${Images.box}`,
      title: "Fast and Free Delivery",
      description: "Enjoy free two-day delivery on most in-stock items.",
    },
    {
      id: 2,
      photo: `${Images.shoppingbeg}`,
      title: "In-Store Pickup",
      description: "Pick up your online order at an Apple Store near you.",
    },
    {
      id: 3,
      photo: `${Images.rotate}`,
      title: "Easy Returns",
      description: "Return eligible items to Apple within 14 days of receipt.",
    },
  ];

  // ---------------------------------------------------------------------------
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
          <Button title="VIEW ALL FAQS" mode="simple" />
        </div>
      </div>

      {/* --------------------------------------------------------------------------- */}
      {/* STUDIO */}
      {/* --------------------------------------------------------------------------- */}
      <div className="pt-16 relative">
        <img src={Images.studio} alt="" />
        <div className="absolute top-[50%] pl-[60px]">
          <div className="leading-[4.375rem] mb-[30px]">
            <h1 className="text-[5rem] font-semibold">Beats Studio Pro</h1>
            <span className="text-[2rem]">Featuring Shohei Ohtani</span>
          </div>
          <div>
            <Button title="SHOP" mode="simple" />
          </div>
        </div>
      </div>
    </section>
  );
}
