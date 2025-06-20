'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function About() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main id="about"  className="min-h-screen flex items-center justify-center bg-[#0b1240] text-white px-4 py-12 lg:px-8 lg:py-16 overflow-hidden relative">
      {/* Animated gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none animate-gradient-bg opacity-30 mix-blend-screen"
      ></div>

      <div className="flex flex-col lg:flex-row items-center w-full px-4 lg:px-8 gap-6 lg:gap-12 relative z-10">
        {/* Text Section */}
        <div
          className={`flex-1 space-y-6 transform transition-all duration-700 ease-out ${
            isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
            Unleashing Your Potential <br />
            and Achieving Your{' '}
            <span className="text-pink-500 font-extrabold drop-shadow-pink-glow">Goals.</span>
          </h1>
          <p className="text-gray-300 text-base leading-relaxed max-w-lg">
            Tailored strategies and expert support designed to elevate your performance and unlock new possibilities.
          </p>

          {/* Simplified Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Mission', icon: '🚀' },
              { title: 'Vision', icon: '🎯' },
              { title: 'Goal', icon: '🏆' }
            ].map((feature) => (
              <div
                key={feature.title}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-xl hover:bg-white/20 transition"
              >
                <span className="text-2xl">{feature.icon}</span>
                <h3 className="text-lg font-semibold text-white mb-0">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div
          className="w-full lg:w-1/2 relative transition-transform duration-500 ease-out hover:scale-105 animate-float"
          aria-label="About image"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-full opacity-60 filter blur-3xl"></div>
          <Image
            src="/About/about1.jpg"
            alt="Illustration"
            width={700}
            height={800}
            className="mx-auto w-full h-auto object-cover rounded-xl border-4 border-white shadow-2xl"
            priority
          />
        </div>
      </div>

      <style jsx>{`
        /* Background gradient animation */
        @keyframes gradient-bg {
          0%,100% { background: linear-gradient(270deg, #0b1240, #1a1a47, #0b1240); }
          50% { background: linear-gradient(270deg, #1a1a47, #0b1240, #1a1a47); }
        }
        .animate-gradient-bg { animation: gradient-bg 12s ease infinite; }

        /* Floating animation for image */
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }

        /* Glow on pink text */
        .drop-shadow-pink-glow { text-shadow: 0 0 8px rgba(228,0,69,0.8); }
      `}</style>
    </main>
  );
}
