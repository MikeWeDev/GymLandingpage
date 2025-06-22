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
  const [visibleCount, setVisibleCount] = useState(3);
  const timeoutRef = useRef(null);
  const delay = 5000;

  // Update visibleCount based on screen width
  useEffect(() => {
    function updateVisibleCount() {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    }
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // Auto slide effect
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
    setCurrent((prev) =>
      prev - visibleCount < 0 ? blogs.length - visibleCount : prev - visibleCount
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev + visibleCount >= blogs.length ? 0 : prev + visibleCount
    );
  };

  // Calculate width of each card as %
  const cardWidthPercent = 100 / visibleCount;

  return (
    <section
      id="blogs"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1e1b4b] via-[#2a2550] to-[#1f2937] relative overflow-hidden"
    >
      <div className="text-center mb-16 max-w-5xl mx-auto px-4">
        <h3 className="text-indigo-400 font-bold uppercase tracking-wider mb-2">Our Blogs</h3>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">Check out our latest stories</h2>
        <p className="text-indigo-200 max-w-3xl mx-auto">
          Discover expert fitness advice, trending workouts, and health tips curated to fuel your journey.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto overflow-hidden">
        {/* Slider track */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: "100%", // fixed width
            transform: `translateX(-${current * cardWidthPercent}%)`,
          }}
        >
          {blogs.map((blog, idx) => (
            <motion.div
              key={idx}
              className="px-3 shrink-0"
              style={{ width: `${cardWidthPercent}%` }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <article className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 overflow-hidden shadow-xl hover:shadow-purple-500/50 transition-all duration-300 p-1 flex flex-col h-full">
                <div className="relative flex-shrink-0">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={600}
                    height={360}
                    className="w-full h-64 object-cover rounded-xl"
                    priority={idx === 0}
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between text-sm text-indigo-200 mb-4 flex-wrap gap-2">
                    <span className="flex items-center gap-2 whitespace-nowrap">
                      <i className="fas fa-user text-purple-400"></i>
                      {blog.author}
                    </span>
                    <span className="flex items-center gap-2 whitespace-nowrap">
                      <i className="fas fa-calendar-alt text-purple-400"></i>
                      {blog.date}
                    </span>
                  </div>
                  <h4 className="text-2xl font-semibold text-white mb-2">{blog.title}</h4>
                  <p className="text-indigo-100 leading-relaxed flex-grow">{blog.description}</p>
                </div>
              </article>
            </motion.div>
          ))}
        </div>

        {/* Dot navigation */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {Array.from({ length: Math.ceil(blogs.length / visibleCount) }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setCurrent(idx * visibleCount)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === Math.floor(current / visibleCount)
                  ? "w-6 bg-purple-400"
                  : "bg-indigo-300"
              }`}
            />
          ))}
        </div>

        {/* Prev / Next Controls */}
        <button
          type="button"
          aria-label="Previous Slide"
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 shadow-lg z-30"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Next Slide"
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 shadow-lg z-30"
        >
          ›
        </button>
      </div>
    </section>
  );
}
