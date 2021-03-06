import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Home from "../pages/Home";
import home_icon from "../assets/home_icon.png";
import "./NavBar.css";

function NavBar(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [homeTab, setHomeTab] = useState("active");
    const [workTab, setWorkTab] = useState("");
    const [aboutTab, setAboutTab] = useState("");
    const setActiveTab = (id) => {
        setHomeTab("");
        setWorkTab("");
        setAboutTab("");
        if (id === "work-tab") {
            setWorkTab("active");
        } else if (id === "about-tab") {
            setAboutTab("active");
        } else if (id === "home-tab") {
            setHomeTab("active");
        }
    };

    return (
        <Router>
            <Navbar light expand="md" fixed="top">
                <Link to={"/"}>
                    <img
                        src={home_icon}
                        className={homeTab + " logo"}
                        onClick={() => {
                            setActiveTab("home-tab");
                            window.scrollTo({
                                top: 0,
                            });
                        }}
                        alt="logo"
                    ></img>
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to={"/work"}>
                                <span
                                    className={"blue " + workTab + " nav-text"}
                                    onClick={() => setActiveTab("work-tab")}
                                >
                                    work.
                                </span>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to={"/about"}>
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
                            <a
                                href="mailto:hello@sophieqin.me"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="nav-text yellow">say hello.</span>
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
    return (
        <div className="content navbar-offset">
            <Home></Home>
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
