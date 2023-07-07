import React, {ReactElement} from "react";

export default function About() : ReactElement {

    return (
        <div id="about" className="pb-5">
            <h1 className="pt-5 pb-5 aboutHeading">About Me</h1>
            <h4>Hi, I'm Harley and I'm a a <span className="full-stack">full-stack</span> web developer</h4>
            <h4>I graduated from Queen's University, Belfast in July 2022 with a Bsc in Computing and Information Technology and have over 1 year of experience building web applications in the insurance industry</h4>
            <h4 className="pt-3">When I'm not writing code, I enjoy listening to music, playing guitar and drinking lots of coffee... although I need coffee to write code too! </h4>
        </div>
    )
}