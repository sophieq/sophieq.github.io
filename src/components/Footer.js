import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className="Footer content">
            <div className="socials">
                <div className="header-title">
                    <span className="highlight-yellow">get in touch.</span>
                </div>
                <a
                    href="https://www.linkedin.com/in/sophie-q/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    linkedin.
                </a>
                <br></br>
                <a
                    href="mailto:sophieeqin@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    email.
                </a>
                <br></br>
                <a
                    href="https://github.com/sophieq"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    github.
                </a>
            </div>
            <div className="end-tag">
                designed and{" "}
                <a
                    href="https://github.com/sophieq/sophie-website-v2"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    developed
                </a>{" "}
                by Sophie Qin.
            </div>
        </div>
    );
}

export default Footer;
