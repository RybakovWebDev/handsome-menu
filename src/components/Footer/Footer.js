import React from "react";

import styles from "./Footer.module.css";
import SocialLinks from "../SocialLinks";
import { ADDRESS } from "@/app/constants";
import MapWrapper from "../MapWrapper";

function Footer() {
  return (
    <footer className={styles.footer}>
      <MapWrapper />
      <SocialLinks />
      <p>{ADDRESS.street}</p>
      <p>Entrance from Kostava and Vera Park</p>
    </footer>
  );
}

export default Footer;
