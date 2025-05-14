'use client'
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
  id="contact"
  className="my-4 mt-20 scroll-mt-20 w-full flex justify-center md:justify-center px-4"
>
  <div className="w-full max-w-6xl flex justify-center md:justify-end">
    <div className="w-full max-w-md bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 shadow-md">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Contact Me</h2>
        <p className="mb-6 text-sm sm:text-base text-center text-gray-600 dark:text-gray-300">
          I’d love to connect — whether you want to collaborate, chat about a project, or just say hey, feel free to reach out.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition duration-300 w-full"
          >
            Send Message
          </button>
        </form>
      </div>
      </div>
    </section>
  );
}