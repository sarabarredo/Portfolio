import React, { useState } from "react";
import "./Skills.scss";
import { icons } from "../../../Data";
import { experiences } from "../../../Data";
import { motion } from "framer-motion";

const Skills = () => {

    const [active, setActive] = useState(1);
    return (
    <div className="container" id="skills">
        <motion.div initial={{opacity: 0}} whileInView={{y: [-50, 0], opacity: 1}} transition={{duration: 1}} className="title">
            <span>How do I work?</span>
            <h1>Skills and Experience</h1>
        </motion.div>
        <motion.div initial={{opacity: 0}} whileInView={{y: [-50, 0], opacity: 1}} transition={{duration: 1}} className="select">
            <button onClick={() => {setActive(1)}} className={active === 1 ? 'active' : ''}>Skills</button>
            <button onClick={() => {setActive(2)}} className={active === 2 ? 'active' : ''}>Experience</button>
        </motion.div>
        <motion.div initial={{opacity: 0}} whileInView={{y: [-50, 0], opacity: 1}} transition={{duration: 1}} className="skills">
            {active === 1 && icons.map((icon, index) => {
                return (
                    <div className="icon" key={index}>
                        {icon}
                    </div>
                );
            })}
        </motion.div>
        <motion.div initial={{opacity: 0}} whileInView={{y: [-50, 0], opacity: 1}} transition={{duration: 1}} className="experience">
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

export default Skills;