import React from "react";
import styles from "./footer.module.css";
import logo from "../../assets/img/CypherCode-Logo.png";
import facebook from "../../assets/img/social/facebook.svg";
import twitter from "../../assets/img/social/Twitter-X.svg";
import LinkedIn from "../../assets/img/social/Linkedin.svg";

const Footer = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <img src={logo} alt="logo" />
        <div className={styles.footerText}>
          <li
            onClick={() => scrollToSection("home")}
          >Home</li>
          <li
            onClick={() => scrollToSection("services")}
          >Features</li>
          <li>Testimonials</li>
          <li>Contact Us</li>
        </div>
        <div className={styles.footerSocial}>
          <li className={styles.social}>
            <img src={twitter} alt="twitter" />
          </li>
          <li className={styles.social}>
            <img src={facebook} alt="facebook" />
          </li>

          <li className={styles.social}>
            <img src={LinkedIn} alt="linkedin" />
          </li>
          <li className={styles.social}>
            <img src={twitter} alt="social4" />
          </li>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2021 CypherCode. All rights reserved.</p>
        <div className={styles.footerLinks}>    
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
