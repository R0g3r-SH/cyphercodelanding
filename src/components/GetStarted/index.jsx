import React from "react";
import styles from "./getstarted.module.css";

const GetStarted = () => {
  return (
    <div className={styles.getStarted}>
      <div className={styles.getStartedInner}>
      <h1>Ready to get started?</h1>
      <p>
      Take your business to the next level with cutting-edge AI solutions designed to drive innovation and efficiency. Let's create intelligent systems tailored for your success.
      </p>
        <a 
          href="https://calendly.com/cyphercode-ai"
          target="_blank"
          rel="noreferrer"
        className="btn-secondary">Contact Us</a>
        </div>
    </div>
  );
};

export default GetStarted;
