import React, { useState } from "react";
import "./Habilidades.scss";
import { icons } from "../../../Data";
import { experiences } from "../../../Data";
import { motion } from "framer-motion";

const Habilidades = () => {

    const [active, setActive] = useState(1);
    return (
    <div className="container" id="habilidades">
        <motion.div initial={{opacity: 0}} whileInView={{y: [-50, 0], opacity: 1}} transition={{duration: 1}} className="title">
            <span>¿Qué me diferencia?</span>
            <h1>Habilidades y Experiencia</h1>
        </motion.div>
        <motion.div initial={{opacity: 0}} whileInView={{y: [-50, 0], opacity: 1}} transition={{duration: 1}} className="seleccionar">
            <button onClick={() => {setActive(1)}} className={active === 1 ? 'active' : ''}>Habilidades</button>
            <button onClick={() => {setActive(2)}} className={active === 2 ? 'active' : ''}>Experiencia</button>
        </motion.div>
        <motion.div initial={{opacity: 0}} whileInView={{y: [-50, 0], opacity: 1}} transition={{duration: 1}} className="habilidades">
            {active === 1 && icons.map((icon, index) => {
                return (
                    <div className="icon" key={index}>
                        {icon}
                    </div>
                );
            })}
        </motion.div>
        <motion.div initial={{opacity: 0}} whileInView={{y: [-50, 0], opacity: 1}} transition={{duration: 1}} className="experiencia">
            {active === 2 && experiences.map(experience => {
                return (
                    <div className="experience" key={experience.id}>
                    <span>{experience.year}</span>
                    <div className="position">
                        <h3>{experience.position}</h3>
                        <p>{experience.company}</p>
                    </div>
                </div>
                )
            })}
        </motion.div>
    </div>
    );
};

export default Habilidades;