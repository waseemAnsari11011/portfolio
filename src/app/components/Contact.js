"use client";
import React, { useState } from "react";
import { FaMap } from "react-icons/fa";
import { AiOutlineMap } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("api call");

    const data = {
      name,
      email,
      subject,
      message,
    };

    setLoading(true); // Set loading state to true when form is submitted
    setErrorMessage("");
    setSuccessMessage("");
    axios
      .post("https://waseemworks-server.netlify.app/.netlify/functions/api/send-email", data)
      .then((response) => {
        console.log("Email sent successfully:", response.data);
        setSuccessMessage("Email sent successfully!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);

        setErrorMessage("Error sending email. Please try again later.");
      })
      .finally(() => {
        setLoading(false); // Set loading state to false after the request is complete (either success or error)
      });
  };

  return (
    <div
      id="contact-section"
      className="p-5 md:p-10 lg:p-16 bg-stone-50 relative"
      style={{ zIndex: 1 }}
    >
      <h1 className="text-2xl md:text-4xl lg:text-3xl font-light mb-10">
        GET IN TOUCH.
      </h1>

      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="p-5 md:p-10 bg-slate-100 mb-5 md:mb-0 md:w-1/2 md:mr-10">
          <h2 className="font-bold text-xl lg:text-2xl">Let's Connect!</h2>
          <p className="mt-3 text-base text-slate-500">
            Embracing invigorating challenges is my forte. With a profound
            commitment to excellence, I'm eager to contribute my professional
            expertise to help you accomplish your objectives. If you have a
            project that demands the best, feel free to reach out; I'm readily
            available to collaborate.
          </p>
          <div className="mt-5">
            <div className="flex">
              <FaMap size={24} />
              <p className="font-semibold text-lg ml-3">
                sector-63, Noida, Uttar Pradesh 201301, India
              </p>
            </div>

            <div className="flex my-2">
              <AiOutlineMail size={24} />
              <p className="font-semibold text-lg ml-3">
                waseemahm11011@gmail.com
              </p>
            </div>

            <div className="flex">
              <AiOutlinePhone size={24} />
              <p className="font-semibold text-lg ml-3">+91-888-2202-176</p>
            </div>
          </div>
        </div>

        <div className="p-5 md:p-10 bg-slate-100 md:w-1/2">
          <h2 className="font-bold text-xl lg:text-2xl">Say Something</h2>

          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4 flex flex-col md:flex-row md:justify-between">
              <div className="md:mr-3 mb-3 md:mb-0">
                <label htmlFor="name" className="block font-bold text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border rounded p-2 w-full focus:border-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-bold text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border rounded p-2 w-full"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block font-bold text-gray-600"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="border rounded p-2 w-full"
                placeholder="Subject"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block font-bold text-gray-600"
              >
                Your Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border rounded p-2 w-full h-32"
                placeholder="Your Message"
                required
              />
            </div>
            {/* Show success message if it's not empty */}
            {successMessage && (
              <p className="text-green-600 text-center mt-4">
                {successMessage}
              </p>
            )}
            {/* Show error message if it's not empty */}
            {errorMessage && (
              <p className="text-red-600 text-center mt-4">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded shadow-lg"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
