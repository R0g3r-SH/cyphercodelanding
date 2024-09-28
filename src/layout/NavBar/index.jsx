import React from "react";
import logo from "../../assets/img/CypherCode-Logo.png";

import styles from "./nav.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <img src={logo} alt="CypherCode Logo" />

      <ul className={styles.navList}>
        <li>Home</li>
        <li>Features</li>
        <li>Testimonials</li>
        <li>
          <button
          className="btn-primary"
          >Contact Us</button>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
