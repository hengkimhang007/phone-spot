import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function OrderSuccess({ form, total }) {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className="bg-white rounded-2xl shadow-md p-10 max-w-md w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.2 }}
        >
          <FaCheckCircle size={64} className="text-green-500 mx-auto mb-4" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-2xl font-bold text-gray-800 mb-2"
        >
          Order Placed!
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          <p className="text-gray-500 text-sm mb-1">
            Thank you, <span className="font-semibold text-gray-700">{form.fullName}</span>
          </p>
          <p className="text-gray-500 text-sm mb-6">
            Deliver to: {form.address}, {form.district}, {form.province}
          </p>
          <p className="text-orange-500 font-bold text-lg mb-6">${total.toLocaleString()}</p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition"
        >
          Back to Home
        </motion.button>
      </motion.div>
    </div>
  );
}





