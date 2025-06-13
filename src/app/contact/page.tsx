'use client';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

const SITE_KEY = process.env.NEXT_PUBLIC_SITE_KEY!;

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ from_name: '', reply_to: '', message: '' });
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { from_name, reply_to, message } = formData;

    if (!from_name || !reply_to || !message) {
      alert('Please fill out all fields.');
      return;
    }

    const token = await recaptchaRef.current?.executeAsync();
    recaptchaRef.current?.reset();

    if (!token) {
       alert('reCAPTCHA validation failed.');
       return;
     }

    setLoading(true);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, PUBLIC_KEY);

      alert('Thank you for your message!');
      setFormData({ from_name: '', reply_to: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="my-4 mt-20 scroll-mt-20 w-full flex justify-center px-4"
    >
      <div className="w-full max-w-6xl flex justify-center md:justify-end">
        <div className="w-full max-w-md bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 shadow-md">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Contact Me</h2>
          <p className="mb-6 text-sm sm:text-base text-center text-gray-600 dark:text-gray-300">
            I’d love to connect — whether you want to collaborate, chat about a project, or just say hey, feel free to reach out.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              value={formData.from_name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white"
            />
            <input
              type="email"
              name="reply_to"
              placeholder="Your Email"
              required
              value={formData.reply_to}
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
              {
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={SITE_KEY}
                size="invisible"
              />
              }
            <button
              type="submit"
              disabled={loading}
              className="bg-indigo-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition duration-300 w-full disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}