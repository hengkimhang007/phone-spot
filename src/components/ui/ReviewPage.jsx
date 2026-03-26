import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState, useRef } from "react";
import { allProducts } from "../../data_new/data_review/reviewData";
import { CartContext } from "../../context/CartContext";
import { useCartAnim } from "../../context/CartAnimContext";
import { motion } from "framer-motion";
import { FaArrowLeft, FaShoppingCart } from "react-icons/fa";

export default function ReviewPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { fly } = useCartAnim();
  const btnRef = useRef(null);

  const product = allProducts.find((item) => item.id === id);
  const [mainImg, setMainImg] = useState(product?.img[0]);

  if (!product) return <p className="text-center py-20 text-gray-400">Product not found</p>;

  const handleAdd = () => {
    addToCart(product);
    if (btnRef.current) fly(btnRef.current.getBoundingClientRect());
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-5xl mx-auto px-4 py-10"
    >
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-8 text-gray-500 hover:text-orange-500 transition text-sm font-medium"
      >
        <FaArrowLeft size={12} /> Back
      </button>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Images */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <motion.img
            key={mainImg}
            src={mainImg}
            alt={product.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full h-72 object-contain rounded-xl"
          />
          {product.img.length > 1 && (
            <div className="flex justify-center gap-3 mt-5">
              {product.img.map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  onClick={() => setMainImg(img)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-16 h-16 object-contain rounded-xl cursor-pointer border-2 transition ${mainImg === img ? "border-orange-400" : "border-gray-100"}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-2xl font-bold text-orange-500">{product.price}</p>

          <motion.button
            ref={btnRef}
            onClick={handleAdd}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded-xl font-semibold transition shadow-md w-fit"
          >
            <FaShoppingCart /> Add to Cart
          </motion.button>
        </div>

      </div>
    </motion.div>
  );
}


