"use client";
import { useState } from "react";

import styles from "./page.module.css";

import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import NavMenu from "@/components/NavMenu";
import MenuText from "@/components/MenuText";

export default function Home() {
  const [menuSlug, setMenuSlug] = useState(null);

  const handleMenuClick = (e, slug) => {
    if (slug === menuSlug) return;
    setMenuSlug(slug);
  };
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <Logo />
        </header>
        <div className={styles.infoWrapper}>
          <p className={styles.description}>Cozy place in Vera Park. Mixed drinks, craft beer & kitchen.</p>
          <div className={styles.timetableWrapper}>
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
        </div>
        <NavMenu handleMenuClick={handleMenuClick} />
        <MenuText slug={menuSlug} />
      </div>
      <Footer />
    </main>
  );
}
