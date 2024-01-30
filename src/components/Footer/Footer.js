import dynamic from "next/dynamic";
const DynamicMapWrapper = dynamic(
  () => import("../MapWrapper"),
  { ssr: false } // This line is important. It disables server-side rendering for this module.
);

import styles from "./Footer.module.css";

import SocialLinks from "../SocialLinks";

import { ADDRESS } from "@/app/constants";

function Footer() {
  return (
    <footer className={styles.footer}>
      <DynamicMapWrapper />
      <SocialLinks />
      <p>{ADDRESS.street}</p>
      <p>Entrance from Kostava and Vera Park</p>
    </footer>
  );
}

export default Footer;
