import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./EmailTemplate.css";

const EmailTemplate = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail_service",
        "template_contact",
        form.current,
        "gV6toWBT49zwEy6kE"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div class="email-section">
      <h2>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your name" />
        <input type="email" name="user_email" placeholder="Your email" />
        <input type="subject" name="subject" placeholder="subject" />
        <textarea name="message" placeholder="Enter Your Message" />
        <input type="submit" value="Send Message" />
      </form>
    </div>
  );
};

export default EmailTemplate;
