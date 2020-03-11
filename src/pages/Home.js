import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExperienceCard from "../components/ExperienceCard";
import { Strings } from "../utils/Strings.js";

function Home() {
  return (
    <div className="Home">
      <div className="headerContainer">
        <div className="header">
          <h1>
            <span className="pinkAccent">[</span>
            Hi! I'm Sophie Qin
            <span className="pinkAccent">]</span>
          </h1>
          <div>
            Past SWE intern at Wish, Wattpad and TD.
            <br></br>
            Current Computer Science ‘22 student at the University of Waterloo.
            <br></br>
            Future tech maker hoping to make a big impact.
            <br></br>
            <br></br>
            Check out some of my work.
          </div>
          <div id="arrow-down">
            <FontAwesomeIcon icon="chevron-down" />
          </div>
        </div>
      </div>
      <ExperienceCard
        company={Strings.WishCompany}
        title={Strings.WishTitle}
        description={Strings.WishDescription}
      ></ExperienceCard>
    </div>
  );
}

export default Home;
