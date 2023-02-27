import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaPhoneAlt, FaUser, FaPaperPlane, FaLinkedin, FaGithub, FaBehance} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";


export const navLinks = ["home", "about me", "skills", "portfolio"]

export const socialIcons = [
  <a href="https://www.linkedin.com/in/sarabarredo/" target={`blank`}><FaLinkedin /></a>,
  <a href="https://www.github.com/sarabarredo" target={`blank`}><FaGithub /></a>,
  <a href="https://www.behance.net/sarabarredo" target={`blank`}><FaBehance /></a>
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Sara"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: <a href="tel:+34666322948" id="phone-num">+34666322948</a>
  },
  {
    id: 3,

    
    icon: <FaPaperPlane />,
    key: "Email", 
    value: "sarabarredo2000@gmail.com"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />, <SiTypescript />, <FaReact />, <FaNodeJs />, <FaSass />, <FaFigma />]

export const experiences = [
  {
    id: 1,
    year: "2022 - present",
    position: "Self-taught Junior Developer",
    company: "Personal Projects"
  }
]


export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web",
    value: "https://github.com/sarabarredo/Travel-Website-Project",
    view: "https://sarabarredo.github.io/Travel-Website-Project/"
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "component",
    value: "https://github.com/sarabarredo/Animated-Product-Card",
    view: "https://sarabarredo.github.io/Animated-Product-Card/"
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web",
    value: "https://github.com/sarabarredo/Ecommerce-Landing-page",
    view: "https://sarabarredo.github.io/ecommerce-landing-page/"
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "component",
    value: "https://github.com/sarabarredo/Memory-Card-Game",
    view: "https://sarabarredo.github.io/Memory-Card-Game/"
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: 'component',
    value: 'https://github.com/sarabarredo/Credit-Card-Form',
    view: 'https://sarabarredo.github.io/Credit-Card-Form/'
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design",
    view: 'https://www.figma.com/community/file/1207708654383986729'
  }
]

export const workNavs = [
  "All", "Web", "Component", "Design"
]
