import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";

export default function CartItem({ item, index }) {
  const { removeFromCart, updateQty } = useContext(CartContext);
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40, height: 0 }}
      transition={{ duration: 0.3, delay: index * 0.07 }}
      className="flex items-center gap-5 bg-white rounded-2xl shadow-sm p-4 hover:shadow-md transition"
    >
      <img src={item.img[0]} alt={item.name} className="w-20 h-20 object-contain rounded-xl bg-gray-50 p-1" />
      <div className="flex-1">
        <p className="font-semibold text-gray-800">{item.name}</p>
        <p className="text-orange-500 font-bold mt-1">{item.price}</p>
        <div className="flex items-center gap-2 mt-2">
          <motion.button whileTap={{ scale: 0.85 }} onClick={() => updateQty(index, (item.qty || 1) - 1)}
            className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition">
            <FaMinus size={10} />
          </motion.button>
          <span className="w-6 text-center text-sm font-bold text-gray-700">{item.qty || 1}</span>
          <motion.button whileTap={{ scale: 0.85 }} onClick={() => updateQty(index, (item.qty || 1) + 1)}
            className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition">
            <FaPlus size={10} />
          </motion.button>
        </div>
      </div>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => removeFromCart(index)}
        className="p-2 rounded-xl text-gray-300 hover:text-red-500 hover:bg-red-50 transition">
        <FaTrash size={15} />
      </motion.button>
    </motion.div>
  );
}





