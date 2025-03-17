import React from 'react'
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import "./index.css";


const Contact = () => {
  return (
    <section className = "contact">
        <div className = "contact-method">
            <div className = "contact-button">
                <a href="http://linkedin.com/in/thequantran" target="_blank"  rel="noreferrer">
                    <span className="icon"><FaLinkedin /></span>LinkedIn
                </a>
            </div>
            <div className = "contact-button">
                <a href="https://github.com/Quantr10" target="_blank"  rel="noreferrer">
                    <span className="icon"><FaGithub /></span>GitHub
                </a>
            </div>
            <div className = "contact-button">
                <a href="https://drive.google.com/file/d/1Boh_u1Z9fRMMQIJe2eD8kVt65L3YLpyl/view?usp=sharing" target="_blank"  rel="noreferrer">
                    <span className="icon"><IoDocumentText /></span>Resume
                </a>
            </div>
            <div className="contact-button">
                <a href="mailto:thequantran2005@gmail.com">
                    <span className="icon"><FaEnvelope /></span>Email
                </a>
            </div>
        </div>
    </section>
  )
}

export default Contact;