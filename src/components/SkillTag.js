import React from "react";
import "./SkillTag.css";

function SkillTag(props) {
    return (
        <div className="skill-tag" style={{ backgroundColor: props.color }}>
            {props.name}
        </div>
    );
}

export default SkillTag;
