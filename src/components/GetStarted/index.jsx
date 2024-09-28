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
        <button className="btn-secondary">Contact Us</button>
        </div>
    </div>
  );
};

export default GetStarted;
