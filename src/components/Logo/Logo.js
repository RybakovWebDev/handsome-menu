import Image from "next/image";
import React from "react";

import styles from "./Logo.module.css";

import LogoLine from "../LogoLine";

function Logo() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.lineWrapper}>
        <LogoLine />
      </div>
      <Image src={"/images/logo.png"} alt='Bar logo' width={288} height={128} />
      <div className={styles.lineWrapper}>
        <LogoLine toRight={true} />
      </div>
    </div>
  );
}

export default Logo;
