'use client'
import { useEffect, useState } from "react";

export default function Home() {
  const [index, setIndex] = useState(0);
  const images = ["/img/header-1.jpg", "/img/header-2.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length); // Cycle through images
    }, 3000);

    return () => clearInterval(interval); // Clear on unmount
  }, []);

  return (
    <div className="min-h-screen w-full font-sans">
      {/* Top Bar */}
      <div className="bg-[#0a1a55] text-white text-sm py-2 px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span>📧 example@gmail.com</span>
          <span>🕒 Mon - Sat: 8.00 am - 7.00 pm</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-pink-500">Login</a>
          <span>\</span>
          <a href="#" className="hover:text-pink-500">Register</a>
          <a href="#" className="hover:text-pink-500">📘</a>
          <a href="#" className="hover:text-pink-500">🐦</a>
          <a href="#" className="hover:text-pink-500">📷</a>
          <a href="#" className="hover:text-pink-500">💼</a>
        </div>
      </div>

      {/* Navbar */}
      <div className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <div className="flex items-center gap-2">
          <div className="text-3xl">🥊</div>
          <h1 className="text-2xl font-bold text-pink-600">Fitness</h1>
        </div>
        <nav className="flex gap-6 text-md font-medium">
          <a href="#" className="text-pink-600 border-b-2 border-pink-600">Home</a>
          <a href="#" className="hover:text-pink-600">About</a>
          <a href="#" className="hover:text-pink-600">Courses</a>
          <a href="#" className="hover:text-pink-600">Blogs</a>
          <div className="relative group">
            <button className="hover:text-pink-600">Pages ▼</button>
            <div className="absolute hidden group-hover:block bg-white border mt-1 px-4 py-2 shadow-md">
              <a href="#" className="block py-1 hover:text-pink-600">Page 1</a>
              <a href="#" className="block py-1 hover:text-pink-600">Page 2</a>
            </div>
          </div>
          <a href="#" className="hover:text-pink-600">Contact</a>
        </nav>
        <div className="flex gap-2">
          <input type="text" placeholder="Search..." className="px-2 py-1 border rounded" />
          <button className="bg-pink-600 text-white px-2 py-1 rounded">🔍</button>
          <button className="bg-pink-600 text-white px-4 py-1 rounded">Get Quote</button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-[#0a1a55] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 animate-fade-in-left">
            <p className="text-pink-500 text-sm font-semibold tracking-wide uppercase">
              Welcome to our fitness center
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Unleash Your Power <br />
              With the Best Gym in Town
            </h1>
            <p className="text-lg text-gray-300">
              Get stronger, healthier, and more confident. Join us today and transform your fitness journey with professional trainers and modern equipment.
            </p>
            <div className="flex gap-4">
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg shadow-md transition">
                Join Now
              </button>
              <button className="border border-white hover:bg-white hover:text-[#0a1a55] px-6 py-3 rounded-lg transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right: Image Carousel */}
          <div className="relative w-full h-80 md:h-[500px] rounded-lg overflow-hidden shadow-lg animate-fade-in-right">
            <img
              src={images[index]}
              alt="Fitness Gym"
              className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button className="fixed bottom-4 right-4 bg-pink-600 text-white p-3 rounded-full shadow-lg hover:bg-pink-700">
        ⬆️
      </button>
    </div>
  );
}
