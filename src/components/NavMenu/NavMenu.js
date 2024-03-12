"use client";
import React, { useEffect, useId, useState } from "react";

import { LazyMotion, m, AnimatePresence } from "framer-motion";

import styles from "./NavMenu.module.css";

import { MENULINKS, finalVerticalOffset, initialVerticalOffset } from "@/constants";

const loadFeatures = () => import("../../featuresMax").then((res) => res.default);

const animationFinished = { opacity: 1, scale: 1 };

function NavMenu({ handleMenuClick }) {
  const [navItem, setNavItem] = useState({ hovered: null, selected: null });
  const [canHover, setCanHover] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const id = useId();
  const idHovered = useId();

  const container = {
    hidden: initialVerticalOffset,
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: initialVerticalOffset,
    show: finalVerticalOffset,
  };

  useEffect(() => {
    setHasAnimated(navItem.hovered !== null || navItem.selected !== null);
  }, [navItem]);

  useEffect(() => {
    const totalAnimationTime = 0.3 + 0.1 * MENULINKS.length;

    let timeoutIds = [];
    let loopTimeoutId = setTimeout(() => {
      MENULINKS.forEach((link, index) => {
        let timeoutId = setTimeout(() => {
          setNavItem({ ...navItem, selected: link.title });
          if (index === MENULINKS.length - 1) {
            setTimeout(() => {
              setNavItem({ ...navItem, selected: null });
              setCanHover(true);
            }, 500);
          }
        }, 200 * (index + 1));
        timeoutIds.push(timeoutId);
      });
    }, totalAnimationTime * 1000);

    return () => {
      clearTimeout(loopTimeoutId);
      timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav} onMouseLeave={() => setNavItem({ ...navItem, hovered: null })}>
        <LazyMotion features={loadFeatures}>
          <m.ul variants={container} initial='hidden' animate='show' className={styles.ul}>
            {MENULINKS.map((l) => (
              <m.li variants={item} key={l.title} className={styles.li}>
                <button
                  aria-label={`Show ${l.title.toLowerCase()} menu`}
                  onMouseEnter={() => canHover && setNavItem({ ...navItem, hovered: l.title })}
                  onClick={(e) => {
                    handleMenuClick(e, l.slug);
                    setNavItem({ ...navItem, selected: l.title });
                  }}
                >
                  {l.title}
                </button>
                <AnimatePresence>
                  {navItem.selected === l.title && (
                    <m.div
                      className={styles.selected}
                      layoutId={id}
                      initial={hasAnimated ? animationFinished : { opacity: 0, scale: 0 }}
                      animate={animationFinished}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", damping: 70, stiffness: 700 }}
                    />
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {navItem.hovered === l.title && (
                    <m.div
                      className={styles.hovered}
                      layoutId={idHovered}
                      initial={hasAnimated ? animationFinished : { opacity: 0, scale: 0 }}
                      animate={animationFinished}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", damping: 70, stiffness: 700 }}
                    />
                  )}
                </AnimatePresence>
              </m.li>
            ))}
          </m.ul>
        </LazyMotion>
      </nav>
    </div>
  );
}

export default NavMenu;
