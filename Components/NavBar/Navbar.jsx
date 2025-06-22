'use client';
import React, { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Info Bar */}
      <div className="fixed top-0 w-full z-50 bg-gradient-to-r from-pink-600 to-indigo-700 text-white text-sm py-2 px-4 flex justify-between items-center gap-4 hidden sm:flex">
        <div className="flex items-center gap-4 flex-nowrap overflow-x-auto no-scrollbar">
          <span className="whitespace-nowrap">📧 example@gmail.com</span>
          <span className="whitespace-nowrap">🕒 Mon - Sat: 8.00 am - 7.00 pm</span>
        </div>
        <div className="flex items-center gap-4 flex-nowrap overflow-x-auto no-scrollbar text-sm">
          <a href="#" className="hover:text-pink-300 whitespace-nowrap">Login</a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:text-pink-300 whitespace-nowrap">Home</a>
          <a href="#about" className="hover:text-pink-300 whitespace-nowrap">About</a>
          <a href="#courses" className="hover:text-pink-300 whitespace-nowrap">Courses</a>
          <a href="#blogs" className="hover:text-pink-300 whitespace-nowrap">Blogs</a>
          <a href="#trainers" className="hover:text-pink-300 whitespace-nowrap">Trainers</a>
          <a href="#testimonials" className="hover:text-pink-300 whitespace-nowrap">Testimonials</a>
          <a href="#contact" className="hover:text-pink-300 whitespace-nowrap">Contact</a>
        </div>
      </div>

      {/* Main Navbar */}
   <div className="fixed top-0 md:top-8 w-full z-40 bg-white shadow-md px-4 md:px-6 py-4 flex items-center justify-between gap-4">
  {/* Logo */}
  <div className="flex items-center gap-2 select-none flex-shrink-0">
    <div className="text-3xl">🥊</div>
    <h1 className="text-2xl font-bold text-pink-600">Fitness</h1>
  </div>

  {/* Desktop nav links - flex-grow to take space */}
  <nav className="hidden sm:flex flex-1 gap-4 md:gap-6 text-md font-medium items-center overflow-x-auto no-scrollbar whitespace-nowrap">
    <a href="#" className="text-pink-600 border-b-2 border-pink-600">Home</a>
    <a href="#about" className="hover:text-pink-600">About</a>
    <a href="#courses" className="hover:text-pink-600">Courses</a>
    <a href="#blogs" className="hover:text-pink-600">Blogs</a>

    {/* Dropdown */}
    <div className="relative group">
      <button className="hover:text-pink-600 flex items-center gap-1">
        Pages ▼
      </button>
      <div className="absolute hidden group-hover:block bg-white border mt-1 px-4 py-2 shadow-md min-w-[120px]">
        <a href="#" className="block py-1 hover:text-pink-600">Page 1</a>
        <a href="#" className="block py-1 hover:text-pink-600">Page 2</a>
      </div>
    </div>

    <a href="#contact" className="hover:text-pink-600">Contact</a>
  </nav>

  {/* Search and quote buttons - desktop */}
  <div className="hidden sm:flex gap-2 items-center flex-shrink-0">
    <input
      type="text"
      placeholder="Search..."
      className="px-2 py-1 border rounded min-w-[100px]"
    />
    <button className="bg-pink-600 text-white px-2 py-1 rounded hover:bg-pink-700 transition">
      🔍
    </button>
    <button className="bg-pink-600 text-white px-4 py-1 rounded hover:bg-pink-700 transition whitespace-nowrap">
      Get Quote
    </button>
  </div>

  {/* Hamburger menu button - mobile */}
  <button
    aria-label="Toggle menu"
    onClick={() => setMenuOpen(!menuOpen)}
    className="sm:hidden flex flex-col justify-center items-center gap-[6px] cursor-pointer z-50"
  >
    <span
      className={`block w-6 h-0.5 bg-pink-600 rounded transition-transform duration-300 ${
        menuOpen ? 'rotate-45 translate-y-1.5' : ''
      }`}
    ></span>
    <span
      className={`block w-6 h-0.5 bg-pink-600 rounded transition-opacity duration-300 ${
        menuOpen ? 'opacity-0' : 'opacity-100'
      }`}
    ></span>
    <span
      className={`block w-6 h-0.5 bg-pink-600 rounded transition-transform duration-300 ${
        menuOpen ? '-rotate-45 -translate-y-1.5' : ''
      }`}
    ></span>
  </button>
</div>

      {/* Mobile menu */}
      <div
        className={`fixed top-[72px] left-0 w-full bg-white shadow-md border-t border-pink-600 transition-transform duration-300 origin-top z-30 ${
          menuOpen ? 'scale-y-100' : 'scale-y-0'
        }`}
        style={{ transformOrigin: 'top' }}
      >
        <nav className="flex flex-col gap-4 p-6 text-center font-medium text-pink-600">
          <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-pink-700">
            Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-pink-700">
            About
          </a>
          <a href="#courses" onClick={() => setMenuOpen(false)} className="hover:text-pink-700">
            Courses
          </a>
          <a href="#blogs" onClick={() => setMenuOpen(false)} className="hover:text-pink-700">
            Blogs
          </a>

          <details className="text-left">
            <summary className="cursor-pointer hover:text-pink-700 select-none">Pages ▼</summary>
            <div className="flex flex-col mt-2 pl-4 gap-2">
              <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-pink-700">Page 1</a>
              <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-pink-700">Page 2</a>
            </div>
          </details>

          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-pink-700">
            Contact
          </a>

          <div className="flex flex-col gap-2 mt-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 border rounded text-pink-600"
            />
            <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition">
              🔍 Search
            </button>
            <button className="bg-pink-600 text-white px-4 py-2 rounded mt-2 hover:bg-pink-700 transition">
              Get Quote
            </button>
          </div>
        </nav>
      </div>

      <style jsx>{`
        /* Hide scrollbar for top info bar and navbar nav */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}
