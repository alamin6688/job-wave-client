import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../../Components/Button";

export function PricingPage() {
  const [userType, setUserType] = useState("freelancer");
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const faqData = [
    {
      question: "Is it really free to join?",
      answer:
        "Yes! Joining Job Wave is completely free. We don't charge any registration or membership fees to create your account and start bidding on jobs. Our freelancers only pay a small service fee when they earn money through the platform.",
    },
    {
      question: "How do payments work?",
      answer:
        "All payments go through our secure escrow system. When you're hired for a job, the employer deposits the agreed amount into escrow. Once you complete the work and the employer approves it, the funds are released to your account. We handle all the financial coordination to ensure both parties are protected.",
    },
    {
      question: "Can I cancel my Pro subscription?",
      answer:
        "Absolutely! You can cancel your Pro subscription anytime from your account settings. There are no long-term contracts or cancellation fees. Your subscription will remain active until the end of your billing period.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major payment methods including credit cards (Visa, Mastercard, American Express), debit cards, PayPal, and bank transfers. The available methods may vary depending on your location.",
    },
    {
      question: "Are there any hidden fees?",
      answer:
        "No hidden fees! We believe in complete transparency. Freelancers pay a small service fee on earnings (5-10% depending on plan), and buyers pay nothing to post jobs. All fees are clearly displayed before you make any payment.",
    },
  ];

  return (
    <div className="bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900 w-full">
      {/* Hero Section */}
      <section className="py-20 px-4 lg:px-0 container mx-auto text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Simple, transparent pricing
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            No hidden fees. No surprises. Pay only when you succeed.
          </p>

          {/* Toggle */}
          <div className="inline-flex bg-gray-100 p-1 rounded-full mb-12">
            <button
              type="button"
              onClick={() => setUserType("freelancer")}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${
                userType === "freelancer"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              For Freelancers
            </button>

            <button
              type="button"
              onClick={() => setUserType("employer")}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${
                userType === "employer"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              For Buyers
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={userType}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {userType === "freelancer" ? (
                <>
                  {/* Freelancer Basic */}
                  <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-left flex flex-col">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Basic
                      </h3>

                      <div className="flex items-baseline mb-4">
                        <span className="text-4xl font-bold text-gray-900">
                          Free
                        </span>
                        <span className="text-gray-500 ml-2">to join</span>
                      </div>

                      <p className="text-gray-600 text-sm">
                        Perfect for getting started and finding your first
                        clients.
                      </p>
                    </div>

                    <ul className="space-y-4 mb-8 flex-1">
                      {[
                        "Create a professional profile",
                        "Bid on up to 10 jobs/month",
                        "Secure payments via escrow",
                        "Basic support",
                        "10% service fee on earnings",
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                          <span className="text-gray-600 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant="outline"
                      className="w-full border-gray-200 text-gray-900 hover:bg-gray-50"
                    >
                      Get Started
                    </Button>
                  </div>

                  {/* Freelancer Pro */}
                  <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-xl text-left flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="mb-6 relative z-10">
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold mb-4">
                        MOST POPULAR
                      </span>

                      <h3 className="text-xl font-bold text-white mb-2">Pro</h3>

                      <div className="flex items-baseline mb-4">
                        <span className="text-4xl font-bold text-white">
                          $12
                        </span>
                        <span className="text-gray-400 ml-2">/month</span>
                      </div>

                      <p className="text-gray-400 text-sm">
                        For serious freelancers scaling their business.
                      </p>
                    </div>

                    <ul className="space-y-4 mb-8 flex-1 relative z-10">
                      {[
                        "Unlimited bids",
                        "Featured profile placement",
                        "See competitor bid ranges",
                        "Priority support",
                        "Reduced 5% service fee",
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5" />
                          <span className="text-gray-300 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button className="w-full relative z-10">
                      Upgrade to Pro
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-left flex flex-col">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Standard
                      </h3>
                      <div className="flex items-baseline mb-4">
                        <span className="text-4xl font-bold text-gray-900">
                          Free
                        </span>
                        <span className="text-gray-500 ml-2">to post</span>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Everything you need to hire great talent.
                      </p>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                      {[
                        "Post unlimited jobs",
                        "Access to global talent pool",
                        "Secure escrow payments",
                        "Standard support",
                        "3% payment processing fee",
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full border-gray-200 text-gray-900 hover:bg-gray-50"
                    >
                      Post a Job
                    </Button>
                  </div>
                  {/* Buyer Enterprise */}
                  <div className="bg-[#111929] rounded-3xl p-8 border border-blue-100 shadow-lg text-left flex flex-col relative overflow-hidden text-white">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="mb-6 relative z-10">
                      <h3 className="text-xl font-boldmb-2">Enterprise</h3>
                      <div className="flex items-baseline mb-4">
                        <span className="text-4xl font-bold">Custom</span>
                      </div>
                      <p className="text-sm">
                        Tailored solutions for high-volume hiring.
                      </p>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1 relative z-10">
                      {[
                        "Dedicated account manager",
                        "Custom contracts & invoicing",
                        "Talent sourcing assistance",
                        "API access",
                        "Volume discounts",
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-white text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full relative z-10">
                      Contact Sales
                    </Button>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently asked questions
            </h2>
            <p className="text-gray-600 text-lg">
              Have questions? We&apos;ve got answers.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 transition-colors"
              >
                <button
                  onClick={() =>
                    setOpenFAQIndex(openFAQIndex === index ? null : index)
                  }
                  className="flex justify-between items-center w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-2xl"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFAQIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openFAQIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openFAQIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
