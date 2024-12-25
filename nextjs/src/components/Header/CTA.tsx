import React from "react";
import styles from "./Header.module.css";

type CTAProps = {};

const CTA: React.FC<CTAProps> = () => {
  return (
    <div className={styles.cta}>
      <a href='#contact' className={`${styles.btn} ${styles.changebtn} ${styles.btn_primary}`}>
        Say Hello
      </a>
    </div>
  );
};

export default CTA;
