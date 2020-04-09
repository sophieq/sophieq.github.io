import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Home from "../pages/Home";
import home_icon from "../assets/home_icon.png";
import "./NavBar.css";
import { PreviewData } from "../specs/ExperienceSpec.js";
import PreviewCard from "./PreviewCard";

function NavBar(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [workTab, setWorkTab] = useState("");
    const [aboutTab, setAboutTab] = useState("");

    const setActiveTab = id => {
        setWorkTab("");
        setAboutTab("");
        if (id === "work-tab") {
            setWorkTab("active");
        } else {
            setAboutTab("active");
        }
    };

    return (
        <Router>
            <Navbar light expand="md" fixed="top">
                <NavbarBrand className="nav-brand" href="/">
                    <img
                        src={home_icon}
                        className="logo expandOnHover"
                        alt="logo"
                    ></img>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to="/work">
                                <span
                                    className={"blue " + workTab + " nav-text"}
                                    onClick={() => setActiveTab("work-tab")}
                                >
                                    work.
                                </span>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/about">
                                <span
                                    className={
                                        "green " + aboutTab + " nav-text"
                                    }
                                    onClick={() => setActiveTab("about-tab")}
                                >
                                    about.
                                </span>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <a href="/">
                                <span className="nav-text yellow">resume.</span>
                            </a>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <Switch>
                <Route path="/about">
                    <div className="navbar-offset">
                        <About />
                    </div>
                </Route>
                <Route path="/work">
                    <WorkPage />
                </Route>
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    );
}

export default NavBar;

function HomePage() {
    const previewCards = PreviewData.map(data => (
        <PreviewCard
            key={data.company}
            img={data.img}
            company={data.company}
            title={data.title}
            description={data.description}
            skills={data.skills}
            color={data.color}
            link={data.link}
        ></PreviewCard>
    ));

    return (
        <div className="content">
            <Home></Home>
            <div className="header-title">in the past i've...</div>
            {previewCards}
        </div>
    );
}

function WorkPage() {
    return (
        <div className="content navbar-offset">
            <Experience></Experience>
        </div>
    );
}
