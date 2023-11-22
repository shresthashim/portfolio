import React from "react";

const Location = () => {
  return (
    <section style={{ height: "61vh", width: "100%" }}>
      <h5>Find Me</h5>
      <h2>Location</h2>
      <div style={{ position: "relative", height: "100%", width: "100%" }}>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112488.38821620736!2d83.9566183!3d28.2297224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995937bbf0376ff%3A0xf6cf823b25802164!2sPokhara!5e0!3m2!1sen!2snp!4v1700653102479!5m2!1sen!2snp'
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "0" }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
