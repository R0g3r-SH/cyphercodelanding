import React from "react";
import NavBar from "../../layout/NavBar";
import Footer from "../../layout/Footer";
import Home from "../../components/Home";
import GetStarted from "../../components/GetStarted";
import BlurGlow from "../../assets/img/Blur-Glow.svg";
import GridGlow from "../../assets/img/Grid-Glow.svg";
import styles from "./landing.module.css";
import Service from "../../components/Service";
import Clients from "../../components/Clients";
const Landing = () => {
  return (

      <div className="main-container">
        <NavBar />
        <Home />
        <img className={styles.blurGlow1} src={BlurGlow} alt="BlurGlow" />
        <img className={styles.gridGlow2} src={GridGlow} alt="GridGlow" />
        <Service/>
        <GetStarted />
        <Footer />
      </div>


    
  );
};

export default Landing;
