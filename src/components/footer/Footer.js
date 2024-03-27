import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Sansar</div>
      <div className={styles.text}>
        Sansar creative thought agency © All right reserved
      </div>
    </div>
  );
};

export default Footer;
