import { Typography, Grid, Button } from "@mui/material";
import React, { ReactElement, useRef, useEffect } from "react";
import Typed from 'typed.js';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Home(): ReactElement {

    const mainImage = require('../webDev.png');

    React.useEffect(() => {
        const typed = new Typed(".auto-typed", {
          strings: ["Full-Stack Web Development", "Get your business online today!"],
          typeSpeed: 80,
          backSpeed: 80,
          loop: true
        });
    
        return () => {
          typed.destroy();
        };
      }, []);

    return (
    <div className="onLoad">
        <Grid container spacing={2}>
            <Grid item xs={5}>
                <Typography variant="h1" className="homeHeading1">HARLEY</Typography>
                <Typography variant="h2" className="homeHeading2">MULHOLLAND</Typography>
                <Typography variant="h4" className="auto-typed"></Typography>
            </Grid>
            <Grid item xs={7}>
                <img src={mainImage} alt="picture" className="mainImage"/>
            </Grid>
            <Grid item xs={6}>
                <div className="homeButtons">
            <Button variant="outlined">VIEW PORTFOLIO</Button>
            <Button variant="contained">GET IN TOUCH</Button>
            </div>
            </Grid>
        </Grid>
    </div>
    )
}