import React, {ReactElement} from "react";
import {Typography} from "@mui/material";
import {Col, Container, Row} from "react-bootstrap";

export default function ComingSoon(): ReactElement {
    return (
        <div className="body d-flex align-items-center pb-5" id="home">
            <Container fluid>
                <Row className="align-items-center">
                    <Col className={"text-center"}>
                        <Typography variant={"h5"} fontWeight={"bold"} className="fira-sans mt-5 pt-4 pt-md-0 mt-md-0">
                            Hang tight... this site is coming soon!
                        </Typography>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}