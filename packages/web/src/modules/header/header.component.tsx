import { useState } from "react";
import { Images } from "../../assets/image";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui-components/button/button.component";
// import { useAuthorization } from "../../context/authorization.context";

export function Header() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------

  const navigate = useNavigate();
  // const { user, logout } = useAuthorization();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ---------------------------------------------------------------------------
  // functions
  // ---------------------------------------------------------------------------s
  function toggleMenu() {
    setIsMenuOpen((prevState) => !prevState);
  }

  // ---------------------------------------------------------------------------
  return (
    <header className="flex justify-between items-center px-[30px] py-[13px] sticky top-0 z-50 bg-[#fff]">
      <div onClick={toggleMenu} className="lg:hidden">
        <i className="fa-regular fa-bars"></i>
      </div>

      <img className="w-[40px] h-[40px]" src={Images.logo} alt="Logo" />

      <ul className={`gap-[25px] text-[20px] font-bold lg:flex hidden`}>
        <li onClick={() => navigate("/products")}>Shop</li>
        <li>Support</li>
      </ul>

      {/* --------------------------------------------------------------------------- */}
      {/* MNEU OPEN */}
      {/* --------------------------------------------------------------------------- */}
      {isMenuOpen && (
        <div className="absolute top-[60px] left-0 right-0 bg-white z-40 shadow-lg">
          <ul className="flex flex-col gap-5 text-[20px] font-bold p-5">
            <li onClick={() => navigate("/products")}>Shop</li>
            <li>Support</li>
          </ul>
        </div>
      )}

      {/* --------------------------------------------------------------------------- */}
      {/* CHECK WHEaTHER USER EXIST OR NOT */}
      {/* --------------------------------------------------------------------------- */}
      {/* {user ? ( */}
        {/* <div className="relative inline-block group">
          <img
            className="w-[45px] h-[45px] rounded-full cursor-pointer"
            src={Images.userProfile}
            alt="Profile"
          />

          <div className="absolute right-0 w-50 hidden mt-1 bg-white border rounded-lg shadow-lg group-hover:block cursor-pointer">
            <span className="flex items-center gap-2 w-full px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-lg">
              <i className="fa-light fa-user"></i>
              Change password
            </span>
            <span
              className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-lg"
              // onClick={logout}
            >
              <i className="fa-light fa-arrow-right-from-bracket"></i> Log out
            </span>
          </div>
        </div> */}
      {/* ) : ( */}
        <Button
          title="Sign In"
          mode="simple"
          onClick={() => navigate("/sign-in")}
        />
      {/* )} */}
    </header>
  );
}
