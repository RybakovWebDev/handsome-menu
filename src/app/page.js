"use client";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

import Logo from "@/components/Logo";
import MenuImage from "@/components/MenuImage";
import NavMenu from "@/components/NavMenu";
import { useState } from "react";

export default function Home() {
  const [imageSlug, setImageSlug] = useState(null);

  const handleMenuClick = (e, slug) => {
    if (slug === imageSlug) return;
    console.log("Changing");
    setImageSlug(slug);
  };
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <header>
          <Logo />
        </header>
        <div className={styles.infoWrapper}>
          <p className={styles.description}>Cozy place in Vera Park. Mixed drinks, craft beer & kitchen.</p>
          <table>
            <tbody>
              <tr>
                <td className={`${styles.day} ${styles.tableCell}`}>MON-THU:</td>
                <td className={styles.time}>11 am - 11 pm</td>
              </tr>
              <tr>
                <td className={`${styles.day} ${styles.tableCell}`}>FRI-SUN:</td>
                <td className={styles.time}>14 pm - 2 am</td>
              </tr>
            </tbody>
          </table>
        </div>
        <NavMenu handleMenuClick={handleMenuClick} />
        <MenuImage slug={imageSlug} />
        <Footer />
      </div>
    </main>
  );
}
