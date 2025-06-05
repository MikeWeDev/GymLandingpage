'use client';
import { motion } from 'framer-motion';

export default function GoalSection() {
  return (
    <section className="relative min-h-screen text-white px-6 py-20 overflow-hidden font-body">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/img/goal-background-img.jpg')] bg-cover bg-left bg-no-repeat z-[-1]" />

      {/* Decorative Shapes */}
      <div className="absolute top-0 left-[-20%] w-[60%] h-[100%] bg-[#e40045]/20 rotate-12 rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 right-[-25%] w-[70%] h-[90%] bg-gradient-to-tr from-[#0c123d]/20 to-transparent rotate-6 rounded-full pointer-events-none z-0" />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 space-y-6"
        >
          <p className="text-[#e40045] font-semibold uppercase tracking-wider">Fitness Goal</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-snug text-white">
            Complete your possibilities,<br /> Achieve Your Fitness Goals.
          </h1>

          {/* Info Cards */}
          <div className="space-y-5">
            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-xl transition duration-300"
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl z-0" />
              <div className="relative z-10 flex items-start gap-4 p-6">
                <span className="text-4xl text-[#e40045] group-hover:scale-110 transition">🏋️‍♂️</span>
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-[#e40045] transition">Free Fitness Training</h3>
                  <p className="text-sm text-gray-200">
                    Personalized plans and coaching to elevate your training experience.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-xl transition duration-300"
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl z-0" />
              <div className="relative z-10 flex items-start gap-4 p-6">
                <span className="text-4xl text-[#0c123d] group-hover:text-[#e40045] transition">💪</span>
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-[#e40045] transition">Cardio and Strength</h3>
                  <p className="text-sm text-gray-200">
                    Improve endurance, burn fat, and boost performance with smart training.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-8 inline-block bg-gradient-to-r from-[#e40045] to-[#c1003a] text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition"
          >
            Read Details
          </motion.button>
        </motion.div>

        {/* Right Stats Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 text-white"
        >
          {/* Stat Card */}
          {[
            { icon: '🔥', title: 'Burn Calories', desc: 'High-intensity plans to boost metabolism and burn fat faster.' },
            { icon: '⚡', title: 'Boost Energy', desc: 'Increase stamina and feel energized throughout the day.' },
            { icon: '🧘‍♀️', title: 'Mental Wellness', desc: 'Improve focus, reduce stress, and maintain inner peace.' },
            { icon: '🏃‍♂️', title: 'Mobility & Flexibility', desc: 'Improve your body movement and reduce risk of injury.' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:scale-105 transition duration-300"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="font-bold text-lg mb-1">{item.title}</h4>
              <p className="text-sm text-gray-200">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
