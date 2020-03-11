import React, { useState } from "react";
import "./ExperienceCard.css";
import logo from "./Icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillTag from "./SkillTag.js";
import { Collapse } from "reactstrap";

function ExperienceCard(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="ExperienceCard">
      <div className="image-background-color">
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
          <div className="skills-container">
            <div className="skills-tag">
              <SkillTag name="iOS"></SkillTag>
            </div>
          </div>
          <div onClick={toggle}>
            <FontAwesomeIcon icon="chevron-down" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
