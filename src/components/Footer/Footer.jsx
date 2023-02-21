import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>portfolioanit@gmail.com</span>
        <div className="f-icons">
            <a href="https://www.instagram.com/anit._.m/">

          <Insta color="white" size={"3rem"} />
            </a>
            
            <a href ="https://www.facebook.com/anit.maurya.5/">
          <Facebook color="white" size={"3rem"} />

            </a>
            <a href="https://github.com/Problem-sudo">
          <Gitub color="white" size={"3rem"} />

            </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;