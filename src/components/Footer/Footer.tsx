import React from "react";
import dynamic from "next/dynamic";

import styles from "./Footer.module.css";

import SocialLinks from "../SocialLinks";

const MapWrapper = dynamic(() => import("@/components/MapWrapper"));

import { ADDRESS, Address } from "@/constants";

const Footer: React.FC = () => {
  const { street, info } = ADDRESS as Address;
  return (
    <footer className={styles.footer}>
      <MapWrapper />
      <SocialLinks />
      <p>{street}</p>
      <p>{info}</p>
    </footer>
  );
};

export default Footer;
