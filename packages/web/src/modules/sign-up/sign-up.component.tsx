import { Images } from "../../assets/image";
import { UserRegisterSchema, UserRegisterType } from "../../types/user.type";
import { Input } from "../../ui-components/Input/input.component";
import { Button } from "../../ui-components/button/button.component";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterType>({
    resolver: zodResolver(UserRegisterSchema),
  });

  async function signUp(props: UserRegisterType) {
    const data = {
      name: props.name.trim(),
      surname: props.surname,
      email: props.email,
      password: props.password,
    };

    try {
      const response = await fetch("http://localhost:9090/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = response.json();
      console.log("Registered successfuly:", result);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  // ---------------------------------------------------------------------------
  return (
    <section className="flex flex-row justify-between">
      <div className="flex items-center flex-col justify-center w-[100%]">
        <div className="shadow-[0px_19px_40px_0px_#0000000D] p-[61px] rounded-2xl my-10">
          <img
            className="w-[32px] h-[32px] mb-[40px]"
            src={Images.logo}
            alt="Logo"
          />
          <span className="pb-[10px] text-[16px]">
            Sign up to explore all features
          </span>
          <h1 className="pb-[30px] text-[56px] font-semibold">Sign Up</h1>

          <form className="flex flex-col gap-7" onClick={handleSubmit(signUp)}>
            <Input
              {...register("name")}
              label="Name"
              type="text"
              placeholder="Name"
              error={errors.name?.message}
            />
            <Input
              {...register("surname")}
              error={errors.surname?.message}
              label="Surname"
              type="text"
              placeholder="Surname"
            />
            <Input
              {...register("email")}
              error={errors.email?.message}
              label="Email Address"
              type="email"
              placeholder="Email Address"
            />
            <Input
              {...register("password")}
              error={errors.password?.message}
              label="Password"
              type="password"
              placeholder="Password"
            />
            <Input
              {...register("confirmPassword")}
              error={errors.confirmPassword?.message}
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
            />
          </form>
          <div className="flex flex-col justify-center mt-8 gap-5 text-center">
            <Button type="submit" title="SIGN UP" mode="login" />
            <p>
              I don’t have an account ?
              <a className="text-[#F47458]" href=" Sign up">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------------------------- */}
      {/* SIGN UP BACKGROUND IMAGE */}
      {/* --------------------------------------------------------------------------- */}
      <img src={Images.group} alt="Groups" />
    </section>
  );
}
