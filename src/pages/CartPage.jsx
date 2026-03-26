import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import OrderSummary from "../components/forms/OrderSummary";
import CartItem from "../components/ui/CartItem";
import { FaArrowLeft, FaShoppingCart } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function CartPage() {
  const { cart, totalCount } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">

        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}
          className="flex items-center gap-4 mb-8">
          <button onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-white border border-gray-200 text-gray-600 hover:text-orange-500 hover:border-orange-400 transition px-4 py-2 rounded-full shadow-sm text-sm font-medium">
            <FaArrowLeft size={12} /> Back
          </button>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <FaShoppingCart className="text-orange-500" /> Your Cart
            <span className="text-sm font-normal text-gray-400">({totalCount} items)</span>
          </h1>
        </motion.div>

        {cart.length === 0 ? (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-sm py-20 text-gray-400">
            <FaShoppingCart size={60} className="mb-4 text-gray-200" />
            <p className="text-lg font-medium">Your cart is empty</p>
            <p className="text-sm mt-1">Add some products to get started</p>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => navigate("/")}
              className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition">
              Shop Now
            </motion.button>
          </motion.div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-4">
              <AnimatePresence>
                {cart.map((item, i) => <CartItem key={item.id} item={item} index={i} />)}
              </AnimatePresence>
            </div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
              <OrderSummary actionLabel="Buy" />
            </motion.div>
          </div>
        )}

      </div>
    </motion.div>
  );
}




