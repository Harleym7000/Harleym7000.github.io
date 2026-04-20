import React, {ReactElement, useCallback, useEffect, useRef, useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Typography} from "@mui/material";
import logo from "../logo.png";

export default function NavBootstrap(): ReactElement {
    return (
        <>
            <Navbar collapseOnSelect expand="lg"
                    className={"headerNav text-white nav-scrolled"} fixed={"top"}>
                <Container fluid>
                    <div className="headerNavContainer mx-5">
                        <a href="/" className="headerNavLogo d-flex align-items-center text-decoration-none">
                            <Image src={logo} width={50} alt="HM Tech Logo"/>
                            <Typography
                                className="ms-1"
                                variant="h5"
                                component="span"
                            >
                                HM Tech Solutions
                            </Typography>
                        </a>
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav className="d-flex justify-content-end navlinks me-5">
                            <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
                            <Nav.Link className="nav-link" href={"#about"}>About</Nav.Link>
                            {/*<Nav.Link className="nav-link" href={"#webUIDesign"}>Web/UI Design</Nav.Link>*/}
                            {/*<Nav.Link className="nav-link" href={"#webDevelopment"}>Web Development</Nav.Link>*/}
                            <Nav.Link className="nav-link" href={"#portfolio"}>Portfolio</Nav.Link>
                            <Nav.Link className="nav-link" href="#contact">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/*<Navbar collapseOnSelect expand="md" bg="danger" data-bs-theme="dark" fixed="top">*/}
            {/*    <Container>*/}
            {/*        <Navbar.Brand href="#home">HM Tech Solutions</Navbar.Brand>*/}
            {/*        <Navbar.Toggle aria-controls="responsive-navbar-nav" />*/}
            {/*        <Navbar.Collapse id="responsive-navbar-nav">*/}
            {/*            <Nav className="me-auto">*/}
            {/*            </Nav>*/}
            {/*            <Nav>*/}
            {/*                <Nav.Link href="#home">Home</Nav.Link>*/}
            {/*                <Nav.Link eventKey={2} href="#about">*/}
            {/*                    About*/}
            {/*                </Nav.Link>*/}
            {/*                <Nav.Link eventKey={3} href="#webUIDesign">*/}
            {/*                    Web/UI Design*/}
            {/*                </Nav.Link>*/}
            {/*                <Nav.Link eventKey={4} href="#webDevelopment">*/}
            {/*                    Web Development*/}
            {/*                </Nav.Link>*/}
            {/*                <Nav.Link eventKey={5} href="#portfolio">*/}
            {/*                    Portfolio*/}
            {/*                </Nav.Link>*/}
            {/*                <Nav.Link eventKey={6} href="#contact">*/}
            {/*                    Contact*/}
            {/*                </Nav.Link>*/}
            {/*            </Nav>*/}
            {/*        </Navbar.Collapse>*/}
            {/*    </Container>*/}
            {/*</Navbar>*/}
        </>
    );
}