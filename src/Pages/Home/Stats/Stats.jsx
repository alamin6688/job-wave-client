import { Globe, Briefcase, Users, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const Stats = () => {
  return (
    <>
      <section className="py-12 border-y border-gray-100 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                label: "Active Jobs",
                value: "12,400+",
                icon: Briefcase,
              },
              {
                label: "Expert Freelancers",
                value: "85,000+",
                icon: Users,
              },
              {
                label: "Total Paid Out",
                value: "$140M+",
                icon: DollarSign,
              },
              {
                label: "Countries Served",
                value: "120+",
                icon: Globe,
              },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
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
                className="flex items-center space-x-4"
              >
                <div className="p-3 bg-white rounded-xl shadow-md border border-gray-100 text-blue-600">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
