import React from 'react'
import "./index.css"
import me from "../../assets/me.jpg"

const About = () => {
  return (
    <section id="about" className="about">
        <h2>About me</h2>
        <div className="about-elements">
            <div className="about-text">
                <p>I am an undergraduate at DePauw University, majoring in Computer Science and Business Analytics. Originally from Vietnam, I am currently based in Greencastle, Indiana, where I continuously refine my technical skills and explore innovative solutions in the tech space. </p>
                <p>With hands-on experience in Web Development, I have built a solid foundation in developing dynamic, interactive web applications. My expertise extends beyond coding—I enjoy bridging the gap between technology and business, leveraging data-driven insights to create impactful solutions.</p>
                <p>I'm driven by curiosity—always eager to explore and learn something new. Beyond coding, I'm passionate about film and soccer, which keep me inspired and engaged. Whether it's discussing the latest movie or a thrilling match, I'm always up for a great conversation!</p>
            </div>
            <div className="about-image">
                <img src={me} alt=""/>
            </div>        
        </div>
    </section>
  )
}

export default About