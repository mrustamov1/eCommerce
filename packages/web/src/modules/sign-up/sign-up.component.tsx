import { Images } from "../../assets/image";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../ui-components/Input/input.component";
import { Button } from "../../ui-components/button/button.component";
import { useAuthorization } from "../../context/authorization.context";
import { UserRegisterSchema, UserRegisterType } from "../../types/auth.type";

export function SignUp() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------
  const navigate = useNavigate();
  const { userId } = useAuthorization();

  // ---------------------------------------------------------------------------
  // functions
  // ---------------------------------------------------------------------------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterType>({
    resolver: zodResolver(UserRegisterSchema),
  });

  console.log("Form render, errors:", errors);
  const onSubmit: SubmitHandler<UserRegisterType> = async (data) => {
    console.log("Submitting data");
    
    const userData = {
      ...data,
      role: "user"
    }

    try {
      const response = await fetch("http://localhost:9090/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        console.log("Invalid email or password");
        return false;
      }

      const result = await response.json();
      userId(result.id);

      console.log("Registered successfully:", result);
      navigate("/");
    } catch (error) {
      console.log("Error during registration:", error);
    }
  };

  // ---------------------------------------------------------------------------
  return (
    <div className="bg-[#fff]">
      <section className="flex justify-between">
        <div className="flex items-center flex-col justify-center w-[100%]">
          <div className="max-w-[550px] w-full shadow-[0px_19px_40px_0px_#0000000D] px-[50px] py-[30px] rounded-2xl my-5">
            <img
              className="w-[32px] h-[32px] mb-[20px]"
              src={Images.logo}
              alt="Logo"
            />
            <span className="pb-[10px] text-[16px]">
              Sign up to explore all features
            </span>
            <h1 className="pb-[30px] text-[56px] font-semibold">Sign Up</h1>

            <form
              className="flex flex-col gap-7"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                {...register("name")}
                label="Name"
                type="text"
                placeholder="Name"
                error={errors.name?.message}
              />
              <Input
                {...register("surname")}
                label="Surname"
                type="text"
                placeholder="Surname"
                error={errors.surname?.message}
              />
              <Input
                {...register("email")}
                label="Email Address"
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
              <Input
                {...register("confirmPassword")}
                label="Confirm Password"
                type="password"
                placeholder="Confirm Password"
                error={errors.confirmPassword?.message}
              />
              <div className="flex flex-col justify-center mt-8 gap-5 text-center">
                <Button type="submit" title="SIGN UP" mode="login" />
                <p>
                  I already have an account ?
                  <a
                    className="text-[#F47458] cursor-pointer hover:underline"
                    onClick={() => navigate("/sign-in")}
                  >
                    {" "}
                    Sign In
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
