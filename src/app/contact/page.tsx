"use client";

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // You can replace this part with a real email sending function or API
    try {
      setStatus("Sending...");
      // Simulate email sending delay
      setTimeout(() => {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }, 2000);
    } catch (error) {
      setStatus("Failed to send message.");
    }
  };

  return (
    <section className="py-12 px-4 2xl:px-12 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-dark dark:text-light mb-6">Contact Me</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-lg text-dark dark:text-light">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg text-dark dark:text-light">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg text-dark dark:text-light">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Send Message
          </button>

          {status && (
            <div
              className={`mt-4 text-center text-lg font-semibold ${status.includes("Failed") ? "text-red-500" : "text-green-500"}`}
            >
              {status}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
