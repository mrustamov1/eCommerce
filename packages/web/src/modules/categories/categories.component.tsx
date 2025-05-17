import { useCategories } from "../../hooks/fetch.hook";
import { CategoriesType } from "../../types/categories.type";

export function Categories() {
  // ---------------------------------------------------------------------------
  // functions
  // ---------------------------------------------------------------------------

  const { data } = useCategories();

  // ---------------------------------------------------------------------------
  return (
    <div>
      <div className="flex justify-end p-5 cursor-pointer">
        <span className="flex gap-2 items-center text-black hover:text-[#6c63ff] group">
          See All
          <i className="fa-light fa-arrow-right transform transition-transform duration-300 group-hover:translate-x-2"></i>
        </span>
      </div>
      <section className="w-full overflow-x-scroll overflow-y-hidden flex justify-center pb-[60px] scrollbar-hidden">
        <div className="flex gap-5 w-max perspective-[1000px]">
          {data?.map((product: CategoriesType) => (
            <article
              key={product.id}
              className=" w-[333px] cursor-pointer bg-[#fff] p-[1.875rem] rounded-2xl flex flex-col leading-8 shadow-[2px_4px_12px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-[1.02]"
            >
              <span className="font-bold text-[30px]">{product.model}</span>
              <p>{product.description}</p>
              <img
                className="max-h-[295px] my-auto"
                src={product.photo}
                alt="Photo"
              />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
