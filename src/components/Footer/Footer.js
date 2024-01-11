import React from "react";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* <h3 className={styles.address}>Address:</h3> */}
      <p>Tbilisi, Merab Kostava 35</p>
      <p>Entrance from Kostava and Vera Park</p>
    </footer>
  );
}

export default Footer;
