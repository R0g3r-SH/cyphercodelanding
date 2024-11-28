import React from "react";
import styles from "./home.module.css";
import robot from "../../assets/img/robot1.png";



const Home = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        onClick={() => scrollToSection("services")}
        >

          Get Started
        </button>
      </div>

      <div className={styles.homeImage}>
        <img src={robot} alt="robot" />
      </div>
    </div>
  );
};

export default Home;
