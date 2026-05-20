"use client";

import { motion } from "framer-motion";

export default function MotionCard({ children, className, delay = 0, as = "section", ...props }) {
  const Component = motion[as] || motion.section;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 40 }} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }} 
      transition={{ 
        duration: 0.6, 
        delay: delay, 
        ease: [0.25, 0.25, 0, 1] 
      }}
      {...props}
    >
      {children}
    </Component>
  );
}