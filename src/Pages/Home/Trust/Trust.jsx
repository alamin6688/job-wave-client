/* eslint-disable react/no-unescaped-entities */
import { CheckCircle, Shield } from "lucide-react";
import { motion } from "framer-motion";

const Trust = () => {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.1,
              }}
              className="text-4xl font-bold mb-6"
            >
              Built for trust. Designed for speed.
            </motion.h2>
            <motion.p
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
              }}
              className="text-xl text-gray-400 mb-8 leading-relaxed"
            >
              We've reimagined the freelance experience to eliminate the
              friction. Focus on the work, not the paperwork.
            </motion.p>

            <div className="space-y-6">
              {[
                {
                  title: "Verified Profiles",
                  desc: "Every freelancer is vetted for quality and identity.",
                },
                {
                  title: "Secure Payments",
                  desc: "Escrow protection ensures you get paid for your work.",
                },
                {
                  title: "24/7 Support",
                  desc: "Real humans ready to help whenever you need it.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: idx * 0.1,
                  }}
                  className="flex items-start space-x-4"
                >
                  <div className="p-1 mt-1 bg-blue-500/20 rounded-full">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    $
                  </div>
                  <div>
                    <div className="font-bold">Payment Released</div>
                    <div className="text-sm text-gray-400">Just now</div>
                  </div>
                </div>
                <div className="text-green-400 font-bold">+$2,400.00</div>
              </div>

              <div className="space-y-4">
                <div className="h-2 bg-gray-700 rounded-full w-full" />
                <div className="h-2 bg-gray-700 rounded-full w-3/4" />
                <div className="h-2 bg-gray-700 rounded-full w-1/2" />
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700 flex justify-between items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gray-600 border-2 border-gray-800"
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-400">
                  Project: E-commerce Redesign
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ y: 0, scale: 1, opacity: 1 }}
              animate={{ y: -8, scale: 1.03, opacity: 0.98 }}
              transition={{
                duration: 1.8, // faster but not aggressive
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              style={{
                willChange: "transform, opacity",
                transform: "translateZ(0)",
              }}
              className="absolute -bottom-14 -right-6 bg-white text-gray-900 p-4 rounded-xl shadow-xl flex items-center space-x-3"
            >
              <Shield className="w-6 h-6 text-green-500" />
              <div>
                <div className="font-bold text-sm">100% Secure</div>
                <div className="text-xs text-gray-500">Payment Protection</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
