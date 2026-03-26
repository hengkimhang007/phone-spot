import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavbarDropdown from "../navigation/NavbarDropdown";

export default function Menu() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const handleClickOutside = () => setOpen(false);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
        className="text-xl p-2"
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute mt-6 right-1 w-72 bg-white shadow-lg rounded
        transform transition-all duration-300 ease-out
        ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}
      >
        <NavbarDropdown closeMenu={closeMenu} />
      </div>
    </div>
  );
}
