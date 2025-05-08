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
      mode?: "primary" | "simple" | "dark";
    } & React.ButtonHTMLAttributes<HTMLButtonElement>
  >) {
    return (
      <button
        type="button"
        {...otherProps}
        className={
          (mode === "primary" &&
            "relative overflow-hidden group px-[25px] py-[8px] tracking-tight font-semibold text-[#161616] rounded-3xl bg-[#fff] border-2 border-transparent hover:border-2 hover:border-[#fff] cursor-pointer") ||
          (mode === "simple" && "bg-[blue] w-[100px] h-[100px]")
        }
        // className={classNames(otherProps.className, {
        //   [styles.primary]: mode === "primary",
        //   [styles.simple]: mode === "simple",
        //   [styles.dark]: mode === "dark",
        // })}
      >
        <span className="relative z-10 transition-colors duration-300 group-hover:text-white ">
          {children} {title}
        </span>
        <span className="absolute bottom-0 left-0 w-full h-0 bg-[#EB4443] transition-all duration-300 ease-in-out group-hover:h-full"></span>
      </button>
    );
  }
);
