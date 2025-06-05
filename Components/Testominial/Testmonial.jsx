'use client'
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "CEO, TechCorp",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "This product completely transformed our workflow. The team is blown away by the results!",
  },
  {
    name: "Mark Davis",
    role: "Freelance Developer",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Highly recommend it! The performance and ease of use are second to none.",
  },
  {
    name: "Sophia Lee",
    role: "Marketing Manager",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "A game changer for our marketing strategy. The support team is also amazing!",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;
  const timeoutRef = useRef(null);

  // Auto slide handler with reset
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => resetTimeout();
  }, [current]);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);
  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);

  return (
    <section className="max-w-full mx-auto p-8 rounded-xl bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-700 text-white shadow-2xl relative select-none">
      <h2 className="text-4xl font-extrabold mb-12 text-center tracking-wide drop-shadow-lg">
        What Our Clients Say
      </h2>

      {/* Testimonial Container */}
      <div className="relative h-72 md:h-80 overflow-hidden">

        {testimonials.map((testi, idx) => {
          const isActive = idx === current;
          return (
            <article
              key={idx}
              aria-hidden={!isActive}
              className={`
                absolute inset-0 flex flex-col items-center justify-center px-8
                transition-all duration-1000 ease-in-out
                ${
                  isActive
                    ? "opacity-100 translate-x-0 z-30"
                    : idx < current
                    ? "-translate-x-full opacity-0 z-10"
                    : "translate-x-full opacity-0 z-10"
                }
              `}
            >
              {/* Profile Pic with glow ring */}
              <div className="relative mb-6">
                <img
                  src={testi.photo}
                  alt={testi.name}
                  className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-pink-400 shadow-[0_0_25px_5px_rgba(219,39,119,0.7)]"
                />
                <span className="absolute -inset-1 rounded-full border-2 border-pink-300 animate-ping opacity-60"></span>
              </div>

              {/* Quote with big quote marks */}
              <blockquote className="relative max-w-xl text-center text-lg md:text-xl italic leading-relaxed before:content-['“'] after:content-['”'] before:absolute before:-left-6 before:-top-4 before:text-7xl before:text-pink-400 before:opacity-20 after:absolute after:-right-6 after:-bottom-4 after:text-7xl after:text-pink-400 after:opacity-20">
                {testi.quote}
              </blockquote>

              <footer className="mt-8 text-center">
                <p className="text-xl font-semibold">{testi.name}</p>
                <p className="text-pink-300 text-sm tracking-wide">{testi.role}</p>
              </footer>
            </article>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex justify-center mt-10 space-x-6">
        <button
          onClick={prevSlide}
          aria-label="Previous Testimonial"
          className="bg-pink-400 hover:bg-pink-500 shadow-lg rounded-full p-3 text-white transition-transform transform hover:scale-110 active:scale-95"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Testimonial"
          className="bg-pink-400 hover:bg-pink-500 shadow-lg rounded-full p-3 text-white transition-transform transform hover:scale-110 active:scale-95"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Animated Dots */}
      <div className="flex justify-center mt-6 space-x-3">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to testimonial ${idx + 1}`}
            className={`
              w-4 h-4 rounded-full
              ${
                idx === current
                  ? "bg-pink-400 shadow-lg animate-pulse"
                  : "bg-pink-200 hover:bg-pink-300"
              }
              transition-all duration-300
            `}
          />
        ))}
      </div>
    </section>
  );
}
