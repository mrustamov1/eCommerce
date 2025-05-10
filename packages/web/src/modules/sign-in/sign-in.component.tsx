import { useNavigate } from "react-router-dom";
import { Images } from "../../assets/image";
import { Input } from "../../ui-components/Input/input.component";
import { Button } from "../../ui-components/button/button.component";

export function SignIn() {
  const navigate = useNavigate();
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
          <span className="pb-[10px] text-[16px]">Welcome back !!!</span>
          <h1 className="pb-[30px] text-[56px] font-semibold">Sign In</h1>
          <div className="flex flex-col gap-7">
            <Input label="Email" type="email" placeholder="Email Address" />
            <Input label="Password" type="password" placeholder="Password" />
          </div>
          <div className="flex flex-col justify-center mt-8 gap-5 text-center">
            <Button title="SIGN IN" mode="login" />
            <p>
              I already have an account ?
              <a
                className="text-[#F47458]"
                onClick={() => navigate("/sign-up")}
              >
                {" "}
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------------------------- */}
      {/* SIGN IN BACKGROUND IMAGE */}
      {/* --------------------------------------------------------------------------- */}
      <img src={Images.group} alt="Group" />
    </section>
  );
}
