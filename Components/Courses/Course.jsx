'use client'
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const courses = [
  {
    title: 'Gym Fitness Class',
    trainer: 'Paul Flavius',
    date: 'Saturday',
    time: '06.00 - 07.00',
    icon: "/img/icon-1.png",
    description: 'Push your limits with this high-energy gym class designed for full-body conditioning.',
  },
  {
    title: 'Power Lifting Class',
    trainer: 'Paul Flavius',
    date: 'Sunday',
    time: '07.00 - 08.00',
    icon: "/img/icon-2.png",
    description: 'Lift heavy and build strength with our expert-led power lifting training sessions.',
  },
  {
    title: 'Body Building Class',
    trainer: 'Paul Flavius',
    date: 'Monday',
    time: '08.00 - 09.00',
    icon: "/img/icon-3.png",
    description: 'Sculpt your physique with targeted workouts in our muscle-building class.',
  },
  {
    title: 'Weight Loss Class',
    trainer: 'Anna Kendrick',
    date: 'Tuesday',
    time: '06.30 - 07.30',
    icon: "/img/icon-4.png",
    description: 'Burn calories and slim down with effective weight loss routines.',
  },
  {
    title: 'Cardio Blast Class',
    trainer: 'Jason Lee',
    date: 'Wednesday',
    time: '07.30 - 08.30',
    icon: "/img/icon-5.png",
    description: 'Get your heart pumping with this energetic cardio-focused workout.',
  },
  {
    title: 'Crossfit Training',
    trainer: 'Maya Lin',
    date: 'Thursday',
    time: '09.00 - 10.00',
    icon: "/img/icon-6.png",
    description: 'Combine strength, agility, and endurance in our dynamic Crossfit sessions.',
  },
];

export default function CourseSection() {
  // Optional: animate cards on scroll with Intersection Observer
  const cardsRef = useRef([]);
  useEffect(() => {
    if (!cardsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            target.classList.add('opacity-100', 'translate-y-0');
            target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cardsRef.current.forEach((el) => {
      if (el) {
        el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700', 'ease-out');
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative py-24 px-6 sm:px-12 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/img/services-img.jpg')" }}
    >
      {/* Dark overlay with subtle animated gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/70 to-black/80 animate-gradient-bg"
        style={{ mixBlendMode: 'multiply' }}
      ></div>

      <div className="relative z-20 max-w-7xl mx-auto text-center text-white mb-16 px-4 sm:px-0">
        <h3 className="text-pink-500 font-semibold text-lg tracking-widest uppercase mb-3 drop-shadow-md">
          Our Courses
        </h3>
        <h2 className="text-5xl font-extrabold mb-6 leading-tight drop-shadow-lg">
          Check Out Our Highlights
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl">
          Explore our top fitness classes taught by professional trainers to help you reach your goals.
        </p>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0">
        {courses.map((course, idx) => (
          <article
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            className="bg-white/95 rounded-3xl p-8 shadow-2xl transform transition-transform duration-400 hover:scale-[1.05] hover:shadow-[0_30px_45px_rgba(219,39,119,0.3)] flex flex-col cursor-pointer"
          >
            <div className="flex items-center gap-5 mb-6">
              <div className="bg-pink-600 p-4 rounded-full shadow-lg hover:shadow-pink-400 transition-shadow duration-500">
                <Image src={course.icon} alt={`${course.title} icon`} width={50} height={50} />
              </div>
              <div className="space-y-1 text-left">
                <p className="text-pink-700 font-semibold text-lg">{course.trainer}</p>
                <p className="text-gray-600 font-medium text-sm">Date: <span className="text-pink-500">{course.date}</span></p>
                <p className="text-gray-600 font-medium text-sm">Time: <span className="text-pink-500">{course.time}</span></p>
              </div>
            </div>
            <h4 className="text-2xl font-extrabold text-gray-900 mb-3">{course.title}</h4>
            <p className="text-gray-800 text-base flex-grow">{course.description}</p>

            <button
              className="mt-8 bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-pink-400 transition transform duration-300"
              aria-label={`Read more about ${course.title}`}
            >
              Read More
            </button>
          </article>
        ))}
      </div>

      <style jsx>{`
        @keyframes gradient-bg {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-bg {
          background-size: 200% 200%;
          animation: gradient-bg 15s ease infinite;
        }
      `}</style>
    </section>
  );
}
