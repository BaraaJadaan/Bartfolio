import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import OneForAll from "../../Assets/Projects/OneForAll.png";
import UpHills from "../../Assets/Projects/UpHills.png";
import Stocking from "../../Assets/Projects/Stocking.png";
import BrandingMind from "../../Assets/Projects/BrandingMind.png";
import NFTMarket from "../../Assets/Projects/NFTMarket.png";
import LightingBuilding from "../../Assets/Projects/Lighting&Building.png";
import GamerWiki from "../../Assets/Projects/GamerWiki.png";
import Footer from "../Footer";


function Projects() {
  return (
    <div>
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few that I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OneForAll}
              title="OneForAll"
              description="E-commerce website where people get to buy and sell products through a points-based billing system."
              ghLink="https://github.com/BaraaJadaan/OneForAll"
              demoLink="https://youtu.be/PU6Gmy2KrZI"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GamerWiki}
              title="GamerWiki"
              description="A reliable games search portal to find out games’ information and filter by popularity, release date, etc. Used Zustand, React Query and Typescript, Chakra UI, and RAWG API "
              ghLink="https://github.com/BaraaJadaan/gamer-wiki"
              demoLink="https://gamer-wiki-sepia.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Stocking}
              title="Stocking"
              description="Search for a stock and display its historical price changes and the latest finance news"
              ghLink="https://github.com/BaraaJadaan/Stocking"
              demoLink="https://baraajadaan.github.io/Stocking/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LightingBuilding}
              title="LightingBuilding"
              description="Modern landing page for a lighting selling company done using GSAP for animation and Tailwind for styling"
              ghLink="https://github.com/BaraaJadaan/lighting-building"
              demoLink="https://lighting-building.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={UpHills}
              title="UpHills"
              description="Modern landing page for a bikes leasing company done using pure CSS"
              ghLink="https://github.com/BaraaJadaan/UpHills"
              demoLink="https://baraajadaan.github.io/UpHills/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BrandingMind}
              title="Branding Mind"
              description="Modern website for a branding agency that showcase their portfolio"
              ghLink="https://github.com/BaraaJadaan/brandingmind"
              demoLink="https://baraajadaan.github.io/brandingmind/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NFTMarket}
              title="NFT Marketplace"
              description="A website inspired by a Figma design for a company that makes acquiring NFTs to be as easy as possible"
              ghLink="https://github.com/BaraaJadaan/nft-market"
              demoLink="https://baraajadaan.github.io/nft-market/"
            />
          </Col>
          
        </Row>

      </Container>
    </Container>
      <Footer/>
    </div>
  );
}

export default Projects;
