import React, { useRef } from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_c83dwne", "template_ockk57m", form.current, "x-HD87C-dNfoMo-AS");
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>ashimsth89@gmail.com</h5>
            <a href="mailto:ashimsth89@gmail.com" rel="noreferrer" target="_blank">
              Send A Message
            </a>
          </article>
          <article className="contact_option">
            <FaFacebookMessenger className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>AsHim Shrestha</h5>
            <a href="https://m.me/ashim1123" rel="noreferrer" target="_blank">
              Send A Message
            </a>
          </article>
          <article className="contact_option">
            <IoLogoWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+977-9826261277</h5>
            <a href="https://api.whatsapp.com/send?phone=9779826261277" rel="noreferrer" target="_blank">
              Send A Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
