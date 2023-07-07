import React, {ReactElement} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBootstrap() : ReactElement {
    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="danger" data-bs-theme="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">MWD</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link eventKey={2} href="#about">
                                About
                            </Nav.Link>
                            <Nav.Link eventKey={3} href="#memes">
                                Portfolio
                            </Nav.Link>
                            <Nav.Link eventKey={4} href="#memes">
                                Pricing
                            </Nav.Link>
                            <Nav.Link eventKey={5} href="#memes">
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
        );
}