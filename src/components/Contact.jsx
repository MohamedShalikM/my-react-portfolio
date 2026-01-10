import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../css/contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_j6o5uk5", // EmailJS Service ID
        "template_hakz27a", // EmailJS Template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "vd_arHz-7A_cECdTO" // EmailJS Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-sub">
        Let’s connect! Feel free to reach out for collaborations or
        opportunities.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Gmail ID"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
