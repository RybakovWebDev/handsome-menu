import React from "react";
import Image from "next/image";

import styles from "./SocialLinks.module.css";

import { CONTACTS, Contact } from "@/constants";

const SocialLinks: React.FC = () => {
  return (
    <div className={styles.iconsWrapper}>
      {CONTACTS.map((contact: Contact, i: number) => {
        const { title, link, iconProps, description } = contact;

        return (
          <div className={styles.icon} key={title}>
            <a className={styles.link} target='_blank' rel='noopener noreferrer' href={link} aria-label={description}>
              <Image src={iconProps.src} alt={iconProps.alt} height={32} width={32} />
            </a>
            {i !== CONTACTS.length - 1 && <span className={styles.divider}>|</span>}
          </div>
        );
      })}
    </div>
  );
};

export default SocialLinks;
