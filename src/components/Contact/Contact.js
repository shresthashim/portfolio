import React, { useRef } from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const emailInput = form.current.email.value;

    if (!validateEmail(emailInput)) {
      toast.error("Please enter a valid email address.", { autoClose: 3000 });
      return;
    }

    emailjs
    .sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then(() => {
      toast.success("Message submitted successfully!", { autoClose: 3000 });
      e.target.reset();
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      toast.error("Failed to send message, please try again.", { autoClose: 3000 });
    });
  
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>ashimsth89@gmail.com</h5>
            <a href='mailto:ashimsth89@gmail.com' rel='noreferrer' target='_blank'>
              Send A Message
            </a>
          </article>
          <article className='contact_option'>
            <FaFacebookMessenger className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>AsHim Shrestha</h5>
            <a href='https://m.me/ashim1123' rel='noreferrer' target='_blank'>
              Send A Message
            </a>
          </article>
          <article className='contact_option'>
            <IoLogoWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>+977-9826261277</h5>
            <a href='https://api.whatsapp.com/send?phone=9779826261277' rel='noreferrer' target='_blank'>
              Send A Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
