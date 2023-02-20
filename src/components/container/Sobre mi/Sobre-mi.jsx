import React from "react";
import './Sobre-mi.scss';
import { bios } from "../../../Data";
import portfolio from '../../../assets/portfolio.jpg';
import CV from '../../../assets/CV.pdf';
import { motion } from 'framer-motion';

const Sobre = () => {
    return (
    <div className="container" id="sobre mi">
        <motion.div initial={{opacity: 0}} whileInView={{y: [-50, 0], opacity: 1}} transition={{duration: 1}} className="title">
            <span>¿Quién soy?</span>
            <h1>Sobre mí</h1>
        </motion.div>
        <div className="container-sobre">
            <motion.div initial={{x: 0, opacity: 0}} whileInView={{x: [-250, 0], opacity: 1}} transition={{duration: 1}} className="sobre-left">
                <img src={portfolio} alt="sobre-mi-img" />
            </motion.div>
            <motion.div initial={{x: 0, opacity: 0}} whileInView={{x: [250, 0], opacity: 1}} transition={{duration: 1}} className="sobre-right">
                <p>La disciplina y la dedicación junto con la pasión por el código y las incansables ganas de aprender, me han acompañado durante mi trayectoria. Me gusta dar lo mejor de mí y ponerme retos para mejorar en mi carrera profesional.</p>
                {bios.map((bio) => {
                    return (
                        <div className="bio" key={bio.id}>
                            <span className="biokey">{bio.icon}{bio.key}</span>
                            <span className="bioValue">{bio.value}</span>
                        </div>
                    );
                })}
                <motion.a href={CV} download='CV Sara Barredo' whileHover={{scale: 1.1}} transition={{duration: 0.3}}>Descargar CV</motion.a>
            </motion.div>
        </div>
    </div>
    );
};

export default Sobre;