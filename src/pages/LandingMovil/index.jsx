import React from 'react';
import NavBar from '../../layout/NavBar';

import Home from '../../components/Home';
import Service from '../../components/Service';
import GetStarted from '../../components/GetStarted';
import Footer from '../../layout/Footer'
const LandingMovil = () => {
    return (
        <div className="mobile-container">
            <NavBar></NavBar>
            <Home />
        
        {/* <img className={styles.gridGlow2} src={GridGlow} alt="GridGlow" /> */}
        <Service></Service>
        <GetStarted></GetStarted>
        <Footer></Footer>
        </div>
    );
};

export default LandingMovil;