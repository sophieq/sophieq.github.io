import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";
import "./NavBar.css";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="NavBar">
            <Navbar light expand="md">
                <NavbarBrand className="nav-brand" href="/">
                    sophie
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">
                                <div className="underline pink">work</div>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">
                                <div className="underline blue">projects</div>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">
                                <div className="underline green">about</div>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">
                                <div className="underline yellow">resume</div>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;
