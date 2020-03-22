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
import Projects from "../pages/Projects";
import "./NavBar.css";

function NavBar(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Router>
            <Navbar light expand="md" fixed="top">
                <NavbarBrand className="nav-brand" href="/">
                    <img src={home_icon} className="logo" alt="logo"></img>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to="/">
                                <div className="underline pink">work</div>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/projects">
                                <div className="underline blue">projects</div>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/about">
                                <div className="underline green">about</div>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <a href="/">
                                <div className="underline yellow">resume</div>
                            </a>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <Switch>
                <Route path="/about">
                    <About></About>
                </Route>
                <Route path="/">
                    <HomeSplash />
                </Route>
            </Switch>
        </Router>
    );
}

export default NavBar;

function HomeSplash() {
    return (
        <div className="content">
            <Home></Home>
            <Experience></Experience>
            <Projects></Projects>
        </div>
    );
}
