import React, { Component } from "react";
import display_pic from "../assets/sophie_dp.png";
import "./About.css";

class About extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="About content">
                <div className="about-content">
                    <div>
                        <img
                            loading="lazy"
                            className="display-image fade-in-right"
                            src={display_pic}
                            alt="me"
                        ></img>
                    </div>
                    <div className="about-text">
                        <div className="header-title">
                            <span className="highlight-green">
                                a little about me.
                            </span>
                        </div>
                        <p>
                            I’m a third year computer science student studying
                            at the{" "}
                            <a
                                href="https://uwaterloo.ca"
                                className="greenAccent"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                University of Waterloo
                            </a>
                            . I love to learn and I'd like to think I have a
                            knack for picking up new skills.
                        </p>
                        <p>
                            In the future, I want to write code that will{" "}
                            <span className="highlight-green">
                                unlock answers to the biggest issues
                            </span>{" "}
                            the world is facing today. To help me in that
                            journey, I'm sharpening my skills through
                            internships at{" "}
                            <a
                                href="http://www.wish.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="greenAccent"
                            >
                                Wish
                            </a>
                            ,{" "}
                            <a
                                href="http://www.wattpad.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="greenAccent"
                            >
                                Wattpad
                            </a>{" "}
                            and{" "}
                            <a
                                href="http://www.tdlab.io"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="greenAccent"
                            >
                                TD Lab
                            </a>
                            . Within the local tech community, I've been a
                            project developer for{" "}
                            <a
                                href="https://uwblueprint.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="greenAccent"
                            >
                                UW Blueprint
                            </a>{" "}
                            and currently, I'm an organizer for{" "}
                            <a
                                href="https://hackthenorth.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="greenAccent"
                            >
                                Hack the North
                            </a>
                            .
                        </p>
                        <p>
                            Outside of coding, I spend my days reading about
                            greek mythology, watching Brooklyn 99, and chilling
                            out to{" "}
                            <a
                                href="https://www.youtube.com/watch?v=5qap5aO4i9A"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="greenAccent"
                            >
                                lofi hip hop music - beats to relax/study to
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
