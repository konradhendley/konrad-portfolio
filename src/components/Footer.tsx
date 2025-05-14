'use client'

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full py-8 px-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-center text-gray-300 mt-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-base font-medium">&copy; {new Date().getFullYear()} Konrad Hendley. All rights reserved.</p>
        <div className="flex justify-center items-center gap-6">
          <a href="mailto:konradhendley8@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail className="w-6 h-6 hover:text-white transition duration-300" /> 
          </a>
          <a href="https://github.com/konradhendley" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 hover:text-white transition duration-300" /> 
          </a>
          <a href="https://linkedin.com/in/konradhendley" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:text-white transition duration-300" /> 
          </a>
        </div>
      </div>
    </motion.footer>
  );
}