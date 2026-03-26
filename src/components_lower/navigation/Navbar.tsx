import React from "react";
import { Link } from "react-router-dom";
import NavDropdown from "./NavDropdown";

function Navber({ className = "flex" }) {
  return (
    <div className={`${className} items-center`}>
      <Link to="/" className="hover:text-yellow-200 transition">
        Home
      </Link>

      <NavDropdown
        label="Smartphone"
        content={
          <div className="grid grid-cols-2 gap-4">
            <Link className="p-3 hover:bg-gray-100 rounded" to="/Iphone">iPhone</Link>
            <Link className="p-3 hover:bg-gray-100 rounded" to="/Samsung">Samsung</Link>
            <Link className="p-3 hover:bg-gray-100 rounded" to="/Oppo">Oppo</Link>
            <Link className="p-3 hover:bg-gray-100 rounded" to="/Asus">Asus</Link>
            <Link className="p-3 hover:bg-gray-100 rounded" to="/Huawei">Huawei</Link>
            <Link className="p-3 hover:bg-gray-100 rounded" to="/Vivo">Vivo</Link>
          </div>
        }
      />

      <NavDropdown
        label="iPad/Tablet"
        content={
          <div className="grid grid-cols-2 gap-4">
            <Link className="p-3 hover:bg-gray-100 rounded" to="/ipad">iPad</Link>
            <Link className="p-3 hover:bg-gray-100 rounded" to="/tablet">Galaxy Tab</Link>
          </div>
        }
      />

      {/* <NavDropdown
        label="Laptop"
        content={
          <div className="grid grid-cols-2 gap-4">
            <Link className="p-3 hover:bg-gray-100 rounded" to="/macbook">MacBook</Link>
            <Link className="p-3 hover:bg-gray-100 rounded" to="/asus">Asus</Link>
          </div>
        }
      /> */}
    </div>
  );
}

export default Navber;