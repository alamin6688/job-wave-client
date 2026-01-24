import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "How do I create an account?",
    answer:
      'You can create an account by clicking the "Sign In" button at the top right of the page. From there, go to the Sign Up page and fill out your name, email, password, and profile photo. Once completed, you can start posting or bidding on jobs.',
  },
  {
    question: "How does the bidding process work?",
    answer:
      'After finding a job you like, click the "Place Bid" button on the job details page. Submit your bid amount and deadline. The job owner reviews bids and accepts or rejects them. You can track all bids from the "My Bids" page.',
  },
  {
    question: "How do I post a job?",
    answer:
      'Once logged in, go to the "Add Job" page. Enter job details such as title, category, description, deadline, and price range. After submission, freelancers can start bidding on your job.',
  },
  {
    question: "Can I update or delete my posted jobs?",
    answer:
      'Yes. Navigate to the "My Posted Jobs" page where you can edit or delete your listings. You can only manage jobs you created.',
  },
  {
    question: "How do I know if my bid is accepted?",
    answer:
      'Check the status of your bids on the "My Bids" page. Accepted bids will show as "In Progress". Rejected bids will be marked accordingly.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="container mx-auto mt-4 pb-6 px-4 lg:px-0">
      {/* ===== Header ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h1 className="text-2xl lg:text-3xl font-bold capitalize mb-4">
          Frequently Asked Questions
        </h1>
        <p className="w-full md:w-3/4 lg:w-1/2 mx-auto text-gray-500">
          Find answers to the most common questions about our platform. If you
          need further assistance, feel free to reach out to our support team.
        </p>
      </motion.div>

      {/* ===== FAQ Items ===== */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 transition-colors"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex justify-between items-center w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span className="text-lg font-semibold text-gray-900">
                {item.question}
              </span>

              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </motion.span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed text-[17px]">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
