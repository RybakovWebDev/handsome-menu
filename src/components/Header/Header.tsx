import React from "react";

import styles from "./Header.module.css";

import Logo from "../Logo";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <h2 className={styles.description}>Cozy place in Vera Park. Mixed drinks, craft beer & kitchen.</h2>
      <section className={styles.timetableWrapper}>
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
      </section>
    </header>
  );
};

export default Header;
