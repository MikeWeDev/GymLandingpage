"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const blogs = [
  { title: "At Home Ab Workout", date: "30 Dec 2025", author: "Martin.C", image: "/img/feature-1.webp", description: "Effective home ab exercises to build your core strength and stability." },
  { title: "Full Body Home Workout", date: "30 Dec 2025", author: "Martin.C", image: "/img/feature-2.jpg", description: "Get fit from home with this full body workout plan—no equipment needed." },
  { title: "HIIT Cardio Blast", date: "15 Jan 2026", author: "Alex.R", image: "/img/feature-3.jpg", description: "Burn calories fast with high-intensity interval training routines." },
  { title: "Yoga for Flexibility", date: "22 Feb 2026", author: "Sara.K", image: "/img/feature-4.jpg", description: "Improve mobility and mindfulness with these yoga flows." },
  { title: "Resistance Band Workout", date: "10 Mar 2026", author: "Liam.T", image: "/img/feature-5.jpg", description: "Portable resistance band exercises for strength training anywhere." },
  { title: "Beginner Stretch Routine", date: "05 Apr 2026", author: "Emma.J", image: "/img/feature-6.jpg", description: "Gentle stretches to increase range of motion and prevent injury." },
  { title: "Stretch Basics", date: "05 Apr 2026", author: "Emma.J", image: "/img/feature-7.jpg", description: "Gentle stretches to increase range of motion and prevent injury." },
  { title: "Stretch Daily", date: "05 Apr 2026", author: "Emma.J", image: "/img/feature-8.avif", description: "Gentle stretches to increase range of motion and prevent injury." },
];

export default function BlogSection() {
  const [current, setCurrent] = useState(0);
const timeoutRef = useRef(null);
  const delay = 5000;

  const visibleCount = typeof window !== "undefined"
    ? window.innerWidth < 640
      ? 1
      : window.innerWidth < 1024
      ? 2
      : 3
    : 3;

  useEffect(() => {
    const handleResize = () => {
      setCurrent(0); // Reset slide on screen size change
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) =>
        prev + visibleCount >= blogs.length ? 0 : prev + visibleCount
      );
    }, delay);
    return () => clearTimeout(timeoutRef.current);
  }, [current, visibleCount]);

  const prevSlide = () => {
    const newIndex = current - visibleCount < 0 ? blogs.length - visibleCount : current - visibleCount;
    setCurrent(newIndex);
  };

  const nextSlide = () => {
    const newIndex = current + visibleCount >= blogs.length ? 0 : current + visibleCount;
    setCurrent(newIndex);
  };

  return (
    <section id="blogs" className="py-20 px-6 bg-gradient-to-br from-[#1e1b4b] via-[#2a2550] to-[#1f2937] relative overflow-hidden">
      <div className="text-center mb-16">
        <h3 className="text-indigo-400 font-bold uppercase tracking-wider mb-2">Our Blogs</h3>
        <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-4">Check out our latest stories</h2>
        <p className="text-indigo-200 max-w-3xl mx-auto">Discover expert fitness advice, trending workouts, and health tips curated to fuel your journey.</p>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${(blogs.length / visibleCount) * 100}%`,
            transform: `translateX(-${(current / blogs.length) * 100}%)`,
          }}
        >
          {blogs.map((blog, idx) => (
            <motion.div
              key={idx}
              className="w-full sm:w-1/2 lg:w-1/3 px-4 shrink-0"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 overflow-hidden shadow-xl hover:shadow-purple-500/50 transition-all duration-300 p-1">
                <div className="relative">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={600}
                    height={360}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-indigo-200 mb-4">
                    <span className="flex items-center gap-2">
                      <i className="fas fa-user text-purple-400"></i>
                      {blog.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <i className="fas fa-calendar-alt text-purple-400"></i>
                      {blog.date}
                    </span>
                  </div>
                  <h4 className="text-2xl font-semibold text-white mb-2">{blog.title}</h4>
                  <p className="text-indigo-100 leading-relaxed">{blog.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dot Navigation */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
          {Array.from({ length: Math.ceil(blogs.length / visibleCount) }).map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === Math.floor(current / visibleCount)
                  ? "w-6 bg-purple-400"
                  : "bg-indigo-300"
              }`}
              onClick={() => setCurrent(idx * visibleCount)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 shadow-lg z-10"
          aria-label="Previous Slide"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 shadow-lg z-10"
          aria-label="Next Slide"
        >
          ›
        </button>
      </div>
    </section>
  );
}
