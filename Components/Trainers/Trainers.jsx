"use client"
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const trainers = [
  { name: "Alex Morgan", role: "Fitness Coach", img: "/trainers/Trainer.webp" },
  { name: "Jordan Lee", role: "Yoga Instructor", img: "/trainers/Trainer-1.webp" },
  { name: "Sam Patel", role: "Strength Trainer", img: "/trainers/Trainer-2.webp" },
  { name: "Taylor Kim", role: "Nutritionist", img: "/trainers/Trainer-3.webp" },
];

export default function TrainersSection() {
  return (
    <section id="trainers" className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-2000"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h4 className="text-pink-400 text-sm sm:text-base font-bold uppercase tracking-widest mb-2">
            Our Trainers
          </h4>
          <h2 className="text-5xl font-extrabold text-white mb-4 leading-tight">
            Meet Our Elite Team
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experts dedicated to pushing you beyond your limits with passion and precision.
          </p>
        </motion.div>

        {/* Trainer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
              className="group relative bg-gray-800 rounded-3xl overflow-hidden transform hover:-rotate-1 hover:rotate-1 hover:scale-105 transition-all duration-500 shadow-2xl"
            >
              {/* Border accent */}
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-pink-500 to-purple-500"></div>

              <Image
                src={trainer.img}
                alt={trainer.name}
                width={400}
                height={400}
                className="w-full h-72 object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-white mb-1">
                  {trainer.name}
                </h3>
                <p className="text-pink-400 font-medium mb-4">
                  {trainer.role}
                </p>

                {/* Social Icons */}
                <div className="flex justify-center gap-4">
                  {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className="p-2 bg-gray-700 rounded-full text-white hover:bg-pink-500"
                    >
                      <Icon />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
