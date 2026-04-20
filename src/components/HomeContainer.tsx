import React, {ReactElement} from "react";
import Home from "./Home";
import About from "./About"
import Portfolio from "./Portfolio";
import Footer from "./Footer";

export default function HomeContainer() : ReactElement {
    return (
        <>
            <div className="onLoad">
                <Home/>
                <About/>
                <Portfolio/>
                <Footer/>
                </div>
        </>
    )
}