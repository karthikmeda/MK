import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rgb0c3b", // Replace with your service ID
        "template_0rc88ll", // Replace with your template ID
        form.current,
        "V7pibhUCOyCAXh1zT" // Replace with your user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
          console.error("Error sending message:", error);
        }
      );
  };

  return (
    <div className="contact-form">
      <label><center><b>Contact Me</b></center></label>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Subject</label>
        <input type="text" name="subject" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
