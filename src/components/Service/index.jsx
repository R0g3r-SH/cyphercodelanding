import React from "react";
import styles from "./service.module.css";
import robot from "../../assets/img/robot1.png";

const Service = ()=>{
    return (
        <div className={styles.services}>
            {/* Titulo de la landing page */}
            <div className={styles.header}>
                <img src="/logo_redondo.svg" alt="" />
                <p className={styles.title}>Unique Features of CypherCode</p>
                <p className={styles.subtile}>We specialize in cutting-edge AI solutions designed to transform your business.</p>
            </div>
            {/* rectangulos para info */}
                <div className={styles.rectangles_all}>
                <div className={styles.rectangles}>
                    <div className={styles.chat}>
                    <p className={styles.tchat}>AI Chatbots</p>
                    <p className={styles.schat} >Revolutionize customer interactions with our intelligent chatbots. Our AI-powered chatbots provide personalized responses, 24/7 support, and enhance user engagement, leading to improved customer satisfaction and streamlined operations</p>
                        <img src="../../public/robot_se.png" alt="" />
                        
                    </div >
                    <div className={styles.cloud}>
                        <img src="../../public/cloud.png" alt="" />
                        
                            <p className={styles.tchat}>Cloud Solutions</p>
                            <p className={styles.schat}>Experience the power of scalable and reliable cloud services. Our cloud solutions offer flexibility, security, and cost-effectiveness, ensuring that your data is accessible anytime, anywhere while maintaining the highest standards of safety.</p>
                        
                    </div>
                </div>
                {/* rectangulos el rec largo */}
                <div className={styles.blockchain}>
                    <img src="../../public/block.svg" alt="" />
                    <div className={styles.blockchainText}>
                        <p className={styles.tchat}>Blockchain <br></br> Development</p>
                        <p className={styles.schat}>Secure your transactions and data with our bespoke blockchain solutions. Our expertise in blockchain technology ensures transparency, immutability, and robust security, making it ideal for industries requiring secure and verifiable transactions.</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Service