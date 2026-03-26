import { Link } from "react-router-dom";
import { FaFacebookF, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const links = [
  { label: "iPhone", to: "/Iphone" },
  { label: "Samsung", to: "/Samsung" },
  { label: "Oppo", to: "/Oppo" },
  { label: "Asus", to: "/Asus" },
  { label: "Huawei", to: "/Huawei" },
  { label: "Vivo", to: "/Vivo" },
];

const socials = [
  { icon: <FaFacebookF />, href: "#" },
  { icon: <FaTelegramPlane />, href: "#" },
  { icon: <FaInstagram />, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-12 pb-6 px-6 mt-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-10"
      >
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Phone<span className="text-yellow-400">Shop</span>
          </h2>
          <p className="text-sm leading-relaxed">
            Your trusted store for the latest smartphones and tablets at the best prices.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Products</h3>
          <ul className="flex flex-col gap-2 text-sm">
            {links.map(({ label, to }, i) => (
              <motion.li
                key={to}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
              >
                <Link to={to} className="hover:text-yellow-400 transition">{label}</Link>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p className="text-sm mb-1">📍 Phnom Penh, Cambodia</p>
          <p className="text-sm mb-1">📞 +855 xx xxx xxx</p>
          <p className="text-sm mb-4">✉️ support@phoneshop.com</p>
          <div className="flex gap-3">
            {socials.map(({ icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-yellow-400 hover:text-gray-900 text-white flex items-center justify-center transition"
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="border-t border-gray-700 pt-5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} PhoneShop. All rights reserved.
      </div>
    </footer>
  );
}



