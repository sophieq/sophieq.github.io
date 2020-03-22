import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import { ProjectData } from "../specs/ExperienceSpec.js";
import "./Projects.css";

function Projects() {
    const experienceCards = ProjectData.map(data => (
        <ExperienceCard
            key={data.company}
            img={data.img}
            company={data.company}
            title={data.title}
            description={data.description}
            skills={data.skills}
            color={data.color}
            link={data.link}
        ></ExperienceCard>
    ));
    return (
        <div className="Projects">
            <div className="project-section-title">
                <span className="blueAccent">[</span>projects
                <span className="blueAccent">]</span>
            </div>
            {experienceCards}
        </div>
    );
}

export default Projects;
