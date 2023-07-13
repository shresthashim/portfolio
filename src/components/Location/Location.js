import React from "react";

const Location = () => {
  return (
    <section style={{ height: "61vh", width: "100%" }}>
      <h5>Find Me</h5>
      <h2>Location</h2>
      <div style={{ position: "relative", height: "100%", width: "100%" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.2449008210424!2d83.9776971!3d28.260589999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399593f8a1fa7623%3A0xe5bbf85d641961ee!2sSimran%20Hostel!5e0!3m2!1sen!2snp!4v1688750610580!5m2!1sen!2snp"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
