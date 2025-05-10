import { useNavigate } from "react-router-dom";
import { Images } from "../../assets/image";
import { Button } from "../../ui-components/button/button.component";

export function Header() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------

  const navigate = useNavigate();

  // ---------------------------------------------------------------------------
  return (
    <>
      <header className="flex justify-between items-center px-[30px] py-[13px] sticky top-0 z-1000 bg-[#fff] ">
        <img className="w-[40px] h-[40px]" src={Images.logo} alt="Logo" />
        <ul className="flex gap-25 text-[20px] font-bold">
          <li onClick={() => navigate("/products")}>Shop</li>
          <li>Support</li>
        </ul>

        <Button
          title="Sign In"
          mode="simple"
          onClick={() => navigate("/sign-in")}
        />
      </header>
    </>
  );
}
