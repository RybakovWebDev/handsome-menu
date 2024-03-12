import dynamic from "next/dynamic";

import styles from "./Footer.module.css";

import SocialLinks from "../SocialLinks";

const MapWrapper = dynamic(() => import("@/components/MapWrapper"));

import { ADDRESS } from "@/constants";

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
