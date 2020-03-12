import React, { useState } from "react";
import "./ExperienceCard.css";
import logo from "./Icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillTag from "./SkillTag.js";
import { Collapse } from "reactstrap";

function ExperienceCard(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const skills = props.skills;
    const listSkills = skills.map(skill => (
        <SkillTag key={skill} name={skill}></SkillTag>
    ));

    return (
        <div className="ExperienceCard" style={{ borderColor: props.color }}>
            <div
                className="image-background-color"
                style={{ backgroundColor: props.color }}
            >
                <img className="image" src={logo} alt="ProductImage"></img>
            </div>
            <div className="card-body">
                <h2>{props.company}</h2>
                <p className="subtitle">{props.title}</p>
                <Collapse isOpen={isOpen}>
                    <div>
                        <p className="description">{props.description}</p>
                    </div>
                </Collapse>
                <div className="footer">
                    <div className="skills-container">{listSkills}</div>
                    <div className="link-div">
                        <FontAwesomeIcon
                            icon="external-link-alt"
                            className="link"
                            style={{ color: props.color }}
                        />
                    </div>
                </div>
                <div className="see-more-container" onClick={toggle}>
                    <div style={{ color: props.color }}>
                        <strong>See More</strong>
                    </div>
                    <div>
                        <FontAwesomeIcon
                            icon="chevron-down"
                            className="arrow"
                            style={{ color: props.color }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperienceCard;
