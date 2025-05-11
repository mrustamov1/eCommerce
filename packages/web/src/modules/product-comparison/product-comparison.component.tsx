import { Images } from "../../assets/image";
import { Button } from "../../ui-components/button/button.component";

export function ProductComparison() {
  // ---------------------------------------------------------------------------
  return (
    <section className="relative flex flex-col items-center justify-center">
      <div>
        <img src={Images.compare} alt="Compare" className="max-md:h-screen object-cover"/>
        <div className="absolute top-[12%] pl-[60px] max-sm:pl-[30px]">
          <div className="max-w-[550px] pb-[50px] max-xl:max-w-full max-md:pr-18">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] leading-tight pb-2 transition-all duration-300 ease-in-out">
              Which Beats are right for you?
            </h1>
            <p className="text-[clamp(1rem,2vw,1.75rem)] transition-all duration-300 ease-in-out">
              Compare our product features to find the perfect fit.
            </p>
          </div>
          <div>
            <Button title="COMPARE PRODCUTS" mode="dark" />
          </div>
        </div>
        <div className="max-w-[1320px] w-full m-auto py-16 flex flex-col gap-3 text-[0.8125rem] text-[#757575] max-2xl:px-3.5">
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
