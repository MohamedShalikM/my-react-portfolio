import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "../css/contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // For success/error messages

  useEffect(() => {
    emailjs.init(import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY");
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = import.meta.env.REACT_APP_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
    const templateId = import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form)
      .then((result) => {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setStatus("Failed to send message. Please try again.");
        console.error("EmailJS error:", error);
      });
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-sub">
        Let’s connect! Feel free to reach out for collaborations or opportunities.
      </p>

      {status && <p className={status.includes("successfully") ? "success" : "error"}>{status}</p>}

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
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          autoComplete="off"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          cols="10"
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
