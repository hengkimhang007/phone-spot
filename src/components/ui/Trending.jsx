import { motion } from "framer-motion"
import Cart from './Cart'
import { trendings } from '../../data_new/data_trending/trendingData'

export default function Trending() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">

      <div className="flex flex-col items-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-bold text-gray-800"
        >
          Trending <span className="text-yellow-400">Brands</span>
        </motion.h2>
        <div className="w-16 h-1 bg-yellow-400 rounded-full mt-3" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:flex md:flex-wrap justify-center gap-5">
        {trendings.map((item, i) => (
          <Cart key={i} id={item.id} img={item.img} name={item.name} price={item.price} />
        ))}
      </div>

    </section>
  )
}


