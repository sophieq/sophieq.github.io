import React, { useState } from "react";
import "./PreviewCard.css";
import SkillTag from "./SkillTag.js";

function PreviewCard(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const skills = props.skills;
    const listSkills = skills.map((skill) => (
        <SkillTag key={skill} name={skill} color={props.color}></SkillTag>
    ));

    return (
        <div
            className="PreviewCard expandOnHover"
            style={{
                backgroundColor: props.color,
                boxShadow: `1px 5px 8px ${props.color}`,
            }}
        >
            <div
                className="image-background-color"
                style={{ backgroundColor: props.color }}
            >
                <img
                    className="preview-image"
                    src={props.img}
                    alt="Company Logo"
                ></img>
            </div>
            <div className="card-body">
                <div className="preview-text" style={{ color: props.color }}>
                    doing a lot of things
                </div>
            </div>
        </div>
    );
}

export default PreviewCard;
