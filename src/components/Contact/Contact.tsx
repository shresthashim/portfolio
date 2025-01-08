"use client";

import React, { useRef } from "react";
import styles from "./Contact.module.css";
import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const emailInput = form.current.email.value;

    if (!validateEmail(emailInput)) {
      toast.error("Please enter a valid email address.", { autoClose: 3000 });
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )
      .then(() => {
        toast.success("Message submitted successfully!", { autoClose: 3000 });
        if (form.current) {
          form.current.reset();
        }
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Failed to send message, please try again.", {
          autoClose: 3000,
        });
      });
  };

  return (
    <section id='contact' className={styles.contact}>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className={`container ${styles.contact_container}`}>
        <div className={styles.contact_options}>
          <article className={styles.contact_option}>
            <MdEmail className={styles.contact_option_icon} />
            <h4>Email</h4>
            <h5>ashim@ashims.com.np</h5>
            <Link href='mailto:ashim@ashims.com.np' rel='noreferrer' target='_blank'>
              Send A Message
            </Link>
          </article>
          <article className={styles.contact_option}>
            <FaFacebookMessenger className={styles.contact_option_icon} />
            <h4>Messenger</h4>
            <h5>AsHim Shrestha</h5>
            <Link href='https://m.me/ashim1123' rel='noreferrer' target='_blank'>
              Send A Message
            </Link>
          </article>
          <article className={styles.contact_option}>
            <IoLogoWhatsapp className={styles.contact_option_icon} />
            <h4>WhatsApp</h4>
            <h5>+977-9826261277</h5>
            <Link href='https://api.whatsapp.com/send?phone=9779826261277' rel='noreferrer' target='_blank'>
              Send A Message
            </Link>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <input type='text' name='name' placeholder='Your Full Name' required className={styles.input} />
          <input type='email' name='email' placeholder='Email' required className={styles.input} />
          <textarea name='message' rows={7} placeholder='Your Message' required className={styles.textarea}></textarea>
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
