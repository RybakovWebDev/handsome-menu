"use client";
import React from "react";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";

import styles from "./MenuText.module.css";

import { Content, MENU, MenuItem } from "@/constants";

const container = {
  hidden: { opacity: 0, height: "0rem" },
  show: {
    opacity: 1,
    height: "auto",
    transition: {
      staggerChildren: 0.2,
      height: {
        duration: 0.1,
      },
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

interface MenuTextProps {
  slug: string;
}

const renderCategory = (category: Content): React.ReactElement => {
  return (
    <LazyMotion key={category.positions[0].name} features={domAnimation}>
      <m.div className={styles.categoryWrapper} variants={item}>
        <m.h3 className={category.centeredHeading ? styles.centered : undefined}>{category.category}</m.h3>
        {category.positions.map((p) => (
          <m.div key={p.name} className={category.fullWidth ? styles.itemWrapperFullWidth : styles.itemWrapper}>
            <div className={p.price ? styles.text : styles.textCentered}>
              <h4 className={p.name ? undefined : styles.empty}>{p.name}</h4>
              {p.options && (
                <ul>
                  {p.options?.map((o, i) => {
                    return (
                      <li key={o}>
                        {o}
                        <span>{i !== (p.options ? p.options.length - 1 : 0) && "|"}</span>
                      </li>
                    );
                  })}
                </ul>
              )}
              {p.subtitle ? <p className={styles.subtitle}>{p.subtitle}</p> : null}
            </div>
            {p.price ? <h4 className={styles.price}>{p.price}</h4> : null}
          </m.div>
        ))}
      </m.div>
    </LazyMotion>
  );
};

const MenuText: React.FC<MenuTextProps> = ({ slug }) => {
  const selectedMenu = MENU.find((item: MenuItem) => item.slug === slug);
  return (
    selectedMenu?.content && (
      <LazyMotion features={domAnimation}>
        <AnimatePresence mode='wait'>
          <m.section
            key={slug}
            variants={container}
            initial='hidden'
            animate='show'
            exit='hidden'
            className={styles.wrapper}
          >
            {selectedMenu.content.map((c) => renderCategory(c))}
          </m.section>
        </AnimatePresence>
      </LazyMotion>
    )
  );
};

export default MenuText;
