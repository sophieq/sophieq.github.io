import React, { useState } from "react";
import SkillTag from "../components/SkillTag";
import { Collapse, Col } from "reactstrap";
import "./ProjectCard.css";

function ProjectCard(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const listSkills = props.skills.map((skill) => (
        <SkillTag key={skill} name={skill} color={props.color}></SkillTag>
    ));

    return (
        <Col>
            <div
                className="ProjectCard expandOnHover"
                style={{ backgroundColor: props.color }}
                onClick={toggle}
            >
                <img
                    className="work-image-lg"
                    src={props.img}
                    alt="Company Logo"
                ></img>
                <Collapse isOpen={isOpen}>
                    <div className="overlay">
                        <div className="proj-content">
                            <div>
                                <div className="ex-title">{props.company}</div>
                                <div className="ex-subtitle">{props.title}</div>
                            </div>
                            <div className="proj-description">
                                {props.description}
                            </div>
                            <div className="skills-container">{listSkills}</div>
                        </div>
                    </div>
                </Collapse>
            </div>
        </Col>
    );
}

export default ProjectCard;
