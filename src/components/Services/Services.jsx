import React, { useContext } from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from './Anit_CV.pdf';
import { themeContext } from "../../Context";
import { motion } from "framer-motion";


const Services = () => {
  const transition = {
  duration: 1,
    type: "spring",
  };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id ='Services'>
        {/* left sidr */}
        <div className="awesome">
        <span  style={{ color: darkMode ? "white" : "" }}> My Awesome</span>
        <span>services</span>
        {/* <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane> */}
        <a  href={Resume} download>

        <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
          
        </div>
        {/* rigth side */}
        <div className="cards">
            {/* first card */}
            <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </motion.div>
             {/* second card */}
             <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React js, Node js,PHP"}
          />
        </motion.div>
             {/* third card */}
             <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Softwere developer"}
            detail={
              "Data Structure and Algorithm"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
             <div className="blur s-blur2" style ={{background: "var(--purple)" }}></div>
        </div>
    </div>
  )
}

export default Services
