import React from "react";
import { Link } from "react-router-dom";


function NavbarDropdown({ closeMenu }) {
  return (
    <div className="grid  gap- px-4 py-5">
      <div>
        <h1 className="text-lg font-bold">Smartphone</h1>
        <Link onClick={closeMenu} className="p-3 block text-sky-500 hover:text-sky-700 hover:bg-gray-100 rounded" to="/Iphone">iPhone</Link>
        <Link onClick={closeMenu} className="p-3 block text-sky-500 hover:text-sky-700 hover:bg-gray-100 rounded" to="/Samsung">Samsung</Link>
        <Link onClick={closeMenu} className="p-3 block text-sky-500 hover:text-sky-700 hover:bg-gray-100 rounded" to="/Oppo">Oppo</Link>
        <Link onClick={closeMenu} className="p-3 block text-sky-500 hover:text-sky-700 hover:bg-gray-100 rounded" to="/Asus">Asus</Link>
        <Link onClick={closeMenu} className="p-3 block text-sky-500 hover:text-sky-700 hover:bg-gray-100 rounded" to="/Huawei">Huawei</Link>
        <Link onClick={closeMenu} className="p-3 block text-sky-500 hover:text-sky-700 hover:bg-gray-100 rounded" to="/Vivo">Vivo</Link>
      </div>

      <div>
        <h1 className="text-lg font-bold">iPad / Tablet</h1>
        <Link onClick={closeMenu} className="p-3 block text-sky-500 hover:text-sky-700 hover:bg-gray-100 rounded" to="/ipad">iPad</Link>
        <Link onClick={closeMenu} className="p-3 block text-sky-500 hover:text-sky-700 hover:bg-gray-100 rounded" to="/tablet">Galaxy Tab</Link>
      </div>

      <div>
        <h1 className="text-lg font-bold">Laptop</h1>
        <Link onClick={closeMenu} className="p-3 block text-sky-500 hover:text-sky-700 hover:bg-gray-100 rounded" to="/macbook">MacBook</Link>
        <Link onClick={closeMenu} className="p-3 block text-sky-500 hover:text-sky-700 hover:bg-gray-100 rounded" to="/asus">Asus</Link>
      </div>

    </div>
  );
}

export default NavbarDropdown;

