"use client";
import React, { useEffect, useId, useState } from "react";

import { LazyMotion, m, AnimatePresence } from "framer-motion";

import styles from "./NavMenu.module.css";

import { MENULINKS, finalVerticalOffset, initialVerticalOffset } from "@/constants";

const loadFeatures = () => import("../../featuresMax").then((res) => res.default);

const animationFinished = { opacity: 1, scale: 1 };

interface NavItem {
  hoveredItem: string | null;
  selectedItem: string | null;
}

interface NavMenuProps {
  handleMenuClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, slug: string) => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ handleMenuClick }) => {
  const [navItem, setNavItem] = useState<NavItem>({ hoveredItem: null, selectedItem: null });
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
    setHasAnimated(navItem.hoveredItem !== null || navItem.selectedItem !== null);
  }, [navItem]);

  useEffect(() => {
    const totalAnimationTime = 0.3 + 0.1 * MENULINKS.length;

    let timeoutIds: number[] = [];
    let loopTimeoutId = window.setTimeout(() => {
      MENULINKS.forEach((link, index) => {
        let timeoutId = window.setTimeout(() => {
          setNavItem({ ...navItem, selectedItem: link.title });
          if (index === MENULINKS.length - 1) {
            window.setTimeout(() => {
              setNavItem({ ...navItem, selectedItem: null });
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
      <nav className={styles.nav} onMouseLeave={() => setNavItem({ ...navItem, hoveredItem: null })}>
        <LazyMotion features={loadFeatures}>
          <m.ul variants={container} initial='hidden' animate='show' className={styles.ul}>
            {MENULINKS.map((l) => (
              <m.li variants={item} key={l.title} className={styles.li}>
                <button
                  aria-label={`Show ${l.title.toLowerCase()} menu`}
                  onMouseEnter={() => canHover && setNavItem({ ...navItem, hoveredItem: l.title })}
                  onClick={(e) => {
                    handleMenuClick(e, l.slug);
                    setNavItem({ ...navItem, selectedItem: l.title });
                  }}
                >
                  {l.title}
                </button>
                <AnimatePresence>
                  {navItem.selectedItem === l.title && (
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
                  {navItem.hoveredItem === l.title && (
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
};

export default NavMenu;
