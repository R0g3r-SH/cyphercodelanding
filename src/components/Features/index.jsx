import React from "react";
import logo from "../../assets/img/cyphericon-white.svg";
import styles from "./features.module.css";

const Features = () => {
  return (
    <div className={styles.featuresContainer}>
      <div className={styles.featuresLogoContainer}>
        <img src={logo} className={styles.logoSpin} alt="AI startup logo" />
      </div>
      <h1 className={styles.featuresTitle}>Unique Features of CypherCode</h1>
      <p className={styles.featuresText}>
        CypherCode offers a wide range of features that make it the best choice
        for your business.
      </p>

      <div className={styles.featuresGrid}>
        <div className={styles.featuresCard}>
            <h2>AI Chatbots</h2>
            <p>
            Revolutionize customer interactions with our intelligent chatbots. Our AI-powered chatbots provide personalized responses, 24/7 support, and enhance user engagement, leading to improved customer satisfaction and streamlined operations.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
