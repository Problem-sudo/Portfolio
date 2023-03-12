import React from "react";
import "./Intro.css";

import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import {useContext} from "react";
import {motion} from 'framer-motion'

import { Link } from "react-scroll";
const Intro = () => {
    const transition ={duraton : 2,type : 'spring'}
   

  // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="Intro" id="Intro">
            <div className="i-left">
             <div className="i-name">

             <span style={{ color: darkMode ? 'white': '' }}> Hy! I Am</span>
             <span>Anit Maurya</span>
             <span>Frontend Developer with high level
            of experience in web designing
            and development, 
            producting the Quality work</span>
             </div>
             
             <Link to="portfolio" spy={true} smooth={true}>
          <button className="button i-button">Hire me</button>
            </Link>
            <div className="i-icons">
                <a href='https://github.com/Problem-sudo'>

            <img src={Github} alt="" />
                </a>
                <a href='https://www.linkedin.com/in/anit-maurya-77853b1bb/'>

            <img src={LinkedIn} alt="" />
                </a>
                <a href='https://www.instagram.com/anit._.m/'>

            <img src={Instagram} alt="" />
                </a>
            </div>
            
 
            </div>
            <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />

        
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

         <motion.div 
         initial={{top:'-4%', left:'74%'}}
         whileInView={{left:'68%'}}
         transition={transition}

         style ={{top: "-4%",left: "68%"}}>
          <FloatingDiv image={Crown} 
          text1='Softwere' text2="Developer" />
        </motion.div>

            
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatingDiv image={thumbup} text1="Web " text2="Developer" />

        </motion.div>

            <div className="blur" style={{background: "rgb(238 210 255)"}}></div>

            <div className="blur" style={{background: '#C1F5FF',
                                       top:'17rem',width:'21rem',
                                       height:'11rem',left:'-11rem'}}></div>
            </div>
            

        </div>
        
    )
}

export default Intro;

