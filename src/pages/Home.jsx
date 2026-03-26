import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Slider from '../components/slider/Slider'
import Trending from '../components/ui/Trending'

const brands = [
  { label: "iPhone",  to: "/Iphone",  logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",   bg: "bg-gray-100", dark: true },
  { label: "Samsung", to: "/Samsung", logo: "https://www.freepnglogos.com/uploads/classic-samsung-logo-png-0.png",        bg: "bg-blue-50",  dark: false },
  { label: "Oppo",    to: "/Oppo",    logo: "https://bbs.oppo.com/upload/image/front/thread/20231206/1840016636528814641/1480225247830474757/1480225247830474757.png",bg: "bg-green-50", dark: false },
  { label: "Asus",    to: "/Asus",    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg",           bg: "bg-red-50",   dark: false },
  { label: "Huawei",  to: "/Huawei",  logo: "https://city-png.b-cdn.net/preview/preview_public/temp/official-huawei-logo-11764582282zvuumf4ptl.webp",         bg: "bg-rose-50",  dark: false },
  { label: "Vivo",    to: "/Vivo",    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Vivo_mobile_logo.png",      bg: "bg-indigo-50",dark: false },
  { label: "iPad",    to: "/ipad",    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",   bg: "bg-sky-50",   dark: true },
];

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Slider */}
      <Slider />

      {/* Brand Categories */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-bold text-gray-800 text-center mb-2"
        >
          Shop by <span className="text-yellow-400">Brand</span>
        </motion.h2>
        <div className="w-16 h-1 bg-yellow-400 rounded-full mx-auto mb-8" />

        <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
          {brands.map(({ label, to, logo, bg, dark }, i) => (
            <motion.div
              key={to}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -4, scale: 1.05 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <Link
                to={to}
                className={`${bg} rounded-2xl flex flex-col items-center justify-center py-4 px-2 gap-2 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200`}
              >
                <img
                  src={logo}
                  alt={label}
                  className={`h-10 w-20 object-contain ${dark ? "invert" : ""}`}
                />
                <span className="text-xs font-semibold text-gray-600">{label}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trending */}
      <Trending />

    </div>
  )
}





