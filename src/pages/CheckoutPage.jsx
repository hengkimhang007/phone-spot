import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { parsePrice } from "../components/forms/OrderSummary";
import CheckoutForm from "../components/forms/CheckoutForm";
import OrderSummary from "../components/forms/OrderSummary";
import { sendTelegram } from "../utils/telegram";
import { FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";

const initForm = { fullName: "", phone: "", province: "", district: "", address: "", note: "" };

export default function CheckoutPage() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [form, setForm] = useState(initForm);

  const total = cart.reduce((sum, item) => sum + parsePrice(item.price) * (item.qty || 1), 0);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    console.log("handleSubmit called", { form, total });
    sendTelegram(cart, form, total).catch(() => {});
    clearCart();
    navigate("/order-success", { state: { form: { ...form }, total } });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-white border border-gray-200 text-gray-600 hover:text-orange-500 transition px-4 py-2 rounded-full shadow-sm text-sm font-medium"
          >
            <FaArrowLeft size={12} /> Back
          </button>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <FaMapMarkerAlt className="text-orange-500" /> Delivery Information
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <CheckoutForm form={form} onChange={handleChange} onSubmit={handleSubmit} />
          <OrderSummary />
        </div>

      </div>
    </div>
  );
}


