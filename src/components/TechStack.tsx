import React, {ReactElement} from "react";
import {Card, CardGroup, Row, Col} from "react-bootstrap";

export default function TechStack() : ReactElement {
    return (
        <div className="techStack">
            <div className="tech">
        <Row>
            <CardGroup>
                <Card className="techStackCard">
                    <Card.Body className="text-center">
                        <i className="bi bi-code-square" style={{fontSize: "6rem"}}></i>
                        <Card.Text>
                            <h3>Front-End Development</h3>
                            <h5 className="mt-4 cardDesc">I will provide a seamless user experience, with responsiveness for all devices, coded from scratch and compatible with modern browsers</h5>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="techStackCard">
                    <Card.Body className="text-center">
                        <i className="bi bi-hdd-rack" style={{fontSize: "6rem"}}></i>
                        <Card.Text>
                            <h3>Back-End Development</h3>
                            <h5 className="mt-4 cardDesc">I will provide the code that handles how your data is stored, as well as defining the business logic your site needs to work as it should</h5>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="techStackCard">
                    <Card.Body className="text-center">
                        <i className="bi bi-check-square" style={{fontSize: "6rem"}}></i>
                        <Card.Text>
                            <h3>TDD Approach</h3>
                            <h5 className="mt-4 cardDesc">I adopt a Test-Driven Development approach to writing code, helping to ensure that the code I write actually does work as intended</h5>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Row>
        </div>
        </div>
    )
}