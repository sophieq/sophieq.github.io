import React from "react";
import display_pic from "../assets/sophie_dp.png";
import "./About.css";

function About() {
    return (
        <div className="About">
            <div className="about-title">
                <span className="greenAccent">[</span>about
                <span className="greenAccent">]</span>
            </div>
            <div className="about-content">
                <div>
                    <img
                        className="display-image"
                        src={display_pic}
                        alt="Protrait"
                    ></img>
                </div>
                <div className="about-text">
                    <div class="about-subtitle">hello! it's me.</div>
                    <p>
                        I’m a 3rd year Computer Science student at the
                        University of Waterloo with a passion for women
                        empowerment and coding for social good.
                    </p>
                    <p>
                        I love learning and I'd like to think I have a knack for
                        picking up new skills. With experience as a mobile
                        developer, I hope to grow my knowledge in machine
                        learning, backend and web development.
                    </p>
                    <p>
                        Outside of coding, I spend my days discovering new
                        music, reading, in a Zumba class or getting scared by
                        true crime podcasts.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
