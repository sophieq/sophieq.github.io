import React, { Component } from "react";
import ExperienceCard from "../components/ExperienceCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectCard from "../components/ProjectCard";
import {
    WorkData,
    ExtracurricularData,
    ProjectData,
} from "../specs/ExperienceSpec.jsx";
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
                top: this.industryRef.current.offsetTop,
            });

        const scrollToExtracurricularRef = () =>
            window.scrollTo({
                behavior: "smooth",
                top: this.extracurricularRef.current.offsetTop,
            });

        const scrollToProjectRef = () =>
            window.scrollTo({
                behavior: "smooth",
                top: this.projectRef.current.offsetTop,
            });

        const scrollToTop = () =>
            window.scrollTo({
                behavior: "smooth",
                top: 0,
            });

        const workCards = WorkData.map((data) => (
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
        const ExtracurricularCards = ExtracurricularData.map((data) => (
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
        const ProjectCards = ProjectData.map((project) => (
            <ProjectRow key={project[0].title} project={project} />
        ));

        return (
            <div className="Experience fade-in-up">
                <div className="header-title">
                    <span className="highlight-blue">
                        cool things I've built.
                    </span>
                </div>
                <div className="work-subtitle">
                    <div> Checkout out my work in: </div>
                    <div>
                        <span
                            className="blueAccent footer-link"
                            onClick={scrollToIndustryRef}
                        >
                            industry.
                        </span>
                    </div>
                    <div>
                        <span
                            className="blueAccent footer-link"
                            onClick={scrollToExtracurricularRef}
                        >
                            extracurriculars.
                        </span>
                    </div>
                    <div>
                        <span
                            className="blueAccent footer-link"
                            onClick={scrollToProjectRef}
                        >
                            projects.
                        </span>
                    </div>
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
                <div className="scroll-tag blueAccent" onClick={scrollToTop}>
                    <div className="arrow-up ">
                        <FontAwesomeIcon icon="chevron-up" />
                    </div>
                    <span href="/work">jump back to the top.</span>
                </div>
            </div>
        );
    }
}

export default Experience;

function ProjectRow(props) {
    const projectRow = props.project.map((data) => (
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
