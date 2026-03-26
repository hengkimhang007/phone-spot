import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export const parsePrice = (price) => parseFloat(price.replace(/,/g, "").replace("$", "")) || 0;

export default function OrderSummary({ actionLabel, onAction }) {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + parsePrice(item.price) * (item.qty || 1), 0);

  return (
    <div className="lg:w-72 bg-white rounded-2xl shadow-sm p-6 h-fit sticky top-24">
      <h2 className="text-lg font-bold text-gray-800 mb-4 border-b pb-3">Order Summary</h2>

      {/* item list (shown in checkout) */}
      {cart.map((item, i) => (
        <div key={i} className="flex items-center gap-3 mb-3">
          <img src={item.img[0]} alt={item.name} className="w-10 h-10 object-contain rounded-lg bg-gray-50" />
          <div className="flex-1">
            <p className="text-xs font-semibold text-gray-700 leading-tight">{item.name}</p>
            <p className="text-orange-500 text-xs font-bold">{item.price} × {item.qty || 1}</p>
          </div>
        </div>
      ))}

      <div className="flex justify-between text-gray-500 text-sm mt-3">
        <span>Items ({cart.length})</span>
        <span>${total.toLocaleString()}</span>
      </div>
      <div className="flex justify-between text-gray-500 text-sm mt-1 mb-3">
        <span>Shipping</span>
        <span className="text-green-500 font-medium">Free</span>
      </div>
      <div className="flex justify-between font-bold text-gray-800 text-lg border-t pt-3">
        <span>Total</span>
        <span className="text-orange-500">${total.toLocaleString()}</span>
      </div>

      {actionLabel && (
        <button
          onClick={onAction ?? (() => navigate("/checkout"))}
          className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold transition shadow-md"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}


