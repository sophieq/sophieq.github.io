import React, { useRef } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PreviewData } from "../specs/ExperienceSpec.js";
import PreviewCard from "../components/PreviewCard";
import homepagePhoto from "../assets/sophie-homepage.png";

function Home() {
    const previewCards = PreviewData.map((data) => (
        <div key={data.color}>
            <PreviewCard
                img={data.img}
                description={data.description}
                color={data.color}
            ></PreviewCard>
        </div>
    ));

    const scrollToPreview = (ref) =>
        window.scrollTo({
            behavior: "smooth",
            top: ref.current.offsetTop,
        });
    const previewRef = useRef(null);
    const executeScroll = () => scrollToPreview(previewRef);

    return (
        <div>
            <div className="Home">
                <div className="header-container">
                    <div className="header">
                        <div className="photo-position">
                            <div>
                                <img
                                    className="homepage-image"
                                    src={homepagePhoto}
                                    alt="me"
                                ></img>
                            </div>
                            <div className="home-title">
                                <span className="pink-highlight">
                                    hello! nice to meet you.
                                </span>
                            </div>
                        </div>
                        <div className="home-description">
                            I'm Sophie Qin, a computer science student
                            passionate about creating tech solutions that will
                            impact people in a meaningful way. Previously, I've
                            interned at{" "}
                            <a
                                href="http://www.wish.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pinkAccent"
                            >
                                Wish
                            </a>
                            ,{" "}
                            <a
                                href="http://www.wattpad.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pinkAccent"
                            >
                                Wattpad
                            </a>{" "}
                            and{" "}
                            <a
                                href="http://www.tdlab.io"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pinkAccent"
                            >
                                TD Lab
                            </a>
                            .
                        </div>
                        <div className="home-description">
                            I'm currently looking for{" "}
                            <span className="pink-highlight">
                                {" "}
                                Fall 2020 Internship
                            </span>{" "}
                            opportunities.
                        </div>
                        <div className="home-description">
                            Can't stay long?{" "}
                            <a href="/" className="pinkAccent">
                                Click here for a one-page summary.
                            </a>
                        </div>
                        <div
                            className="home-description pinkAccent hover-div"
                            onClick={executeScroll}
                        >
                            Check out some of my work below.
                            <div id="arrow-down">
                                <FontAwesomeIcon icon="chevron-down" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="preview-title" ref={previewRef}>
                I've had a hand at...
            </div>
            <div className="preview-container">{previewCards}</div>
            <div className="view-more-tag">
                ...want to learn more?{" "}
                <a href="/work" className="pinkAccent">
                    View all my work.
                </a>
            </div>
        </div>
    );
}

export default Home;
