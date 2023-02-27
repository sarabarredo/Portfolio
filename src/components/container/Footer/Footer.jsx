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
                        &copy; 2023 All Rights Reserved | Developed by <span>Sara Barredo</span>
                    </p>
                </div>
                <div className="find-me">
                    <h4>Find me on</h4>
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
