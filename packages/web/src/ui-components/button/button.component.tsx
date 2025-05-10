import clsx from "clsx";
import { PropsWithChildren } from "react";
import { memoComponent } from "../../memo-component/memo-component.component";

export const Button = memoComponent(
  "Button",
  function ({
    children,
    title,
    mode = "primary",
    className,
    ...otherProps
  }: PropsWithChildren<
    {
      title?: string;
      className?: string;
      mode?: "primary" | "simple" | "light" | "dark" | "dark-rounded" | "login";
    } & React.ButtonHTMLAttributes<HTMLButtonElement>
  >) {
    const baseClass =
      "relative overflow-hidden group px-[25px] py-[8px] tracking-tight font-semibold rounded-3xl cursor-pointer";

    const modeClasses = {
      primary:
        "text-[#161616] bg-[#fff] border-2 border-transparent hover:border-2 hover:border-[#fff]",
      simple: "text-[#161616] border-2 border-[#161616]",
      light: "text-[#fff]  border-2 border-[#fff]",
      dark: "text-[#fff] bg-[#212121]",
      "dark-rounded": "text-[#161616]  border-2 border-[#161616]",
      login: "text-[#fff] bg-[#F47458]",
    };

    return (
      <button
        type="button"
        {...otherProps}
        className={clsx(baseClass, modeClasses[mode], className)}
      >
        <span className="relative z-10 transition-colors duration-300 group-hover:text-white ">
          {children} {title}
        </span>
        <span className="absolute bottom-0 left-0 w-full h-0 bg-[#e31837] transition-all duration-300 ease-in-out group-hover:h-full"></span>
      </button>
    );
  }
);
