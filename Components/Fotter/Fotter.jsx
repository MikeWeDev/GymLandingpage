export default function Fotter() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Subscribe + Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          {/* Subscribe Input with skew */}
          <div className="flex w-full max-w-lg overflow-hidden rounded-lg shadow-lg transform skew-x-12 bg-white">
            <input
              type="email"
              placeholder="Email address to subscribe"
              className="flex-grow py-3 px-5 text-gray-800 outline-none skew-x-[-12deg]"
            />
            <button className="bg-pink-500 px-6 py-3 font-semibold text-white transition hover:bg-pink-600 skew-x-[-12deg]">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 text-xl">
            {[
              { name: "Facebook", icon: "fab fa-facebook-f", color: "hover:text-blue-500" },
              { name: "Twitter", icon: "fab fa-twitter", color: "hover:text-sky-400" },
              { name: "Instagram", icon: "fab fa-instagram", color: "hover:text-pink-400" },
              { name: "LinkedIn", icon: "fab fa-linkedin-in", color: "hover:text-blue-700" },
            ].map(({ name, icon, color }) => (
              <a
                key={name}
                href="#"
                aria-label={name}
                className={`bg-white text-gray-900 p-3 rounded-full shadow-lg transition transform hover:scale-110 ${color}`}
              >
                <i className={`${icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <i className="fas fa-hand-rock text-pink-500"></i> Fitness
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Dolor amet sit justo amet elitr clita ipsum elitr est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              {["Home", "About Us", "Our Courses", "Our Features", "Blog & News", "Testimonials"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-pink-400 transition">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-6 text-gray-300">

              <div className="flex items-start gap-4">
                <i className="fas fa-map-marker-alt text-pink-500 text-xl mt-1"></i>
                <div>
                  <h4 className="font-semibold text-white">Address</h4>
                  <p>123 Street, New York, USA</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <i className="fas fa-envelope text-pink-500 text-xl mt-1"></i>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p>info@example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <i className="fas fa-phone-alt text-pink-500 text-xl mt-1"></i>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <p>(+012) 3456 7890</p>
                </div>
              </div>

            </div>
          </div>

          {/* Recent Work */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Recent Work</h3>
            <div className="grid grid-cols-4 gap-3">
              {[
                "/img/work-1.jpg",
                "/img/work-2.jpg",
                "/img/work-3.jpg",
                "/img/work-4.jpg",
                "/img/work-5.jpg",
                "/img/work-6.jpg",
                "/img/work-7.jpg",
                "/img/work-8.jpg",
              ].map((src, idx) => (
                <a key={idx} href="#" className="block overflow-hidden rounded-md shadow-lg hover:scale-105 transform transition duration-300">
                  <img
                    src={src}
                    alt={`Recent work ${idx + 1}`}
                    className="object-cover w-full h-20"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-pink-700 pt-6 text-center text-sm text-pink-300 font-light tracking-wider">
          &copy; {new Date().getFullYear()} Your Company. Crafted with 💜 by Mike.
        </div>
      </div>
    </footer>
  );
}
