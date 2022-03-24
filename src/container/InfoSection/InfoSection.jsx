import React from "react";

import { Grid, Paper } from "@mui/material";
import { Location, LinkButton, OpeningHours } from "../../components";

import "./InfoSection.css";

const InfoSection = () => {
  return (
    <Grid container id="hours-section">
      <Grid key={0} item xs={12} md={6} id="location">
        <Location />
      </Grid>
      <Grid key={1} item xs={12} md={6} id="hours-grid">
        <Paper class="hours">
          <OpeningHours />
        </Paper>
        <Paper class="hours">
          <LinkButton
            text="Book Now"
            link="https://www.fresha.com/a/bera-lash-auckland-5-120-sunnynook-road-ld94r2lw/booking"
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default InfoSection;
