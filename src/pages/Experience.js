import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import { ExperienceData } from "../specs/ExperienceSpec.js";
import "./Experience.css";

function Experience() {
    const experienceCards = ExperienceData.map(data => (
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
        <div>
            <div className="title">
                <span className="pinkAccent">[</span>work
                <span className="pinkAccent">]</span>
            </div>
            {experienceCards}
        </div>
    );
}

export default Experience;
