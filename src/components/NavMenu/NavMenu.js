"use client";
import React, { useEffect, useId, useState } from "react";

import { motion } from "framer-motion";

import styles from "./NavMenu.module.css";

import { MENULINKS, finalVerticalOffset, initialVerticalOffset } from "@/app/constants";

const animationFinished = { opacity: 1, scale: 1 };

function NavMenu({ handleMenuClick }) {
  const [hoveredNavItem, setHoveredNavItem] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const id = useId();

  const container = {
    hidden: initialVerticalOffset,
    show: {
      opacity: 1,
      y: 0,

      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: initialVerticalOffset,
    show: finalVerticalOffset,
  };

  useEffect(() => {
    if (hoveredNavItem !== null) {
      setHasAnimated(true);
    } else {
      setHasAnimated(false);
    }
  }, [hoveredNavItem]);

  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav} onMouseLeave={() => setHoveredNavItem(null)}>
        <motion.ul variants={container} initial='hidden' animate='show' className={styles.ul}>
          {MENULINKS.map((l) => {
            return (
              <motion.li variants={item} key={l.title} className={styles.li}>
                <button onMouseEnter={() => setHoveredNavItem(l.title)} onClick={(e) => handleMenuClick(e, l.slug)}>
                  {l.title}
                </button>
                {hoveredNavItem === l.title ? (
                  <motion.div
                    className={styles.hovered}
                    layoutId={id}
                    initial={hasAnimated ? animationFinished : { opacity: 0, scale: 0 }}
                    animate={animationFinished}
                    transition={{ type: "spring", damping: 70, stiffness: 700 }}
                  />
                ) : null}
              </motion.li>
            );
          })}
        </motion.ul>
      </nav>
    </div>
  );
}

export default NavMenu;
