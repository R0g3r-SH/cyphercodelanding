import React, { useState, useEffect } from "react";
import styles from "./comingsoon.module.css"; // Importing the module CSS
import logo from "../../assets/img/cyphericon.svg"; // Importing the logo
import gridglow from "../../assets/img/Grid-Glow.svg"; // Importing the logo
import blurglow from "../../assets/img/Blur-Glow.svg"; // Importing the logo
const ComingSoon = () => {
  const [text, setText] = useState("");
  const message = "Reevolutionizing the future of AI ... Coming Soon!";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < message.length - 1) {
        setText((prev) => prev + message[index]);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust speed of typing here
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className={styles.comingSoonContainer}>
      <img src={gridglow} className={styles.gridGlow} alt="Grid glow" />
      <img src={logo} className={styles.logoSpin} alt="AI startup logo" />
      <h4 className={styles.typingText}>{text}</h4>
        <img src={blurglow} className={styles.blurGlow} alt="Blur glow" />
    </div>
  );
};

export default ComingSoon;
