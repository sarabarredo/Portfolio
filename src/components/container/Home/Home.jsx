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
        <div className="profile">
            <img src={portfolio} alt="portfolio-img" />
        </div>
        <div className="profile-text">
            <h3 className="name">Hi!, I'm <span>Sara Barredo</span></h3>
            <span className="work">FrontEnd Developer based in Spain</span>
        <span className="text">
            Self-taught and<br />
            passionate about<br />
            web development.
        </span>
        <motion.a href="mailto:sarabarredo2000@gmail.com" target={"_blank"} variants={moveVariants} animate='animation' whileHover={{scale: 1.1}} transition={{duration: 0.3}}>Contact Me</motion.a>
        <div className="web">Web Developer</div>
        <div className="ui">UI/UX Designer</div>
        </div>
    </motion.div>
    );
};

export default Home;