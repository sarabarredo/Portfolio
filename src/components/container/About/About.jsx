import React from "react";
import './About.scss';
import { bios } from "../../../Data";
import portfolio from '../../../assets/portfolio.jpg';
import CV from '../../../assets/CV.pdf';
import { motion } from 'framer-motion';

const Sobre = () => {
    return (
    <div className="container" id="about">
        <motion.div initial={{opacity: 0}} whileInView={{y: [-50, 0], opacity: 1}} transition={{duration: 1}} className="title">
            <span>Who Am I?</span>
            <h1>About me</h1>
        </motion.div>
        <div className="about-container">
            <motion.div initial={{x: 0, opacity: 0}} whileInView={{x: [-250, 0], opacity: 1}} transition={{duration: 1}} className="about-left">
                <img src={portfolio} alt="about-img" />
            </motion.div>
            <motion.div initial={{x: 0, opacity: 0}} whileInView={{x: [250, 0], opacity: 1}} transition={{duration: 1}} className="about-right">
                <p>Discipline and dedication, along with passion for coding and a tireless desire to learn, have accompanied me during my career. 
                <br />
                I always do my best and try to challenge myself to improve my skills.</p>
                {bios.map((bio) => {
                    return (
                        <div className="bio" key={bio.id}>
                            <span className="biokey">{bio.icon}{bio.key}</span>
                            <span className="bioValue">{bio.value}</span>
                        </div>
                    );
                })}
                <motion.a href={CV} download='CV Sara Barredo' whileHover={{scale: 1.1}} transition={{duration: 0.3}}>Download Resume</motion.a>
            </motion.div>
        </div>
    </div>
    );
};

export default Sobre;