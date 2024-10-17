import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import Particle from "../Particle";
/* import Github from "./Github";
import Techstack from "./Techstack"; */
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
/* import Toolstack from "./Toolstack"; */

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Who am I?
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        {/* <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack /> */}

        <h1 className="project-heading">
        Relevant <strong className="purple">certifications</strong>
        </h1>
        <br />
        <Row className="certification-list">
          <Col md={6}>
            <ListGroup>
              <ListGroup.Item>Basic cyber security knowledge and experience (AOC 2020, TryHackMe)</ListGroup.Item>
              <ListGroup.Item>Practical Ethical Hacking (PEH, The Cyber Mentor)</ListGroup.Item>
              <ListGroup.Item>OCI Generative AI Certified Professional, Oracle</ListGroup.Item>
              <ListGroup.Item>Cyber Threat Management, ENISA</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={6}>
            <ListGroup>
              <ListGroup.Item>Fundamentals of AI in Cybersecurity, C1B3RWall Academy</ListGroup.Item>
              <ListGroup.Item>OPSEC Awareness for Military Members, DOD Employees and Contractors</ListGroup.Item>
              <ListGroup.Item>Cambridge Advanced Exam (CAE), C1 English level (C2 Spoken)</ListGroup.Item>
              <ListGroup.Item>Network Ethical Hacking, Hamza Seikh</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        
        <br />
        <h1 className="project-heading">
          What I <strong className="purple">Bring to the Table</strong>
        </h1>
        <div className="skills-container">
          <Row className="skill-list">
            <Col md={6}>
              <ListGroup>
                <ListGroup.Item className="skill-card">
                  <h3>🐧 Linux and Networking Skills</h3>
                  <p>Proficient in Linux, task automation, and virtualization.</p>
                  <p>
                    Skilled in network administration and wireless networks, with hands-on experience in traffic analysis, 
                    TCP/IP protocols, SSL/TLS, and network design using tools like Packet Tracer and GNS3.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="skill-card">
                  <h3>🛠️ Cybersecurity Knowledge</h3>
                  <p>
                    Skilled in using Kali Linux and various key tools such as Wireshark, Nmap, Metasploit, BurpSuite, 
                    Hydra, and many more.
                  </p>
                  <p>
                    Experienced in CTF challenges on platforms like TryHackMe, Hack The Box, TCM Academy, DVWA, and 
                    practicing real-world attack/defense scenarios in homemade labs.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="skill-card">
                  <h3>💻 Adept in Many Programming Languages</h3>
                  <p>
                    Experience in Java developing compilers (CUP, JFLEX), socket management, web design (SpringBoot, JPA, ...).
                  </p>
                  <p>
                    Competent in other languages: C/C++, SQL, PL/SQL, Python, Angular, Bash, Assembly, etc.
                  </p>
                  <p>
                    Advanced experience in C/C++, SQL, Haskell, CUP, JFLEX, HTML, CSS, TypeScript, Angular, SpringBoot, 
                    and JPA, with basic knowledge of Python, ARM, and Bash scripting.
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={6}>
              <ListGroup>
                <ListGroup.Item className="skill-card">
                  <h3>🚀 Passionate Learner and Excellent Communicator</h3>
                  <p>
                    Eager to continuously expand my expertise, especially in dynamic fields such as cybersecurity or AI.
                  </p>
                  <p>
                    Approachable and communicative, I thrive on sharing knowledge and connecting with others.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="skill-card">
                  <h3>💼 Problem Solver</h3>
                  <p>
                    Proficient in addressing complex challenges with a systematic approach. I excel in identifying 
                    issues and implementing effective solutions that enhance operational efficiency across diverse contexts.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="skill-card">
                  <h3>📚 Self-Motivated and Dedicated</h3>
                  <p>
                    Committed to lifelong learning and ongoing self-education in cybersecurity and technology.
                  </p>
                  <p>
                    Fully invested in putting forth my best effort to achieve goals and overcome challenges.
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </div>


        {/*<h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1> */}
        {/* <Toolstack /> */}

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
