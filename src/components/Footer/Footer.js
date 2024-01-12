import React from "react";

import styles from "./Footer.module.css";
import SocialLinks from "../SocialLinks";

function Footer() {
  return (
    <footer className={styles.footer}>
      <SocialLinks />
      <p>Tbilisi, Merab Kostava 35</p>
      <p>Entrance from Kostava and Vera Park</p>
    </footer>
  );
}

export default Footer;
