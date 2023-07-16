import React, {ReactElement} from "react";
import {Card, CardGroup, Row, Col, Figure} from "react-bootstrap";

export default function TechStack() : ReactElement {

    const reactLogo = require('../React-icon.svg.png');
    const javascriptLogo = require('../js.png');

    return (
        <div className="techStack">
            <div className="tech pb-5">
                <h1 className="text-white text-center mt-5 mb-4">What is Full-Stack Development?</h1>
        <Row>
            <CardGroup>
                <Col sm={12} lg={4}>
                <Card className="techStackCard">
                    <Card.Body className="text-center">
                        <i className="bi bi-code-square" style={{fontSize: "6rem"}}></i>
                        <Card.Text>
                            <h3>Front-End Development</h3>
                            <h5 className="mt-4 cardDesc">I will provide a seamless user experience, with responsiveness for all devices, coded from scratch and compatible with modern browsers</h5>
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm={12} lg={4}>
                <Card className="techStackCard">
                    <Card.Body className="text-center">
                        <i className="bi bi-hdd-rack" style={{fontSize: "6rem"}}></i>
                        <Card.Text>
                            <h3>Back-End Development</h3>
                            <h5 className="mt-4 cardDesc">I will provide the code that handles how your data is stored, as well as defining the business logic your site needs to work as it should</h5>
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                    <Col sm={12} lg={4}>
                <Card className="techStackCard">
                    <Card.Body className="text-center">
                        <i className="bi bi-check-square" style={{fontSize: "6rem"}}></i>
                        <Card.Text>
                            <h3>TDD Approach</h3>
                            <h5 className="mt-4 cardDesc">I adopt a Test-Driven Development approach to writing code, helping to ensure that the code I write actually does work as intended</h5>
                        </Card.Text>
                    </Card.Body>
                </Card>
                    </Col>
            </CardGroup>
        </Row>
                <h1 className="pt-5 text-center technicalSkillsHeading">My Technical Skills</h1>
        <Row className="mt-4 justify-content-center">
            <Col lg={2}>
            <Figure>
                <Figure.Image
                    width={100}
                    alt="React Logo"
                    src={reactLogo}
                />
                <Figure.Caption className="text-center">
                    React
                </Figure.Caption>
            </Figure>
            </Col>
            <Col lg={2}>
            <Figure>
                <Figure.Image
                    alt="React Logo"
                    src={javascriptLogo}
                />
                <Figure.Caption className="text-center">
                    Javascript
                </Figure.Caption>
            </Figure>
            </Col>
            <Col lg={2}>
            <Figure>
                <Figure.Image
                    alt="React Logo"
                    src={reactLogo}
                />
                <Figure.Caption className="text-center">
                    React
                </Figure.Caption>
            </Figure>
            </Col>
        </Row>
        </div>
        </div>
    )
}