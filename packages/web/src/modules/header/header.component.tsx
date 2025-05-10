import { useNavigate } from "react-router-dom";
import { Images } from "../../assets/image";
import { Button } from "../../ui-components/button/button.component";
import { useAuthorization } from "../../context/authorization.context";

export function Header() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------

  const { user } = useAuthorization();
  const navigate = useNavigate();

  // ---------------------------------------------------------------------------
  return (
    <>
      <header className="flex justify-between items-center px-[30px] py-[13px] sticky top-0 z-2 bg-[#fff]">
        <img className="w-[40px] h-[40px]" src={Images.logo} alt="Logo" />
        <ul className="flex gap-25 text-[20px] font-bold">
          <li>
            <a href="Shop">Shop</a>
          </li>
          <li>
            <a href="Shop">Support</a>
          </li>
        </ul>
        {user ? (
          <Button
            title="Sign In"
            mode="simple"
            onClick={() => navigate("/sign-in")}
          />
        ) : (
          <Button
            title="Sign Up"
            mode="simple"
            onClick={() => navigate("/sign-in")}
          />
        )}
      </header>
      <main
        style={{
          backgroundImage: `url(${Images.banner})`,
          backgroundSize: "cover",
        }}
        className="relative h-[100vh] flex justify-end flex-col"
      >
        <div className="flex-col flex  ps-[60px] pb-[60px]">
          <div className="text-[#fff] flex-col flex items-start leading-[70px] pb-[30px]">
            <span className="text-2xl">NEW</span>
            <span className="text-[80px]">PowerBeats Pro 2</span>
            <span className="text-[32px]">Built for athletes</span>
          </div>
          <div>
            <Button title="SHOP" mode="primary" />
          </div>
        </div>
      </main>
    </>
  );
}
