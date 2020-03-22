import React, { useState } from "react";
import { ProjectPreviewData, ProjectData } from "../specs/ProjectSpec.js";
import ProjectCard from "../components/ProjectCard.js";
import "./Projects.css";
import { Collapse, Col, Row } from "reactstrap";

function Projects() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const projectPreviewCards = ProjectPreviewData.map(data => (
        <Col md="6" lg="4">
            <ProjectCard
                key={data.title}
                title={data.title}
                subtitle={data.subtitle}
                description={data.description}
                skills={data.skills}
                link={data.link}
            ></ProjectCard>
        </Col>
    ));
    const projectCards = ProjectData.map(data => (
        <Col md="6">
            <ProjectCard
                key={data.title}
                title={data.title}
                subtitle={data.subtitle}
                description={data.description}
                skills={data.skills}
                link={data.link}
            ></ProjectCard>
        </Col>
    ));
    return (
        <div>
            <div className="title">
                <span className="blueAccent">[</span>projects
                <span className="blueAccent">]</span>
            </div>
            <Row>{projectPreviewCards}</Row>
            <Collapse isOpen={isOpen}>
                <div>{projectCards}</div>
            </Collapse>
            <div className="view-all-container">
                <div className="view-all" onClick={toggle}>
                    view all
                </div>
            </div>
        </div>
    );
}

export default Projects;
