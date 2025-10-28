import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from 'framer-motion';  // Import motion

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_1998";
    const contactTemplateID = "template_ktlti82";
    const thankYouTemplateID = "template_nrl315m";
    const publicKey = "HIGYHJHIBbWe-sNac";

    const contactData = {
      ...formData,
    };

    const thankYouData = {
      to_email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      message: formData.message,
    };

    emailjs
      .send(serviceID, contactTemplateID, contactData, publicKey)
      .then(
        (response) => {
          console.log("Contact form sent successfully:", response.status, response.text);

          emailjs
            .send(serviceID, thankYouTemplateID, thankYouData, publicKey)
            .then((res) => {
              console.log("Thank-you email sent successfully:", res.status, res.text);
              setStatusMessage("Message sent successfully! Thank you for reaching out.");
            })
            .catch((err) => {
              console.error("Failed to send thank-you email:", err);
              setStatusMessage("Message sent, but failed to send thank-you email.");
            });

          setFormData({ firstName: "", lastName: "", email: "", message: "" });
        },
        (error) => {
          console.error("Failed to send contact form:", error);
          setStatusMessage("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <motion.div
      id="contact"
      className="text-white p-5 sm:p-10 min-h-screen flex items-center justify-center"
      initial={{ opacity: 0, y: 20 }}  // Initial state
      whileInView={{ opacity: 1, y: 0 }}  // When the section enters the viewport
      viewport={{ once: true }}  // Trigger animation once
      transition={{ duration: 0.5 }}  // Smooth transition
    >
      <motion.div
        className="w-full sm:w-3/4 lg:w-1/2 border-purple-400 border-2 p-6 sm:p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}  // Start hidden
        whileInView={{ opacity: 1 }}  // Fade in when in view
        transition={{ duration: 0.5 }}  // Smooth transition for the form container
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: -20 }}  // Start slightly off-screen (to the left)
              whileInView={{ opacity: 1, x: 0 }}  // Slide in and fade in
              transition={{ duration: 0.5 }}  // Smooth transition for each field
            >
              <label className="block mb-1" htmlFor="firstName"></label>
              <input
                placeholder="First Name"
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-2 rounded-md bg-gray-800 border-purple-400 border text-white"
              />
            </motion.div>
            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: 20 }}  // Start slightly off-screen (to the right)
              whileInView={{ opacity: 1, x: 0 }}  // Slide in and fade in
              transition={{ duration: 0.5 }}
            >
              <label className="block mb-1" htmlFor="lastName"></label>
              <input
                placeholder="Last Name"
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-2 rounded-md bg-gray-800 border-purple-400 border text-white"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}  // Start below and hidden
            whileInView={{ opacity: 1, y: 0 }}  // Fade in and move to original position
            transition={{ duration: 0.5 }}
          >
            <label className="block mb-1" htmlFor="email"></label>
            <input
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-md bg-gray-800 border border-purple-400 text-white"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}  // Start below and hidden
            whileInView={{ opacity: 1, y: 0 }}  // Fade in and move to original position
            transition={{ duration: 0.5 }}
          >
            <label className="block mb-1" htmlFor="message"></label>
            <textarea
              placeholder="Message"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-2 rounded-md bg-gray-800 border border-purple-400 text-white"
            ></textarea>
          </motion.div>
          <motion.button
            type="submit"
            className="w-full bg-purple-800 text-white p-2 rounded-md transition duration-300 hover:bg-purple-600"
            initial={{ opacity: 0 }}  // Start hidden
            whileInView={{ opacity: 1 }}  // Fade in when in view
            transition={{ duration: 0.5 }}
          >
            Send Message
          </motion.button>
        </form>
        {statusMessage && (
          <p className="mt-4 text-center">{statusMessage}</p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Contact;
