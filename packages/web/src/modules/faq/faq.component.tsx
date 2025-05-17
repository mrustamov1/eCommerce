import { Images } from "../../assets/image";
import { useNavigate } from "react-router-dom";
import { FaqType } from "../../types/faq.type";
import { useFaq } from "../../hooks/fetch.hook";
import { Button } from "../../ui-components/button/button.component";

export function FAQ() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const navigate = useNavigate();

  // ---------------------------------------------------------------------------
  // functions
  // ---------------------------------------------------------------------------

  const { data } = useFaq();

  // ---------------------------------------------------------------------------
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="max-md:px-4 flex flex-col text-center">
        <h1 className="text-[2rem] font-bold max-sm:text-center">
          Seamless Shopping Through Apple
        </h1>
        <div className="w-full max-w-[1200px] mx-auto pt-16 gap-6 flex flex-col">
          <div className="flex justify-between gap-[3rem] max-md:flex-col">
            {data?.map((item: FaqType) => (
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
      </div>

      {/* --------------------------------------------------------------------------- */}
      {/* STUDIO */}
      {/* --------------------------------------------------------------------------- */}
      <div className="pt-16 relative w-full">
        <img
          src={Images.studio}
          alt="Studio"
          className="w-full h-screen object-cover"
        />
        <div className="absolute left-[60px] flex flex-col max-lg:left-[30px] bottom-[60px]">
          <div className="leading-[4.375rem] mb-[30px] max-lg:leading-[3rem] ">
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw + 1rem, 5rem)",
              }}
              className="font-semibold "
            >
              Beats Studio Pro
            </h1>
            <span
              style={{
                fontSize: "clamp(1.5rem, 3vw + 0.8rem, 2rem)",
              }}
            >
              Featuring Shohei Ohtani
            </span>
          </div>
          <div>
            <Button
              onClick={() => navigate("/products")}
              title="SHOP"
              mode="dark"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
