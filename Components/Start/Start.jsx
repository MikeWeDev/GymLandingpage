import Image from 'next/image';

const blogs = [
  {
    title: 'At Home Ab Workout',
    date: '30 Dec 2025',
    author: 'Martin.C',
    image: '/img/feature-1.jpg',
    description: 'Effective home ab exercises to build your core strength and stability.'
  },
  {
    title: 'Full Body Home Workout',
    date: '30 Dec 2025',
    author: 'Martin.C',
    image: '/img/feature-2.jpg',
    description: 'Get fit from home with this full body workout plan—no equipment needed.'
  },
  {
    title: 'Full Body Home Workout',
    date: '30 Dec 2025',
    author: 'Martin.C',
    image: '/img/feature-3.jpg',
    description: 'Boost strength and endurance with this all-in-one home workout routine.'
  }
];

export default function BlogSection() {
  return (
    <section className="py-16 px-4 sm:px-10 bg-white">
      <div className="text-center mb-12">
        <h3 className="text-pink-600 font-semibold text-lg">Our Blogs</h3>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Check out our latest stories
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Discover expert fitness advice, trending workouts, and health tips curated to fuel your journey.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, idx) => (
          <div key={idx} className="border-2 border-pink-500 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Image src={blog.image} alt={blog.title} width={500} height={300} className="w-full h-60 object-cover" />
            <div className="bg-white p-4">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                <span className="flex items-center gap-2"><i className="fas fa-user text-pink-600"></i> {blog.author}</span>
                <span className="flex items-center gap-2"><i className="fas fa-calendar-alt text-pink-600"></i> {blog.date}</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{blog.title}</h4>
              <p className="text-gray-600 text-sm">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
