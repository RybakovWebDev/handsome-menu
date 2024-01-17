"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./MenuText.module.css";

import { MENU } from "@/app/constants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const renderCategory = (category) => {
  return (
    <motion.div key={category.category} className={styles.categoryWrapper} variants={item}>
      <motion.h3>{category.category}</motion.h3>
      {category.positions.map((p) => (
        <motion.div key={p.name} className={category.fullWidth ? styles.itemWrapperFullWidth : styles.itemWrapper}>
          <div>
            <h4>{p.name}</h4>
            {p.subtitle ? <p>{p.subtitle}</p> : null}
          </div>
          <h4 className={styles.price}>{p.price}</h4>
        </motion.div>
      ))}
    </motion.div>
  );
};

function MenuText({ slug }) {
  const selectedMenu = MENU.find((item) => item.slug === slug);
  return (
    slug && (
      <AnimatePresence mode='wait'>
        <motion.section
          key={slug}
          variants={container}
          initial='hidden'
          animate='show'
          exit='hidden'
          className={styles.wrapper}
        >
          {selectedMenu.content.map((c) => renderCategory(c))}
        </motion.section>
      </AnimatePresence>
    )
  );
}

export default MenuText;
