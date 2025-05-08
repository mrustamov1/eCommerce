import { Images } from "../../assets/image";

export function ProductComparison() {
  return (
    <section className="relative flex flex-col items-center justify-center">
      <div>
        <img src={Images.compare} alt="Compare" />
        <div className="absolute top-[12%] pl-[60px]">
          <div className="max-w-[550px] pb-[50px]">
            <h1 className="text-[4rem] leading-18 pb-2">
              Which Beats are right for you?
            </h1>
            <p className="text-[1.75rem]">
              Compare our product features to find the perfect fit.
            </p>
          </div>
          <div>
            <button className="relative overflow-hidden group px-[25px] py-[8px] font-medium text-[#161616] border-2 border-[#161616] rounded-3xl cursor-pointer">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white ">
                COMPARE PRODCUTS
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0 bg-[#F04847] transition-all duration-300 ease-in-out group-hover:h-full"></span>
            </button>
          </div>
        </div>
        <div className="max-w-[1320px] w-full m-auto py-16 flex flex-col gap-3 text-[0.8125rem] text-[#757575]">
          <p>
            1. Works with compatible Beats headphones. Find My Beats requires an
            iPhone or iPod touch with iOS 14.5 or later, iPad with iPadOS 14.5
            or later, or Mac with macOS Big Sur 11.3 or later. Customers must
            have an Apple Account and be signed into their iCloud account with
            Find My enabled.
          </p>
          <p>
            2. New subscribers only. Offer available for a limited time to new
            subscribers who connect an eligible device to an Apple device
            running iOS 15 or iPadOS 15 or later. Offer good for 3 months after
            eligible device pairing. No audio product purchase necessary for
            current owners of eligible devices. Plan automatically renews at
            your region’s price per month until cancelled. Restrictions and
            other termsother terms (Opens in new window) apply.
          </p>
        </div>
      </div>
    </section>
  );
}
