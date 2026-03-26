import { motion } from "framer-motion";
import Cart from "./Cart";

export default function ProductGrid({ title, products }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center mb-10"
      >
        <h1 className="text-3xl font-bold text-gray-800">
          {title} <span className="text-yellow-400">Brands</span>
        </h1>
        <div className="w-16 h-1 bg-yellow-400 rounded-full mt-3" />
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:flex md:flex-wrap justify-center gap-5">
        {products.map((item, i) => (
          <motion.div
            key={item.id}
            className="col-span-1"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.03 }}
          >
            <Cart id={item.id} img={item.img} name={item.name} price={item.price} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}



