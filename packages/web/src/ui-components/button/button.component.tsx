import { PropsWithChildren } from "react";
import { memoComponent } from "../../memo-component/memo-component.component";

export const Button = memoComponent(
  "Button",
  function ({
    children,
    title,
    mode = "primary",
    ...otherProps
  }: PropsWithChildren<
    {
      title?: string;
      mode?: "primary" | "simple" | "light" | "dark" | "dark-rounded" | "login";
    } & React.ButtonHTMLAttributes<HTMLButtonElement>
  >) {
    return (
      <button
        type="button"
        {...otherProps}
        className={
          (mode === "primary" &&
            "relative overflow-hidden group px-[25px] py-[8px] tracking-tight font-semibold rounded-3xl cursor-pointer text-[#161616] bg-[#fff] border-2 border-transparent hover:border-2 hover:border-[#fff]") ||
          (mode === "simple" &&
            "relative overflow-hidden group px-[25px] py-[8px] tracking-tight font-semibold rounded-3xl cursor-pointer text-[#161616] border-2 border-[#161616]") ||
          (mode === "light" &&
            "relative overflow-hidden group px-[25px] py-[8px] tracking-tight font-semibold rounded-3xl cursor-pointer text-[#fff]  border-2 border-[#fff]") ||
          (mode === "dark" &&
            "relative overflow-hidden group px-[25px] py-[8px] tracking-tight font-semibold rounded-3xl cursor-pointer text-[#fff] bg-[#212121]") ||
          (mode === "dark-rounded" &&
            "relative overflow-hidden group px-[25px] py-[8px] tracking-tight font-semibold rounded-3xl cursor-pointer text-[#161616]  border-2 border-[#161616]") ||
          (mode === "login" &&
            "relative overflow-hidden group px-[25px] py-[8px] tracking-tight font-semibold rounded-3xl  cursor-pointer text-[#fff] bg-[#F47458]")
        }
      >
        <span className="relative z-10 transition-colors duration-300 group-hover:text-white ">
          {children} {title}
        </span>
        <span className="absolute bottom-0 left-0 w-full h-0 bg-[#EB4443] transition-all duration-300 ease-in-out group-hover:h-full"></span>
      </button>
    );
  }
);
