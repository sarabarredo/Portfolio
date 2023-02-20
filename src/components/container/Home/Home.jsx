import React from "react";
import "./Home.scss";
import portfolio from "../../../assets/portfolio.jpg";
import { motion } from 'framer-motion';

const Home = () => {

    const moveVariants = {
        animation: {
            y: [0, -15],
            transition: {
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 2,
                delay: 1
            }
        }
    }
    return ( 
    <motion.div initial={{y: -15, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 2, delay: 0.5}} className="container" id="home">
        <div className="perfil">
            <img src={portfolio} alt="portfolio-img" />
        </div>
        <div className="texto-perfil">
            <h3 className="nombre">¡Hola!, soy <span>Sara Barredo</span></h3>
            <span className="trabajo">Desarrolladora FrontEnd residente en España</span>
        <span className="texto">
            Autodidacta y<br />
            apasionada por el<br />
            desarrollo web.
        </span>
        <motion.a href="mailto:sarabarredo2000@gmail.com" target={"_blank"} variants={moveVariants} animate='animation' whileHover={{scale: 1.1}} transition={{duration: 0.3}}>Contacta conmigo</motion.a>
        <div className="web">Desarrolladora Web</div>
        <div className="ui">Diseñadora UI/UX</div>
        </div>
    </motion.div>
    );
};

export default Home;