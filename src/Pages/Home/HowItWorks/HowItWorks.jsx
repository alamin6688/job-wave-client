import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Users,
  DollarSign,
  PenTool,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

/* ===== Variants ===== */
const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("freelancer");

  return (
    <motion.div
      className="container mx-auto mt-4 mb-8 pb-6 px-4"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <section className="py-12 bg-white">
        {/* ===== Heading ===== */}
        <motion.div
          className="text-center mb-16"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Our Platform Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, secure, and streamlined for everyone.
          </p>
        </motion.div>

        {/* ===== Tabs ===== */}
        <motion.div
          className="flex justify-center mb-16"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="bg-gray-100 p-1 rounded-full inline-flex">
            <button
              onClick={() => setActiveTab("freelancer")}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${
                activeTab === "freelancer"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              For Freelancers
            </button>
            <button
              onClick={() => setActiveTab("employer")}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${
                activeTab === "employer"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              For Employers
            </button>
          </div>
        </motion.div>

        {/* ===== Tab Content ===== */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {activeTab === "freelancer" ? (
              <motion.div
                key="freelancer"
                className="grid grid-cols-1 md:grid-cols-3 gap-12"
                variants={containerVariant}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: 20 }}
              >
                {[
                  {
                    title: "Create Profile",
                    desc: "Showcase your skills, portfolio, and experience to stand out.",
                    icon: Users,
                  },
                  {
                    title: "Browse & Bid",
                    desc: "Find jobs that match your skills and submit competitive proposals.",
                    icon: Briefcase,
                  },
                  {
                    title: "Get Paid Securely",
                    desc: "Funds are held in escrow until work is approved.",
                    icon: DollarSign,
                  },
                ].map((step, idx) => (
                  <motion.div
                    key={idx}
                    className="text-center"
                    variants={itemVariant}
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                      <step.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="employer"
                className="grid grid-cols-1 md:grid-cols-3 gap-12"
                variants={containerVariant}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: 20 }}
              >
                {[
                  {
                    title: "Post a Job",
                    desc: "Describe your project, budget, and timeline.",
                    icon: PenTool,
                  },
                  {
                    title: "Review Proposals",
                    desc: "Compare bids, portfolios, and reviews.",
                    icon: Users,
                  },
                  {
                    title: "Collaborate & Pay",
                    desc: "Release payment only when satisfied.",
                    icon: CheckCircle,
                  },
                ].map((step, idx) => (
                  <motion.div
                    key={idx}
                    className="text-center"
                    variants={itemVariant}
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 mx-auto bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                      <step.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </motion.div>
  );
};

export default HowItWorks;
