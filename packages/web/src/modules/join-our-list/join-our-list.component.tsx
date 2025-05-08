export function JoinList() {
  return (
    <section className="bg-[#161616] text-[#fff] flex flex-col justify-center items-center px-[30px] py-[3.5rem] mt-[30px]">
        <i className="fa-solid fa-envelope text-[32px] pb-6"></i>
        <h1 className="text-[32px] leading-[1.18rem] font-bold pb-20">
          Join Our List
        </h1>
        <p className="text-[20px] mb-[2rem] leading-[1.2rem]">
          Don’t miss a beat. Stay up to date on the latest products, deals and
          more.
        </p>
        <input
          className="min-w-[300px] text-[1rem] border-2 border-[#fff] rounded-[22px] px-[1rem] py-[12px]"
          type="email"
          placeholder="Email Address"
        />
    </section>
  );
}
