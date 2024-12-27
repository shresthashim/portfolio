import React from "react";
import styles from "./Header.module.css"; 
import Link from "next/link";

type CTAProps = {};

const CTA: React.FC<CTAProps> = () => {
  return (
    <div className={styles.cta}>
      <Link
        href='#contact'
        className={`btn btn-primary ${styles.changebtn}`} 
      >
        Say Hello
      </Link>
    </div>
  );
};

export default CTA;
