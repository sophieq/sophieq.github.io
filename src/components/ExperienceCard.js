import React, { useState } from "react";
import "./ExperienceCard.css";
import SkillTag from "../components/SkillTag";
import { Collapse } from "reactstrap";

function ExperienceCard(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const listSkills = props.skills.map(skill => (
        <SkillTag key={skill} name={skill} color={props.color}></SkillTag>
    ));

    return (
        <div
            className="ExperienceCard expandOnHover"
            style={{ backgroundColor: props.color }}
            onClick={toggle}
        >
            <img
                className="work-image"
                src={props.img}
                alt="Company Logo"
            ></img>
            <Collapse isOpen={isOpen}>
                <div className="overlay">
                    <div className="ex-content">
                        <div className="ex-title">{props.company}</div>
                        <div className="ex-subtitle"> {props.title}</div>
                        <div className="ex-description">
                            {" "}
                            {props.description}
                        </div>
                        <div className="skills-container">{listSkills}</div>
                    </div>
                </div>
            </Collapse>
        </div>
    );
}

export default ExperienceCard;
