import React from "react";

import { Grid, Card, CardContent, CardMedia } from "@mui/material";
import { HashLink as Link } from "react-router-hash-link";
import images from "../../constants/images";
import "./Services.css";

const Services = () => (
  <div className="service-list content-section">
    <h2>Services</h2>
    <Grid
      container
      id="service-section"
      rowGap={{ sm: 10 }}
      columnGap={{ sm: 10, md: 10 }}
    >
      <Grid key={0} item xs={12} sm={5} lg={2} id="lash-card">
        <Card sx={{ minwidth: 275 }}>
          <CardMedia
            component="img"
            alt="lashes"
            height="auto"
            image={images.work1}
          />
          <CardContent>
            <h3>Lashes</h3>
          </CardContent>
          <div className="link-button">
            <Link to="/pricing/#classic-section">Learn More</Link>
          </div>
        </Card>
      </Grid>
      <Grid key={1} item xs={12} sm={5} lg={2} id="infill-card">
        <Card sx={{ minwidth: 275 }}>
          <CardMedia
            component="img"
            alt="infills"
            height="auto"
            image={images.work1}
          />
          <CardContent>
            <h3>Lash Infills</h3>
          </CardContent>
          <div className="link-button">
            <Link to="/pricing/#classic-section">Learn More</Link>
          </div>
        </Card>
      </Grid>
      <Grid key={2} item xs={12} sm={5} lg={2} id="removal-card">
        <Card sx={{ minwidth: 275 }}>
          <CardMedia
            component="img"
            alt="removal"
            height="auto"
            image={images.work1}
          />
          <CardContent>
            <h3>Removal</h3>
          </CardContent>
          <div className="link-button">
            <Link to="/pricing/#removal-section">Learn More</Link>
          </div>
        </Card>
      </Grid>
      <Grid key={3} item xs={12} sm={5} lg={2} id="lift-card">
        <Card sx={{ minwidth: 275 }}>
          <CardMedia
            component="img"
            alt="lift"
            height="auto"
            image={images.work1}
          />
          <CardContent>
            <h3>Lash Lift</h3>
          </CardContent>
          <div className="link-button">
            <Link to="/pricing/#removal-section">Learn More</Link>
          </div>
        </Card>
      </Grid>
    </Grid>
  </div>
);

export default Services;
