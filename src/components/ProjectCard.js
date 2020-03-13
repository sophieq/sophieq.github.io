import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./Icon.png";
import SkillTag from "../components/SkillTag";
import "./ProjectCard.css";

function ProjectCard(props) {
    const skills = props.skills;
    const listSkills = skills.map(skill => (
        <SkillTag key={skill} name={skill}></SkillTag>
    ));

    return (
        <div className="ProjectCard">
            <div className="image-background-color">
                <img className="image" src={logo} alt="Product"></img>
            </div>
            <div className="card-body">
                <h2>{props.title}</h2>
                <p className="subtitle">{props.subtitle}</p>
                <div>
                    <p className="description">{props.description}</p>
                </div>
                <div className="footer">
                    <div className="skills-container">{listSkills}</div>
                    <div className="link-div">
                        <a href={props.link}>
                            <FontAwesomeIcon
                                icon="external-link-alt"
                                className="link"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
