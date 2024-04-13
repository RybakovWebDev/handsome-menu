"use client";
import React, { useState } from "react";

import styles from "./MenuWrapper.module.css";

import NavMenu from "../NavMenu";
import MenuText from "../MenuText";

type HandleMenuClick = (e: React.MouseEvent, slug: string) => void;

const MenuWrapper: React.FC = () => {
  const [menuSlug, setMenuSlug] = useState<string | null>(null);

  const handleMenuClick: HandleMenuClick = (e, slug) => {
    if (slug === menuSlug) return;
    setMenuSlug(slug);
  };

  return (
    <section className={styles.wrapper}>
      <NavMenu handleMenuClick={handleMenuClick} />
      {menuSlug && <MenuText slug={menuSlug} />}
    </section>
  );
};

export default MenuWrapper;
