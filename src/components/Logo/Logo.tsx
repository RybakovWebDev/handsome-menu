import React from "react";
import Image from "next/image";

import styles from "./Logo.module.css";

import LogoLine from "../LogoLine";

const Logo: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.lineWrapper}>
        <LogoLine />
      </div>

      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={"/images/logoIconBlack.webp"}
          alt='Bar logo'
          fill
          sizes='280px'
          priority={true}
        />
      </div>

      <div className={styles.lineWrapper}>
        <LogoLine rightDirection={true} />
      </div>
    </div>
  );
};

export default Logo;
