'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-900 bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-md">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-extrabold tracking-wide text-white">
          <Link href="/">Konrad</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-lg font-medium text-white">
          <a href="/#about" className="hover:text-blue-400 transition">About</a>
          <a href="/#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="/#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 text-white text-base font-medium">
          <a href="/#about" className="block hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>About</a>
          <a href="/#projects" className="block hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="/#contact" className="block hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  )
}