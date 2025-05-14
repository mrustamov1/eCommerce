import { Images } from "../../assets/image";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../ui-components/Input/input.component";
import { Button } from "../../ui-components/button/button.component";
import { UserLoginSchema, UserLoginType } from "../../types/auth.type";
import { UserType } from "../../types/user.type";

export function SignIn() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const navigate = useNavigate();

  // ---------------------------------------------------------------------------
  // functions
  // ---------------------------------------------------------------------------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginType>({
    resolver: zodResolver(UserLoginSchema),
  });

  const onSubmit: SubmitHandler<UserLoginType> = async (data) => {
    try {
      const response = await fetch("http://localhost:9090/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });

      if (!response.ok) {
        console.log("Something went wrong in login");
        return false;
      }
      const res: UserType = await response.json();

      console.log(res);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // ---------------------------------------------------------------------------
  return (
    <section className="flex justify-between h-[100vh]">
      <div className="flex items-center flex-col justify-center w-[100%]">
        <div className="max-w-[550px] w-full shadow-[0px_19px_40px_0px_#0000000D] p-[61px] rounded-2xl my-10">
          <img
            className="w-[32px] h-[32px] mb-[40px]"
            src={Images.logo}
            alt="Logo"
          />
          <span className="pb-[10px] text-[16px]">Welcome back !!!</span>
          <h1 className="pb-[30px] text-[56px] font-semibold">Sign In</h1>
          <form
            className="flex flex-col gap-7"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              {...register("email")}
              label="Email"
              type="email"
              placeholder="Email Address"
              error={errors.email?.message}
            />
            <Input
              {...register("password")}
              label="Password"
              type="password"
              placeholder="Password"
              error={errors.password?.message}
            />
            <div className="flex flex-col justify-center mt-8 gap-5 text-center">
              <Button type="submit" title="SIGN IN" mode="login" />
              <p>
                I don't have an account ?
                <a
                  className="text-[#F47458] cursor-pointer hover:underline"
                  onClick={() => navigate("/sign-up")}
                >
                  {" "}
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
