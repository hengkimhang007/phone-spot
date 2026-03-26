"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "https://i.cdn.newsbytesapp.com/images/l47320230625121352.png",
  "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/a6-series/b4/topbanner/a6x/1536-800-6500-blue-taipurple-pad-v1.jpg",
  "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/a6-series/b4/topbanner/a6x/1536-800-6500-blue-taipurple-pad-v1.jpg",
  "https://dlcdnwebimgs.asus.com/gain/912D1429-ED91-4694-96C3-29FAEDFF8C2A",
  "https://cdn.mos.cms.futurecdn.net/Py2DiNxKJ8Vt8kxJ4inRG3.jpg",
  "/images/4.jpg"
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(slide);
  }, []);

  return (
    <div className="relative md:w-full md:h-[87vh] h-[65vh] overflow-hidden bg-slate-600">
   
      <AnimatePresence>
        <motion.img
          key={images[index]}
          src={images[index]}
          className="absolute md:w-full md:h-full h-[65vh] object-fill"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, i) => (
          <motion.div
            key={i}
            onClick={() => setIndex(i)}
            className="w-6 h-1 cursor-pointer rounded-sm"
            animate={{
              scale: index === i ? 1.2 : 1,
              backgroundColor: index === i ? "#ffffff" : "rgba(255,255,255,0.4)",
              boxShadow: index === i ? "0 0 8px rgba(255,255,255,0.6)" : "none",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        ))}
      </div>
    </div>
  );
}