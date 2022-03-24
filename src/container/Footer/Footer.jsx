import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Grid, Paper } from "@mui/material";
import { contactData } from "../../constants";

import "./Footer.css";

const Footer = () => (
  <footer>
    <div id="footer-section">
      <Grid container spacing={3} id="footer-content-section">
        <Grid key={0} item xs={12} md={4} id="footer-grid">
          <Paper id="footer-header">
            <h3>Follow Us</h3>
          </Paper>
          <Paper id="footer-detail">
            <div id="footer-image-wrapper">
              <a
                href="https://www.instagram.com/beralashnz/"
                title="Follow on Instagram"
              >
                <i id="footer-instagram" className="fab fa-instagram fa-2x"></i>
              </a>
            </div>
          </Paper>
        </Grid>
        <Grid key={1} item xs={12} md={4} id="footer-grid">
          <Paper id="footer-header">
            <div>
              <h3>Opening Hours</h3>
            </div>
          </Paper>
          <Paper id="footer-detail">
            <ul id="times">
              <li>
                Monday-Tuesday:
                <br></br>
                9:30am - 6:00pm
              </li>
              <li>
                Wednesday-Thusday:
                <br></br>
                9:30am-2:30pm, 6:00pm-10:00pm
              </li>
              <li>
                Friday:
                <br></br>
                9:30am - 6:00pm
              </li>
              <li>
                Saturday:
                <br></br>9:30am - 1:30pm
              </li>
              <li>
                Sunday:
                <br></br>Closed
              </li>
            </ul>
          </Paper>
          <Paper id="footer-detail">
            <p>We do late nights on Wednesday and Thursday</p>
          </Paper>
        </Grid>
        <Grid key={2} item xs={12} md={4} id="footer-grid">
          <Paper id="footer-header">
            <h3>Contact Us</h3>
          </Paper>
          <Paper id="footer-detail">
            <p>{contactData.contacts[2].detail}</p>
            <p>
              {contactData.contacts[0].detail}
              <br></br>
              {contactData.contacts[1].detail}
            </p>
          </Paper>
        </Grid>
      </Grid>
      <p>©Copyright 2021, Beralashnz | All Rights Reserved</p>
    </div>
  </footer>
);

export default Footer;
