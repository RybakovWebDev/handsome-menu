"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./MenuImage.module.css";

import { MENULINKS } from "@/app/constants";

function MenuImage({ slug }) {
  const menu = MENULINKS.find((link) => link.slug === slug);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
  }, [slug]);

  return (
    slug && (
      <AnimatePresence mode='wait'>
        <motion.div
          className={styles.imageWrapper}
          key={slug}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
        >
          <Image className={styles.image} src={menu.image} alt={`${slug} menu`} fill onLoad={() => setIsLoaded(true)} />
        </motion.div>
      </AnimatePresence>
    )
  );
}

export default MenuImage;
