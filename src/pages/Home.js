import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
    return (
        <div className="Home">
            <div className="headerContainer">
                <div className="header">
                    <h1>Sophie Qin</h1>
                    <div>
                        Past SWE intern at Wish, Wattpad and TD.
                        <br></br>
                        Current Computer Science ‘22 student at the University
                        of Waterloo.
                        <br></br>
                        Future tech maker hoping to make a big impact.
                        <br></br>
                        <br></br>
                        Check out some of my work.
                    </div>
                </div>
                <div id="arrow-down">
                    <FontAwesomeIcon icon="chevron-down" />
                </div>
            </div>
        </div>
    );
}

export default Home;
