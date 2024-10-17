import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight, ImArrowRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="blue">Ivan Iroslavov</span>, a Computer Science and Engineering graduate
            with a passion for cybersecurity. Originally from Bulgaria, I currently reside in Spain, exploring the
            intersections of technology, security, and innovation.
            <br />
            I enjoy conducting my own research and continuously expanding my knowledge. Passionate about learning,
            I'm always eager to work across various technologies and domains, with a particular interest in {" "} 
            <span className="red">Offensive Cybersecurity </span>.
            <br />
            I am constantly seeking opportunities to learn and attend important events such as II and III Cybersecurity
            Congress of Andalusia, ARITH 2024 (where I was part of the staff), DES 2023 and 2024, YOLO Vision 2024,
            and several tech conferences on AI and cybersecurity across various cities in Spain.
            <br />
            <br />
            Aside from my technological interests, I also enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImArrowRight /> Doing extreme sports
            </li>
            <li className="about-activity">
              <ImArrowRight /> Martial arts
            </li>
            <li className="about-activity">
              <ImArrowRight /> Gymnastics
            </li>
          </ul>
          <p style={{ textAlign: "justify" }}>
          As an extrovert, I thrive on social connections and enjoy learning new languages to connect with
          people from all over the world. I currently speak the following languages:
          </p>
          <ul>
            <li className="about-activity">
              Spanish: ⭐⭐⭐⭐⭐ (5/5)
            </li>
            <li className="about-activity">
              English: ⭐⭐⭐⭐⭐ (5/5)
            </li>
            <li className="about-activity">
              Bulgarian: ⭐⭐⭐⭐ (4/5)
            </li>
            <li className="about-activity">
              French: ⭐⭐ (2/5)
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
