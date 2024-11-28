import React from "react";
import logo from "../../assets/img/CypherCode-Logo.png";

import styles from "./nav.module.css";

const NavBar = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  //

  return (
    <div className={styles.navbar}>
      <img src={logo} alt="CypherCode Logo" />

      <ul className={styles.navList}>
        <li>Home</li>
        <li
          onClick={() => scrollToSection("services")}
        >Features</li>


        <li
          onClick={() => scrollToSection("clients")}
        >Clients</li>
    
        <li>
          <a
          className="btn-primary"
          href="https://calendly.com/cyphercode-ai"
          target="_blank"
          rel="noreferrer"
          style={{ tezxtDecoration: "none" }} 

          >Contact Us</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
