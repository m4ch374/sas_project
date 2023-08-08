import { motion } from "framer-motion";
import React from "react";

const SwipeTransition: React.FC<{ children: JSX.Element, className?: string }> = ({ children }) => {
  const pageTransition = {
    out: {
      opacity: 0,
      transition: {
        duration: 0.25,
        delay: 0.2
      },
      x: 200
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2
      },
      x: 0
    }
  }

  return (
    <motion.div
      variants={pageTransition}
      initial="out"
      animate="in"
      exit="out"
    >
      { children }
    </motion.div>
  )
}

export default SwipeTransition
