/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <div>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-gray-600">Hear from the community.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Job Wave completely changed how I find work. The quality of clients is unmatched.",
                author: "Sarah Jenkins",
                role: "Product Designer",
                company: "Freelance",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
              },
              {
                quote:
                  "We hired a full dev team in less than a week. The vetting process is a game changer.",
                author: "Michael Chen",
                role: "CTO",
                company: "TechStart Inc.",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80",
              },
              {
                quote:
                  "Finally, a platform that treats freelancers like professionals. Payments are always on time.",
                author: "Elena Rodriguez",
                role: "Content Strategist",
                company: "Freelance",
                image:
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&q=80",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: idx * 0.1,
                }}
                className="bg-gray-100 p-8 rounded-2xl relative hover:shadow-lg transition-shadow duration-200 hover:shadow-blue-200"
              >
                <div className="flex space-x-1 text-yellow-400 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  "{item.quote}"
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{item.author}</div>
                    <div className="text-sm text-gray-500">
                      {item.role}, {item.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
