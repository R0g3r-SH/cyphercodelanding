import React, { useState } from "react";
import logo from "../../assets/img/CypherCode-Logo.png";
import styles from "./nav.module.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="CypherCode Logo" className={styles.logo} />
      
      <div className={styles.burger} onClick={toggleMenu}>
      <div className={styles.line} style={{ backgroundColor: 'white' }}></div>
        <div className={styles.line} style={{ backgroundColor: 'white' }}></div>
        <div className={styles.line} style={{ backgroundColor: 'white' }}></div>
      </div>
      

      <ul className={`${styles.navList} ${isOpen ? styles.navActive : ""}`}>
        <li  className={styles.options} onClick={() => scrollToSection("services")}>Features</li>
        <li  className={styles.options} onClick={() => scrollToSection("clients")}>Clients</li>
        <li>
          <a
            className="btn-primary"
            href="https://calendly.com/cyphercode-ai"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
