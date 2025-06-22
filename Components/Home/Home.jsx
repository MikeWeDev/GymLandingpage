'use client';
import { useEffect, useState } from "react";
import Navbar from "../NavBar/Navbar";

export default function Home() {
  const [index, setIndex] = useState(0);
  const images = ["/home/home.jpg", "/home/home2.webp", "/home/home3.1.webp", "/home/home4.avif"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Scroll-to-top function with smooth behavior
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="min-h-screen w-full font-sans scroll-smooth"
    >
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-indigo-700 text-white py-28 px-6 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 animate-fade-in-left">
            <p className="text-white text-md font-semibold tracking-wide uppercase">
              Welcome to our fitness center
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Unleash Your Power <br />
              With the Best Gym in Town
            </h1>
            <p className="text-lg text-gray-300">
              Get stronger, healthier, and more confident. Join us today and transform your fitness journey with professional trainers and modern equipment.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg shadow-md transition">
                Join Now
              </button>
              <button className="border border-white hover:bg-white hover:text-[#0a1a55] px-6 py-3 rounded-lg transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right: Image Carousel */}
          <div className="relative w-full h-80 md:h-[500px] rounded-lg mt-5 md:mt-0 overflow-hidden shadow-lg animate-fade-in-right">
            <img
              src={images[index]}
              alt="Fitness Gym"
              className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
              loading="lazy"
              draggable={false}
            />
            <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-4 right-4 bg-pink-600 text-white p-3 rounded-full shadow-lg hover:bg-pink-700 transition"
      >
        ⬆️
      </button>
    </div>
  );
}
