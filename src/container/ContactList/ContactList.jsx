import React from "react";

import { Grid, Paper } from "@mui/material";
import { contactData } from "../../constants";
import "./ContactList.css";

const ContactList = () => {
  return (
    <div>
      <Grid container spacing={3} id="contact-content-section">
        {contactData.contacts.map((contact, index) => (
          <Grid key={index} item xs={12} md={4} id="contact-grid">
            <Paper id="contact-card">
              <div className="contact-image-wrapper">
                <i className={`${contact.icon} contact-image`}></i>
              </div>
              <div className="contact-item">
                <h4>{contact.method}</h4>
                <p>{contact.detail}</p>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ContactList;
