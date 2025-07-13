import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { UserContext } from "../utils/context-api/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  const [buttonName, setButtonName] = useState("Login");

  const { login, userName } = useContext(UserContext);

  const handleLoginLogout = () => {
    if (buttonName === "Login") {
      login("Anil Kumar");
      setButtonName("Logout");
    }
    else if (buttonName == "Logout" && userName.length == 0)
    {
      setButtonName("Login");
    }
    else {
      login("");
      setButtonName("Login");
    }
  }

  const onlineStatus = useOnlineStatus();

  const totalQuantity = useSelector((store) => store.cart.items.reduce((sum, item) => sum + (item.qty || 1), 0))

  return (
    
    <div className="flex justify-between bg-pink-100 shadow-lg m-2 sm:bg-amber-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-28" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="mx-2.5">
            Online Status: {onlineStatus ? "✅" : "🛑"}
          </li>
          <li className="px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About us</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact us</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to={"/cart"}>Cart - ({ totalQuantity} Items)</Link></li>
          <button
            className="login"
            onClick={ handleLoginLogout}
          >
            {buttonName}
          </button>
          {userName && <li className="px-4">{userName}</li>}
        </ul>
      </div>
    </div>
  );
};

export default Header;
