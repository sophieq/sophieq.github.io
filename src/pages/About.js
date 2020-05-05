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
                            className="display-image"
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
                            I’m a third year computer science student at the
                            University of Waterloo with a passion for women
                            empowerment and coding for social good.
                        </p>
                        <p>
                            I love learning and I'd like to think I have a knack
                            for picking up new skills. With experience as a
                            mobile developer, I hope to grow my knowledge in
                            human computer.
                        </p>
                        <p>
                            Outside of coding, I spend my days discovering new
                            music, reading, in a Zumba class or getting scared
                            by true crime podcasts.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
