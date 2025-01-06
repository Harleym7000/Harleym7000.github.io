import React, {ReactElement} from "react";
import {Card, Row, Col, Button} from "react-bootstrap";

export default function Portfolio() : ReactElement {

    const pcaHomeImage = require('../pca.PNG');

    return (
        <div id="portfolio" className="mb-5">
            <div className="portfolioContent">
                <h1 className="portfolioHeading mb-3">Portfolio</h1>
                <p>Below you can find my portfolio of full-stack web development projects which are currently live.
                    Feel free to click on visit and have a look around!</p>
                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Img variant="top" src={pcaHomeImage} />
                            <Card.Body>
                                <Card.Title>Portstewart Community Association</Card.Title>
                                <Card.Text>
                                    Portstewart Community Association is a charitable organisation who currently organises and implemets The Red Sails Festival alongside other events and activities for the benefit of the community.
                                </Card.Text>
                                <div className="d-flex flex-row-reverse">
                                    <Button
                                        as="a"
                                        onClick={() => window.open("https://www.portstewartca.org", "_blank")}
                                        variant="danger"
                                    >
                                        Visit
                                        <i className="bi bi-box-arrow-up-right" style={{fontSize: "1rem", paddingLeft: 5}}></i>
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}