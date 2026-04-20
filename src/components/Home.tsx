import React, {ReactElement} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import {Button} from "react-bootstrap";
import {Typography} from "@mui/material";

export default function Home(): ReactElement {

    const mainImage = require('../pi.png');

    const scrollToPortfolio = () => {
        // @ts-ignore
        document.getElementById("portfolio").scrollIntoView();
    }

    return (
        <div className="body d-flex align-items-center pb-5" id="home">
            <Container fluid>
                <Row className="align-items-center mx-5">
                    <Col xs={12} md={6}>
                        <Typography variant={"h2"} fontWeight={"bold"} className="fira-sans mt-5 pt-4 pt-md-0 mt-md-0">
                            HM Tech Solutions
                        </Typography>
                        <Typography variant={"h5"} className="fira-sans sub-heading-text mt-3">
                            I am a freelancer based in the UK offering a range of technology solutions
                            for your business including web development, web design, PC building, hardware repairs and more!
                        </Typography>
                        <Row className="mt-5">
                            <Col sm={6}>
                                <Button
                                    className="portfolioButton"
                                    as="a"
                                    onClick={() => scrollToPortfolio()}
                                    variant="danger"
                                    size="lg">
                                    VIEW PORTFOLIO
                                </Button>
                            </Col>
                            <Col sm={6}>
                                <Button
                                    className="contactButton mt-4 mt-md-0"
                                    as="a"
                                    variant="outline-danger"
                                    size="lg">
                                    CONTACT ME
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12} md={6} className="d-flex justify-content-center align-items-center imageCol">
                        <Image src={mainImage} fluid width={460} roundedCircle></Image>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}