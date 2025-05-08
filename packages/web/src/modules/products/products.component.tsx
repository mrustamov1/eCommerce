import { Images } from "../../assets/image";

export function Products() {
  const products = [
    {
      id: 1,
      model: "Register Your Beats",
      description:
        "Get the most out of your Beats with latest software updates and more.",
      photo: `${Images.airpod}`,
    },
    {
      id: 2,
      model: "Collaborations",
      description: "Explore one-of-a-kind, limited-edition product collabs.",
      photo: `${Images.airpod}`,
    },
    {
      id: 3,
      model: "Find Your Beats",
      description:
        "If your Beats are missing, track them down with the ‘Find My’ app.",
      photo: `${Images.airpod}`,
    },
    {
      id: 4,
      model: "Beats App for Android",
      description: "Download the Beats app to unlock additional features.",
      photo: `${Images.airpod}`,
    },
    {
      id: 5,
      model: "Free Apple Music",
      description: "Enjoy 3 months of Apple Music free with select Beats.",
      photo: `${Images.airpod}`,
    },
    {
      id: 6,
      model: "Free Apple Music",
      description: "Enjoy 3 months of Apple Music free with select Beats.",
      photo: `${Images.airpod}`,
    },
    {
      id: 7,
      model: "Free Apple Music",
      description: "Enjoy 3 months of Apple Music free with select Beats.",
      photo: `${Images.airpod}`,
    },
    {
      id: 8,
      model: "Free Apple Music",
      description: "Enjoy 3 months of Apple Music free with select Beats.",
      photo: `${Images.airpod}`,
    },
    {
      id: 9,
      model: "Free Apple Music",
      description: "Enjoy 3 months of Apple Music free with select Beats.",
      photo: `${Images.airpod}`,
    },
  ];
  return (
    <section className="w-full overflow-auto pt-[60px] px-6">
      <div className="flex gap-5 w-max perspective-[1000px]">
        {products.map((product) => (
          <article
            key={product.id}
            className=" w-[333px] cursor-pointer bg-[#fff] p-[1.875rem] rounded-2xl flex flex-col leading-8 shadow-[2px_4px_12px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-[1.02] hover:rotate-x-1 hover:rotate-y-1"
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
  );
}
