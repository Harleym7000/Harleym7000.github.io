import React, {ReactElement} from "react";
import Home from "./Home";
import About from "./About"
import TechStack from "./TechStack";

export default function HomeContainer() : ReactElement {
    return (
        <>
            <div className="onLoad">
                <Home/>
                <About/>
                <TechStack/>
                </div>
        </>
    )
}