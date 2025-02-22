import React from "react";
import Links from "./links/Links";
import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Sansar
      </Link>
      <div className={styles.menuitem}>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
