import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../../../Components/Button";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let throttleTimer = null;

    const handleMouseMove = (e) => {
      if (throttleTimer) return;

      throttleTimer = setTimeout(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 15,
          y: (e.clientY / window.innerHeight - 0.5) * 15,
        });
        throttleTimer = null;
      }, 16); // ~60fps throttle
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (throttleTimer) clearTimeout(throttleTimer);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background */}
      {/* <WaveBackground /> */}

      {/* Glowing orbs background */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, hsl(195 85% 35% / 0.3) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, hsl(190 70% 55% / 0.2) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-0 w-full">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between w-full py-12 sm:py-16 md:py-20 lg:py-24 gap-6 sm:gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content - Text Section */}
          <motion.div
            className="flex-1 w-full lg:w-auto"
            variants={itemVariants}
          >
            {/* Badge */}
            <motion.div className="mb-6 lg:mb-8 text-center md:text-left" variants={itemVariants}>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700"
                whileHover={{ scale: 1.05, borderColor: "rgb(59, 130, 246)" }}
                transition={{ duration: 0.3 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span>Trusted by 10,000+ companies worldwide</span>
              </motion.div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 mb-6 lg:mb-8 leading-tight text-center md:text-left">
                Work on your terms. <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Hire without limits.
                </span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-600 mb-8 lg:mb-10 leading-relaxed max-w-2xl"
            >
              The modern marketplace for high-quality freelance talent. Connect,
              collaborate, and get work done securely. Post jobs, receive bids,
              and connect with the perfect match.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12 lg:mb-16"
            >
              <Link to="/all-jobs" className="w-full sm:w-auto">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto min-w-[160px] rounded-full font-semibold"
                  >
                    Explore Jobs
                  </Button>
                </motion.div>
              </Link>
              {/* <Link to="/all-jobs" className="w-full sm:w-auto">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full sm:w-auto min-w-[160px] rounded-full font-semibold"
                  >
                    Find Work
                  </Button>
                </motion.div>
              </Link> */}
            </motion.div>

            {/* Stats Section */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 lg:gap-8"
            >
              {[
                { number: "10K+", label: "Active Jobs" },
                { number: "50K+", label: "Freelancers" },
                { number: "95%", label: "Success Rate" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Cards (Hidden on Mobile, Visible on Desktop) */}
          <motion.div
            className="hidden lg:block flex-1 relative w-full h-[500px]"
            variants={imageVariants}
          >
            {/* Main illustration container */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Freelancer card */}
              <motion.div
                className="absolute top-10 left-0 bg-white/90 backdrop-blur-md border border-blue-200 rounded-2xl p-6 shadow-xl shadow-blue-500/20 w-64"
                style={{
                  willChange: "transform",
                  transform: `translate(${mousePosition.x * 0.2}px, ${
                    mousePosition.y * 0.2
                  }px)`,
                  transition: "transform 0.15s ease-out",
                }}
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    JD
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800">
                      John Developer
                    </div>
                    <div className="text-xs text-slate-500">Full Stack Dev</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <div className="text-xs text-slate-600">
                  Expert in React & Node.js
                </div>
              </motion.div>

              {/* Job posting card */}
              <motion.div
                className="absolute top-1/3 right-0 bg-white/90 backdrop-blur-md border border-indigo-200 rounded-2xl p-6 shadow-xl shadow-indigo-500/20 w-72"
                style={{
                  willChange: "transform",
                  transform: `translate(${-mousePosition.x * 0.2}px, ${
                    -mousePosition.y * 0.2
                  }px)`,
                  transition: "transform 0.15s ease-out",
                }}
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="text-sm font-semibold text-slate-800">
                      E-commerce Website
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      Posted 2 hours ago
                    </div>
                  </div>
                  <div className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                    Open
                  </div>
                </div>
                <div className="text-xs text-slate-600 mb-3">
                  Need a modern e-commerce platform with payment integration
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-blue-600">$5,000</div>
                  <div className="text-xs text-slate-500">12 bids</div>
                </div>
              </motion.div>

              {/* Bid notification */}
              <motion.div
                className="absolute bottom-10 left-12 bg-white/90 backdrop-blur-md border border-green-200 rounded-2xl p-4 shadow-xl shadow-green-500/20"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-green-500/50">
                    ✓
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800">
                      Bid Approved!
                    </div>
                    <div className="text-xs text-slate-500">
                      Project starts tomorrow
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Central connecting element */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/50"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                }}
              >
                <div className="text-white text-2xl font-bold">⚡</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
