import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartAnim } from "../../context/CartAnimContext";

export default function FlyingDot() {
  const { flyItems } = useCartAnim();
  return (
    <AnimatePresence>
      {flyItems.map(({ id, fromRect }) => (
        <Dot key={id} fromRect={fromRect} />
      ))}
    </AnimatePresence>
  );
}

function Dot({ fromRect }) {
  const [target, setTarget] = useState(null);

  useEffect(() => {
    const el = document.getElementById("cart-icon");
    if (el) {
      const r = el.getBoundingClientRect();
      setTarget({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
    }
  }, []);

  const startX = fromRect.left + fromRect.width / 2;
  const startY = fromRect.top + fromRect.height / 2;

  if (!target) return null;

  return (
    <motion.div
      initial={{ x: startX - 10, y: startY - 10, scale: 1, opacity: 1 }}
      animate={{ x: target.x - 10, y: target.y - 10, scale: 0.2, opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 30,
        height: 30,
        borderRadius: "50%",
        background: "#f7b500",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
}

