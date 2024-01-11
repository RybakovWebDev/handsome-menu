"use client";
import React from "react";

import styles from "./MenuImage.module.css";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function MenuImage({ slug }) {
  return (
    slug && (
      <AnimatePresence mode='wait'>
        <motion.div
          className={styles.imageWrapper}
          key={slug}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
        >
          <Image className={styles.image} src={`/images/${slug}.png`} alt={`${slug} menu`} fill />
        </motion.div>
      </AnimatePresence>
    )
  );
}

export default MenuImage;
