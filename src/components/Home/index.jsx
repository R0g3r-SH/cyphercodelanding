import React from "react";
import styles from "./home.module.css";
import robot from "../../assets/img/robot1.png";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.homeContent}>
        <h1
        className={styles.homeTitle}

        >AI-Powered Solutions for a Smarter Tomorrow</h1>
        <p
        className={styles.homeText}
        >
          We provide the best AI solutions to help you grow your business and
          reach your goals.
        </p>
        <button
        className="btn-secondary"
        >Contact Us</button>
      </div>

      <div className={styles.homeImage}>
        <img src={robot} alt="robot" />
      </div>
    </div>
  );
};

export default Home;
