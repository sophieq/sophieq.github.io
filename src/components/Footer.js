import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className="Footer content">
            <div className="header-title">
                <span className="highlight-yellow">say hello.</span>
            </div>
            <div className="footer-description">
                Think we could make something <span role="img">✨</span>magical
                <span role="img">✨</span> together? I'm looking for Summer 2021
                internship opportunities. Let's chat!
            </div>
            <div className="socials">
                <a
                    href="https://www.linkedin.com/in/sophie-q/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="yellowAccent social-link"
                >
                    linkedin.
                </a>
                <br></br>
                <a
                    href="mailto:sophieeqin@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="yellowAccent social-link"
                >
                    email.
                </a>
                <br></br>
                <a
                    href="https://github.com/sophieq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="yellowAccent social-link"
                >
                    github.
                </a>
            </div>
            <div className="end-tag">
                Designed and{" "}
                <a
                    href="https://github.com/sophieq/sophie-website-v2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="yellowAccent"
                >
                    developed
                </a>{" "}
                with ☕️ by Sophie Qin © 2020.
            </div>
        </div>
    );
}

export default Footer;
