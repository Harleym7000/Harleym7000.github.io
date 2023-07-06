import React, { ReactElement } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typed from 'typed.js';
import {Button} from "react-bootstrap";
import {ArrowDownward } from '@mui/icons-material';
import {GitHub} from '@mui/icons-material';

export default function Home(): ReactElement {

    const mainImage = require('../pi.png');

    React.useEffect(() => {
        const typed = new Typed(".auto-typed", {
          strings: ["Harley Mulholland", "a Web Developer"],
          typeSpeed: 60,
          backSpeed: 60,
          loop: true
        });

        return () => {
          typed.destroy();
        };
      }, []);

    return (
        <div className="body">
            <div className="onLoad">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                            <h1 className="homeHeading1 ml-3">Hello,<br/>I'm <span className="auto-typed"></span></h1>
                            <h4 className="auto-typed"></h4>
                            <h5 className="service" style={{marginTop: 20}}>
                                I'm a freelance web developer offering <span className="full-stack">full-stack</span> web development services.</h5>
                        <Row style={{marginTop: 70}} className="ctaButtons">
                            <Col xs={12} md={6} lg={5}>
                                <Button
                                    className="portfolioButton"
                                    as="a"
                                    variant="danger"
                                    size="lg">
                                    VIEW PORTFOLIO
                                </Button>
                            </Col>
                            <Col xs={12} md={6} lg={5}>
                                <Button
                                    className="contactButton"
                                    as="a"
                                    variant="outline-danger"
                                    size="lg">
                                    CONTACT ME
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                                <img src={mainImage} alt="picture" className="mainImage img-responsive"/>
                    </Col>
                </Row>
                <Row style={{paddingBottom: 40}} className="social text-center">
                    <h4>Find me on social media:</h4>
                    <Col xs={2} md={1}>
                    <Button
                        as="a"
                        onClick={() => window.open("https://www.github.com/Harleym7000", "_blank")}
                        className="socialIcon"
                        >
                    <i className="bi bi-github" style={{fontSize: "2rem"}}></i>
                    </Button>
                    </Col>
                    <Col xs={2} md={1}>
                        <Button
                            as="a"
                            onClick={() => window.open("https://www.github.com/Harleym7000", "_blank")}
                            className="socialIcon"
                        >
                            <i className="bi bi-facebook" style={{fontSize: "2rem"}}></i>
                        </Button>
                    </Col>
                    <Col xs={2} md={1}>
                        <Button
                            as="a"
                            onClick={() => window.open("https://www.github.com/Harleym7000", "_blank")}
                            className="socialIcon"
                        >
                            <i className="bi bi-instagram" style={{fontSize: "2rem"}}></i>
                        </Button>
                    </Col>
                </Row>
            </Container>
            </div>
                    {/*    <h1 className="homeHeading1 ml-3">Hello,<br/>I'm <span className="auto-typed"></span></h1>*/}
                    {/*    <h4 className="auto-typed"></h4>*/}
                    {/*    <h5 className="service" style={{marginTop: 20}}>*/}
                    {/*        I'm a freelance web developer offering <span className="full-stack">full-stack</span> web development services.</h5>*/}
                    {/*    /!*    I graduated from Queen's University, Belfast in 2022 with a Bsc Hons in Computing and Information Technology and*!/*/}
                    {/*    /!*    have over 1 year of experience in industry*!/*/}

                    {/*<Row style={{marginTop: 70}} className="ctaButtons">*/}
                    {/*    <Col xs={12}>*/}
                    {/*        <Button*/}
                    {/*            className="portfolioButton"*/}
                    {/*            as="a"*/}
                    {/*            variant="danger"*/}
                    {/*            size="lg">*/}
                    {/*            VIEW PORTFOLIO*/}
                    {/*        </Button>*/}
                    {/*    </Col>*/}
                    {/*    <Col xs={12}>*/}
                    {/*        <Button*/}
                    {/*            className="contactButton"*/}
                    {/*            as="a"*/}
                    {/*            variant="outline-danger"*/}
                    {/*            size="lg">*/}
                    {/*            CONTACT ME*/}
                    {/*        </Button>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                    {/*<Col xs={12} md={7} className="homeImage">*/}
                    {/*    <img src={mainImage} alt="test" className="mainImage"/>*/}
                    {/*</Col>*/}

        {/*<Grid container spacing={2}>*/}
        {/*    <Grid item xs={12} md={5}>*/}
        {/*        <Typography variant="h1" className="homeHeading1">HARLEY</Typography>*/}
        {/*        <Typography variant="h2" className="homeHeading2">MULHOLLAND</Typography>*/}
        {/*        <Typography variant="h5" className="auto-typed"></Typography>*/}
        {/*    </Grid>*/}
        {/*    <Grid item xs={12} md={7}>*/}
        {/*        <img src={mainImage} alt="picture" className="mainImage"/>*/}
        {/*    </Grid>*/}
        {/*    <Grid item xs={12}>*/}
        {/*        <div className="homeButtons">*/}
        {/*    <Button variant="outlined">VIEW PORTFOLIO</Button>*/}
        {/*    <Button variant="contained">GET IN TOUCH</Button>*/}
        {/*    </div>*/}
        {/*    </Grid>*/}
        {/*</Grid>*/}
        </div>
    )
}