import React, { useState } from "react";
import "./ExperienceCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillTag from "./SkillTag.js";
import { Collapse } from "reactstrap";

function ExperienceCard(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const skills = props.skills;
    const listSkills = skills.map(skill => (
        <SkillTag key={skill} name={skill} color={props.color}></SkillTag>
    ));

    return (
        <div
            className="ExperienceCard"
            style={{
                backgroundColor: props.color,
                borderColor: props.color,
                boxShadow: `1px 5px 8px ${props.color}`
            }}
        >
            <div
                className="image-background-color"
                style={{ backgroundColor: props.color }}
            >
                <img
                    className="ex-image"
                    src={props.img}
                    alt="Company Logo"
                ></img>
            </div>
            <div className="card-body">
                <div className="ex-title">{props.company}</div>
                <p className="subtitle">{props.title}</p>
                <div className="tags-desc-container">
                    <div className="tags">
                        <div className="skills-container">{listSkills}</div>
                        <div className="link-div">
                            <a
                                href={props.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon="external-link-alt"
                                    className="link"
                                    style={{ color: props.color }}
                                />
                            </a>
                        </div>
                    </div>
                    <Collapse isOpen={isOpen}>
                        <div>
                            <p className="description">{props.description}</p>
                        </div>
                    </Collapse>
                </div>
                <div className="see-more-container" onClick={toggle}>
                    <div style={{ color: props.color }}>
                        <strong>See More</strong>
                    </div>
                    <div>
                        <FontAwesomeIcon
                            icon="chevron-down"
                            className="ex-arrow"
                            style={{ color: props.color }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperienceCard;
