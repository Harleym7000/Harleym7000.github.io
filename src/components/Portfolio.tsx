import React, {ReactElement} from "react";
import {Button, Carousel} from "react-bootstrap";

export default function Portfolio(): ReactElement {

    const pcaHomeImage = require('../pca.PNG');
    const amrHomeImage = require('../amr.png');

    return (
        <div id="portfolio" className="mb-5">
            <h1 className="portfolioHeading mb-3 pt-4 text-center">Portfolio</h1>
            <div className="portfolioContent">
                <h4 className="text-center">Below you can find my portfolio of full-stack web development projects.</h4>
                <h4 className="text-center">Feel free to click on visit and have a look around!</h4>
                <div className="carouselContainer">
                    <Carousel indicators={false} className="pt-5">
                        <Carousel.Item>
                            <img src={amrHomeImage} className="img-fluid"/>
                            <div className="text-center">
                                <a href="https://www.amresources.net" target="_blank">
                                    <Button variant="danger" className="mt-5 portfolioLinks" size="lg">Visit site</Button>
                                </a>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}