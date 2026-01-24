import { Link } from "react-router-dom";
import { Button } from "../../../Components/Button";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <motion.div
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
    >
      <section className="pt-12 pb-20 px-4 lg:px-0">
        <div className="container mx-auto bg-gray-900 rounded-3xl overflow-hidden relative text-center px-6 py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join thousands of professionals who have already found their next
              opportunity on Job Wave.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/dashboard">
                <Button size="lg" className="w-full sm:w-auto min-w-[200px]">
                  Join as Freelancer
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto min-w-[200px]"
                >
                  Hire Talent
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default CTA;
