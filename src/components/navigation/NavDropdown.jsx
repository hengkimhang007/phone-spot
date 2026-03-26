import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function NavDropdown({
  label,
  items = [],
  planItems = [],
  promoItems = [],
  content,
  isActive = false,
  dropdownWidth = "w-[520px] md:w-[560px]",
  dropdownClassName = "",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  const toggleOpen = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const hasCustomContent = !!content;
  const hasTwoColumns =
    !hasCustomContent && (planItems.length > 0 || promoItems.length > 0);

  return (
    <div
      className="relative group"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={toggleOpen}
        className={`flex items-center gap-1 px-4 py-3 text-base font-medium transition-colors duration-200
          ${
            isActive
              ? "text-green-700 border-b-4 border-yellow-500"
              : "text-gray-800 hover:text-yellow-500"
          }`}
      >
        {label}
        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute top-[69px] left-1/2 -translate-x-1/2 z-50
          bg-white shadow-2xl rounded-xl border border-gray-200
          transition-all duration-200 origin-top
          ${
            isOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-4 invisible pointer-events-none"
          }
          ${dropdownWidth}
          max-h-[85vh] overflow-y-auto
          ${dropdownClassName}`}
      >
        {hasCustomContent ? (
          <div className="p-6">{content}</div>
        ) : hasTwoColumns ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            <div>
              <div className="space-y-3">
                {planItems.map((item, i) => (
                  <Link
                    key={i}
                    to={item.href || "#"}
                    className="block py-2.5 hover:text-green-700 hover:bg-green-50 rounded px-3 transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-green-700 mb-4 border-b border-green-200 pb-2">
                Promotions
              </h3>
              <div className="space-y-3">
                {promoItems.map((item, i) => (
                  <Link
                    key={i}
                    to={item.href || "#"}
                    className="block py-2.5 hover:text-green-700 hover:bg-green-50 rounded px-3 transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="py-4">
            {items.map((item, i) => (
              <Link
                key={i}
                to={item.href || "#"}
                className="block px-6 py-3.5 hover:bg-green-50 hover:text-green-700 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


