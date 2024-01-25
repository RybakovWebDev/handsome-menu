"use client";
import React, { useState } from "react";

import NavMenu from "../NavMenu";
import MenuText from "../MenuText";

function MenuWrapper() {
  const [menuSlug, setMenuSlug] = useState(null);

  const handleMenuClick = (e, slug) => {
    if (slug === menuSlug) return;
    setMenuSlug(slug);
  };

  return (
    <section>
      <NavMenu handleMenuClick={handleMenuClick} />
      <MenuText slug={menuSlug} />
    </section>
  );
}

export default MenuWrapper;
