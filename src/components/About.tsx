import React, {ReactElement} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import {Typography} from "@mui/material";
import image from "../pi.png";
import PieChartAbout from "./PieChartAbout";

export default function About(): ReactElement {
    return (
        <>
            <div id="about" className="mx-5 d-flex">
                <Container fluid className="d-flex">
                    <Row className="d-flex align-items-center pt-4 pb-4">
                        <Col sm={12} md={6}>
                            <Typography variant="h3" className="fira-sans-heading">About Me</Typography>
                            <Typography variant="h5" className="fira-sans-text">Hi, I'm Harley and I'm a freelance <span
                                className="full-stack">full stack</span> web developer, UI designer and PC hardware
                                repair
                                consultant based in Coleraine, Northern Ireland.</Typography>
                            <Typography variant="h5" className="fira-sans-text mt-3">As a Computing and Information
                                Technology graduate from Queens University Belfast with over 3 years of professional
                                experience in industry, <strong>HM Tech Solutions</strong> can bring your business
                                websites to life.</Typography>
                        </Col>
                        <Col sm={12} md={6} className="d-flex justify-content-center">
                            <Image src={image} roundedCircle width={480}/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Typography variant={"h3"} className={"fira-sans-heading mt-5 mb-3 text-center"}>My skills & experience</Typography>
            <Container fluid className={"d-flex flex-wrap justify-content-center"}>
                <div className={"d-flex mb-5"}>
                    <PieChartAbout/>
                </div>
            </Container>
        </>
    )
}