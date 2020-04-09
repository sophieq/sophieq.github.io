import React, { Component } from "react";
import ExperienceCard from "../components/ExperienceCard";
import ProjectCard from "../components/ProjectCard";
import {
    WorkData,
    ExtracurricularData,
    ProjectData
} from "../specs/ExperienceSpec.js";
import { Row } from "reactstrap";
import "./Experience.css";

class Experience extends Component {
    constructor(props) {
        super(props);
        this.industryRef = React.createRef();
        this.extracurricularRef = React.createRef();
        this.projectRef = React.createRef();
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const scrollToIndustryRef = () =>
            window.scrollTo({
                behavior: "smooth",
                top: this.industryRef.current.offsetTop
            });

        const scrollToExtracurricularRef = () =>
            window.scrollTo({
                behavior: "smooth",
                top: this.extracurricularRef.current.offsetTop
            });

        const scrollToProjectRef = () =>
            window.scrollTo({
                behavior: "smooth",
                top: this.projectRef.current.offsetTop
            });

        const workCards = WorkData.map(data => (
            <ExperienceCard
                key={data.company}
                img={data.img}
                company={data.company}
                title={data.title}
                description={data.description}
                skills={data.skills}
                color={data.color}
                link={data.link}
                isShortCard={data.isShortCard}
            ></ExperienceCard>
        ));
        const ExtracurricularCards = ExtracurricularData.map(data => (
            <ExperienceCard
                key={data.company}
                img={data.img}
                company={data.company}
                title={data.title}
                description={data.description}
                skills={data.skills}
                color={data.color}
                link={data.link}
                isShortCard={data.isShortCard}
            ></ExperienceCard>
        ));
        const ProjectCards = ProjectData.map(project => (
            <ProjectRow key={project[0].title} project={project} />
        ));

        return (
            <div className="Experience">
                <div className="header-title">
                    <span className="highlight-blue">
                        cool things I've built.
                    </span>
                </div>
                <div className="work-subtitle">
                    checkout out my work in <br></br>
                    <span className="blue" onClick={scrollToIndustryRef}>
                        industry.
                    </span>{" "}
                    <br></br>
                    <span className="blue" onClick={scrollToExtracurricularRef}>
                        extracurriculars.
                    </span>{" "}
                    <br></br>
                    <span className="blue" onClick={scrollToProjectRef}>
                        projects.
                    </span>
                </div>
                <div className="work-title" ref={this.industryRef}>
                    industry.
                </div>
                {workCards}
                <div className="work-title" ref={this.extracurricularRef}>
                    extracurriculars.
                </div>
                {ExtracurricularCards}
                <div className="work-title" ref={this.projectRef}>
                    projects.
                </div>
                {ProjectCards}
            </div>
        );
    }
}

export default Experience;

function ProjectRow(props) {
    const projectRow = props.project.map(data => (
        <ProjectCard
            key={data.company}
            img={data.img}
            company={data.company}
            title={data.title}
            description={data.description}
            skills={data.skills}
            color={data.color}
            link={data.link}
            isShortCard={data.isShortCard}
        ></ProjectCard>
    ));
    return (
        <Row xs="1" md="2">
            {projectRow}
        </Row>
    );
}
