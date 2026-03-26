import { useContext, useRef } from 'react'
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { CartContext } from '../../context/CartContext'
import { useCartAnim } from '../../context/CartAnimContext'

export default function Cart({ id, img, name, price }) {
  const { addToCart } = useContext(CartContext);
  const { fly } = useCartAnim();
  const btnRef = useRef(null);

  const handleAdd = () => {
    addToCart({ id, img: Array.isArray(img) ? img : [img], name, price });
    if (btnRef.current) fly(btnRef.current.getBoundingClientRect());
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-[180px] bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
    >
      <Link to={`/review/${id}`} className="flex justify-center items-center bg-gray-50 p-4 h-[160px]">
        <img
          className="h-full object-contain transition duration-300 hover:scale-105"
          src={Array.isArray(img) ? img[0] : img}
          alt={name}
        />
      </Link>

      <div className="flex flex-col gap-2 p-3 flex-1">
        <p className="font-semibold text-sm text-gray-800 text-center leading-tight line-clamp-2">{name}</p>
        <p className="text-center text-yellow-500 font-bold text-sm">{price}</p>
        <button
          ref={btnRef}
          onClick={handleAdd}
          className="mt-auto w-full py-2 bg-yellow-400 hover:bg-yellow-500 text-white text-sm font-semibold rounded-xl transition"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  )
}





