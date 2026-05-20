"use client";

import { motion } from "framer-motion";

export default function AnimatedLoading() {
  // Variantes pour gérer l'animation en cascade des blobs
  const containerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2, // Délai entre chaque rebond de blob
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const blobVariants = {
    start: {
      y: "0%",
    },
    end: {
      y: "100%",
    },
  };

  // Transition fluide pour le rebond
  const bounceTransition = {
    duration: 0.6,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  };

  return (
    <motion.div
      // Animation de sortie : fondu en douceur quand le composant est démonté
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "#FFFAF4", // Ton fond neutre chaud
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999, // Reste toujours au-dessus
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="start"
        animate="end"
        style={{
          display: "flex",
          gap: "16px",
        }}
      >
        {/* Blob Bleu */}
        <motion.div
          variants={blobVariants}
          transition={bounceTransition}
          style={{
            width: "24px",
            height: "24px",
            backgroundColor: "#6EC1E4",
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%", // Forme organique
          }}
        />
        {/* Blob Rose */}
        <motion.div
          variants={blobVariants}
          transition={bounceTransition}
          style={{
            width: "24px",
            height: "24px",
            backgroundColor: "#FF8C94",
            borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%", // Forme organique
          }}
        />
        {/* Blob Vert */}
        <motion.div
          variants={blobVariants}
          transition={bounceTransition}
          style={{
            width: "24px",
            height: "24px",
            backgroundColor: "#88D4AB",
            borderRadius: "50% 50% 30% 70% / 30% 70% 50% 50%", // Forme organique
          }}
        />
      </motion.div>
    </motion.div>
  );
}