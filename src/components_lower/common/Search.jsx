import { useState, useRef, useEffect } from "react";
import { allProducts } from "../../Data/data_review/reviewData";
import { Link } from "react-router-dom";
import { FaSearch, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function SearchProduct() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  const results = search
    ? allProducts.filter((p) => p.name.toLowerCase().includes(search.toLowerCase())).slice(0, 6)
    : [];

  // close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  return (
    <div ref={containerRef} className="relative">

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => { setOpen(!open); setSearch(""); }}
        className="text-xl hover:text-yellow-200 transition"
      >
        {open ? <FaTimes /> : <FaSearch />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed md:absolute left-2 right-2 md:left-auto md:right-0 top-[72px] md:top-[57px] md:w-[320px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
          >
            {/* Input */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
              <FaSearch className="text-gray-400 shrink-0" size={14} />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search phones..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 text-sm text-gray-800 outline-none placeholder-gray-400"
              />
              {search && (
                <button onClick={() => setSearch("")} className="text-gray-300 hover:text-gray-500 transition">
                  <FaTimes size={12} />
                </button>
              )}
            </div>

            {/* Results */}
            <div className="max-h-72 overflow-y-auto">
              {search && results.length === 0 && (
                <div className="py-8 text-center text-gray-400 text-sm">No results found</div>
              )}

              {!search && (
                <div className="py-6 text-center text-gray-400 text-sm">Type to search...</div>
              )}

              <AnimatePresence>
                {results.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      to={`/review/${product.id}`}
                      onClick={() => { setOpen(false); setSearch(""); }}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 overflow-hidden">
                        <img src={product.img[0]} alt={product.name} className="w-10 h-10 object-contain" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-800 truncate group-hover:text-yellow-500 transition">
                          {product.name}
                        </p>
                        <p className="text-orange-500 text-xs font-bold mt-0.5">{product.price}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
