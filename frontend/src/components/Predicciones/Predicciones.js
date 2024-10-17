import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SpamGuard from "../../Assets/Projects/SpamGuard.png";
import PentestingAD from "../../Assets/Projects/Pentesting_AD.png";
import Type2 from "./Type2";

function Predicciones() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Nuestras <strong className="purple">PREDICCIONES </strong>
        </h1>
        <br />



{/*         <p style={{ color: "white" }}>
        In my free time, I enjoy working on projects that help me apply and deepen the theoretical knowledge I've gained
        over the years. These projects allow me to learn by doing, experimenting, and putting my skills into practice.
        <br />
        <br />
        If you have any ideas or would like to collaborate on a project, feel free to reach out.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={SpamGuard}
              isBlog={false}
              title="SpamGuard"
              description="AI-powered project focused on detecting spam e-mails by fine-tuning the Llama2 AI model.
              The project leverages advanced machine learning techniques and large language models (LLMs) to identify and
              flag potentially harmful email content with high accuracy. The model can identify non-desired e-mails, scam emails,
              fake giveaways, fake hacking emails, potentially harmful URLs, and more."
              ghLink="https://github.com/LinceAzul/malicious-mail-detector"
              demoLink="https://www.linkedin.com/posts/emilio-rodrigo-carreira-villalta-2a62aa250_projectdocumentation-activity-7238879148109135875-nhjs?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={PentestingAD}
              isBlog={false}
              title="Pentesting Windows AD"
              description="This project showcases a homemade lab environment for practicing pentesting on Windows Active Directory.
              The lab includes a Windows Server 2019 (Domain Controller), two Windows 10 clients, and a Kali Linux machine.
              The project dives deep into the complexities od Active Directory, exploring its architecture, common vulnerabilities,
              and real-world Proof of Concept (PoC) attacks"
              demoLink="https://www.linkedin.com/posts/ivan-iroslavov-petkov-80b960236_projectdocumentation-activity-7238919081498734592-8PvE?utm_source=share&utm_medium=member_desktop"
            />
          </Col>
        </Row>
        <div class="more-projects">
          <Type2 />
        </div> */}
        
      </Container>
    </Container>
  );
}

export default Predicciones;
