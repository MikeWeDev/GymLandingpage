'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function About() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main className="min-h-screen flex items-center bg-[#0b1240] text-white px-8 py-16 overflow-hidden relative">
      {/* Animated gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none animate-gradient-bg opacity-30 mix-blend-screen"
      ></div>

      <div className="flex flex-col-reverse lg:flex-row items-center w-full max-w-7xl mx-auto gap-12 relative z-10">
        {/* Left Content */}
        <div
          className={`flex-1 space-y-6 ${
            isMounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
          } transition-all duration-800 ease-out`}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Unleashing your potential <br /> and achieving your{" "}
            <span className="text-pink-500 font-extrabold drop-shadow-pink-glow">goals</span>.
          </h1>
          <p className="text-gray-300 text-lg max-w-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In impedit accusantium autem quaerat natus
            nesciunt veritatis fugiat dolor eaque fuga.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mb-8 flex-wrap">
            {["Our Mission", "Our Vision", "Our Goal"].map((label, i) => (
              <button
                key={label}
                className={`font-semibold px-6 py-3 rounded-full shadow-lg transition transform duration-300 ${
                  label === "Our Goal"
                    ? "bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 text-white hover:scale-105 hover:shadow-pink-500"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Info Text */}
          <p className="text-sm text-gray-400 mb-8 border-t border-gray-600 pt-6 max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-6 flex-wrap">
            <button className="bg-gradient-to-r from-pink-600 to-pink-700 px-6 py-3 font-bold rounded-full shadow-lg hover:scale-105 transition transform duration-300">
              Make Appointment
            </button>
            <div className="flex items-center gap-3 bg-white text-black px-5 py-3 rounded-full shadow-lg cursor-pointer hover:shadow-pink-500 transition-shadow duration-300">
              <img src="/call-icon.png" alt="Call" className="w-7 h-7" />
              <div className="text-sm">
                <p className="font-medium">Call to Our Experts</p>
                <p className="font-bold text-blue-600">Free: +0123 456 7890</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div
          className={`flex-1 relative max-w-md w-full transition-transform duration-500 ease-out hover:scale-[1.03] hover:rotate-[2deg] drop-shadow-2xl`}
          aria-label="Fitness image"
        >
          {/* Animated background triangle */}
          <div className="absolute inset-0 -z-10 bg-[#e40045] clip-triangle animate-pulse-triangle rounded-xl"></div>

          <Image
            src="/img/about-2.png"
            alt="Fitness"
            width={400}
            height={500}
            className="mx-auto w-full object-contain rounded-xl shadow-2xl"
            priority
          />
        </div>
      </div>

      <style jsx>{`
        /* Background gradient animation */
        @keyframes gradient-bg {
          0% {
            background: linear-gradient(270deg, #0b1240, #1a1a47, #0b1240);
            background-size: 600% 600%;
          }
          50% {
            background: linear-gradient(270deg, #1a1a47, #0b1240, #1a1a47);
            background-size: 600% 600%;
          }
          100% {
            background: linear-gradient(270deg, #0b1240, #1a1a47, #0b1240);
            background-size: 600% 600%;
          }
        }
        .animate-gradient-bg {
          animation: gradient-bg 12s ease infinite;
          background-size: 600% 600%;
          background-repeat: no-repeat;
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        /* Glow on pink text */
        .drop-shadow-pink-glow {
          text-shadow: 0 0 8px #e40045cc;
        }
        /* Triangle clip-path */
        .clip-triangle {
          clip-path: polygon(0 0, 100% 0, 100% 100%);
          opacity: 0.75;
          filter: drop-shadow(0 0 10px #e40045);
        }
        /* Triangle pulse animation */
        @keyframes pulse-triangle {
          0%, 100% {
            opacity: 0.75;
            filter: drop-shadow(0 0 10px #e40045);
          }
          50% {
            opacity: 1;
            filter: drop-shadow(0 0 20px #ff1e61);
          }
        }
        .animate-pulse-triangle {
          animation: pulse-triangle 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
