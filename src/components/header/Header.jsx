import { FaCartShopping } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Navber from "../navigation/Navbar";
import Menu from "../common/Menu";
import SearchProduct from "../common/Search";

export default function Header() {
  const { cart, totalCount } = useContext(CartContext);
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between md:px-8 px-5 py-5">

        <div>
          <Link to={"/"}>
          <h1 className="md:text-4xl text-2xl font-bold text-blue-500 tracking-widest drop-shadow-md">
            Phone<span className="text-yellow-500">Shop</span>
          </h1>
          </Link>
        </div>
        <nav className="hidden xl:flex items-center justify-center gap-12 text-yellow-500 font-semibold text-lg">
         <Navber className="gap-20 flex"/>
        </nav>
        <div className="flex items-center justify-center md:gap-8 gap-3 text-yellow-500">
          <div>
            <SearchProduct/>
          </div>
          <div className="flex flex-col items-center text-sm cursor-pointer hover:text-yellow-200 transition relative">
            <Link to={"/cart"} id="cart-icon">
              <FaCartShopping md:size={28} size={20}/>
              {totalCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {totalCount}
                </span>
              )}
            </Link>
          </div>
          <div className="flex flex-col items-center text-sm cursor-pointer hover:text-yellow-200 transition">
            <Link to={"/login"}>
              <FaUserLarge md:size={24} size={19}/>
            </Link>
          </div>
          <div className="xl:hidden flex">
            <Menu/>
          </div>
        </div>
      </div>
    </header>
  );
}
