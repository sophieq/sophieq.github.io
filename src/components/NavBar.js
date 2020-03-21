import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from "reactstrap";
import "./NavBar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import About from "../pages/About";
import home_icon from "../assets/home_icon.png";

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
        <div>
            <Home></Home>
            <Experience></Experience>
            <Projects></Projects>
        </div>
    );
}
