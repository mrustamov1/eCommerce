import { Images } from "../../assets/image";
import { Button } from "../../ui-components/button/button.component";
import { Input } from "../../ui-components/Input/input.component";

export function SignUp() {
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

          <div className="flex flex-col gap-7">
            <Input label="Name" type="text" placeholder="Name" />
            <Input label="Surname" type="text" placeholder="Surname" />
            <Input
              label="Email Address"
              type="email"
              placeholder="Email Address"
            />
            <Input label="Password" type="password" placeholder="Password" />
            <Input
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div className="flex flex-col justify-center mt-8 gap-5 text-center">
            {/* <button className="bg-[#F47458] rounded-[23px] px-[22px] py-[11px] text-[#fff] ">
              SIGN UP
            </button> */}
            <Button title="SIGN UP" mode="login"/>
            <p>
              I don’t have an account ?
              <a className="text-[#F47458]" href=" Sign up">
                {" "}
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
      <img className="" src={Images.group} alt="" />
    </section>
  );
}
