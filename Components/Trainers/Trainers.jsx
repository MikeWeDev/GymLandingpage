import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const trainers = [
  { name: "Trainer Name", role: "Profession", img: "/img/team-1.jpg" },
  { name: "Trainer Name", role: "Profession", img: "/img/team-2.jpg" },
  { name: "Trainer Name", role: "Profession", img: "/img/team-3.jpg" },
  { name: "Trainer Name", role: "Profession", img: "/img/team-4.jpg" },
];

export default function Trainers() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fadeIn">
          <h4 className="text-pink-600 text-lg font-semibold mb-2">Our Trainer</h4>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Meet Our Amazing Team</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate
            recusandae aperiam temporibus corporis itaque quis facere.
          </p>
        </div>

        {/* Trainer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="group rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={trainer.img}
                  alt={trainer.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-full"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
              <div className="bg-white text-center p-4">
                <h4 className="text-xl font-semibold">{trainer.name}</h4>
                <p className="text-gray-500">{trainer.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
