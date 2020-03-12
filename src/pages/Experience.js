import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import { ExperienceData } from "../utils/ExperienceSpec.js";

function Experience() {
    const experienceCards = ExperienceData.map(data => (
        <ExperienceCard
            key={data.company}
            company={data.company}
            title={data.title}
            description={data.description}
            skills={data.skills}
            color={data.color}
        ></ExperienceCard>
    ));
    return <div>{experienceCards}</div>;
}

export default Experience;
