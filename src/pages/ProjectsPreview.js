import React from "react";
import { ProjectData } from "../specs/ProjectSpec.js";
import ProjectCard from "../components/ProjectCard.js";
import "./ProjectPreview.css";

function ProjectsPreview() {
    const projectCards = ProjectData.map(data => (
        <ProjectCard
            key={data.title}
            title={data.title}
            subtitle={data.subtitle}
            description={data.description}
            skills={data.skills}
            link={data.link}
        ></ProjectCard>
    ));
    return (
        <div>
            <div className="title">projects.</div>
            {projectCards}
            <div className="view-all-container">
                <a href="projects" className="view-all">
                    view all
                </a>
            </div>
        </div>
    );
}

export default ProjectsPreview;
