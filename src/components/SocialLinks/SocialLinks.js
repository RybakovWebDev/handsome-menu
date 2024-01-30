import styles from "./SocialLinks.module.css";

import { CONTACTS } from "@/app/constants";

function SocialLinks() {
  return (
    <div className={styles.iconsWrapper}>
      {CONTACTS.map((c, i) => {
        return (
          <div className={styles.icon} key={c.title}>
            <a
              className={styles.link}
              target='_blank'
              rel='noopener noreferrer'
              href={c.link}
              aria-label={c.description}
            >
              {c.icon}
            </a>
            {i !== CONTACTS.length - 1 && <span className={styles.divider}>|</span>}
          </div>
        );
      })}
    </div>
  );
}

export default SocialLinks;
