import React from "react";
import styles from "./Header.module.css"; // Import the module-specific styles

type CTAProps = {};

const CTA: React.FC<CTAProps> = () => {
  return (
    <div className={styles.cta}>
      <a
        href="#contact"
        className={`btn btn-primary ${styles.changebtn}`} // Combine global and module-specific classes
      >
        Say Hello
      </a>
    </div>
  );
};

export default CTA;
