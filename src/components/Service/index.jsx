import React from "react";
import styles from "./service.module.css";
import robot from "../../assets/img/robot_se.png";
import cloud from "../../assets/img/cloud2.png";
import block from "../../assets/img/block.svg";

const Service = () => {
  return (
    <div
  
    className={styles.services}>
      {/* Titulo de la landing page */}
      <div 
        id="services"
      className={styles.header}>
        <img src="/logo_redondo.svg" alt="" />
        <p className={styles.title}>Unique Features of CypherCode</p>
        <p className={styles.subtile}>
          We specialize in cutting-edge AI solutions designed to transform your
          business.
        </p>
      </div>
      {/* rectangulos para info */}
      <div className={styles.rectangles_all}>
        <div className={styles.rectangles}>
          <div className={styles.cloud}>
            <p className={styles.tchat}>AI Chatbots</p>
            <p className={styles.schat}>
              Revolutionize customer interactions with our intelligent chatbots.
              Our AI-powered chatbots provide personalized responses, 24/7
              support, and enhance user engagement, leading to improved customer
              satisfaction and streamlined operations
            </p>
            <img src={robot} alt="" />
          </div>
          <div className={styles.cloud}>
            <img src={cloud} alt="" />

            <p className={styles.tchat}>Cloud Solutions</p>
            <p className={styles.schat}>
              Experience the power of scalable and reliable cloud services. Our
              cloud solutions offer flexibility, security, and
              cost-effectiveness, ensuring that your data is accessible anytime,
              anywhere while maintaining the highest standards of safety.
            </p>
          </div>
        </div>
        {/* rectangulos el rec largo */}
        <div className={styles.blockchain}>
          <img src={block } alt="" />
          <div className={styles.blockchainText}>
            <p className={styles.tchat}>
              Blockchain <br></br> Development
            </p>
            <p className={styles.schat}>
              Secure your transactions and data with our bespoke blockchain
              solutions. Our expertise in blockchain technology ensures
              transparency, immutability, and robust security, making it ideal
              for industries requiring secure and verifiable transactions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
