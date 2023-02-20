import React from "react";
import './Footer.scss';
import { socialIcons } from "../../../Data"; 
import { motion } from "framer-motion";

const Footer = () => {
    return ( 
        <div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1.5}} className="footer">
                <div className="copyright">
                    <p>
                        &copy; 2023 Todos los derechos reservados | Desarrollado por <span>Sara Barredo</span>
                    </p>
                </div>
                <div className="encuentrame">
                    <h4>Encuéntrame en</h4>
                    <div className="social-icons">
                        {socialIcons.map((socialIcon, index) => {
                            return <div key={index}>{socialIcon}</div>
                        })}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Footer;
