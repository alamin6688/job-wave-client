/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Send,
  CheckCircle,
  Mail,
  Clock,
  MapPin,
  HelpCircle,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";
import { Button } from "../../Components/Button";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };
  return (
    <>
      <Helmet>
        <title>Contact Us | Job Wave</title>
      </Helmet>
      <div className="bg-white font-sans text-gray-900">
        {/* Hero Section */}
        <section className="py-10 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-blue-600 mb-6">
                <MessageSquare className="w-4 h-4 mr-2" />
                We're here to help
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Have a question, feedback, or need support? We'd love to hear
                from you. Our team typically responds within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                }}
                className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 md:p-12"
              >
                {!isSubmitted ? (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Send us a message
                    </h2>
                    <p className="text-gray-600 mb-8">
                      Fill out the form below and we'll get back to you soon.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            value={formState.name}
                            onChange={(e) =>
                              setFormState({
                                ...formState,
                                name: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            value={formState.email}
                            onChange={(e) =>
                              setFormState({
                                ...formState,
                                email: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Subject
                        </label>
                        <select
                          id="subject"
                          required
                          value={formState.subject}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              subject: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                        >
                          <option value="">Select a topic</option>
                          <option value="general">General Inquiry</option>
                          <option value="support">Technical Support</option>
                          <option value="billing">Billing Question</option>
                          <option value="partnership">
                            Partnership Opportunity
                          </option>
                          <option value="feedback">Product Feedback</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={6}
                          value={formState.message}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              message: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                          placeholder="Tell us more about how we can help..."
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full md:w-auto"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 mb-8">
                      Thanks for reaching out. We'll get back to you within 24
                      hours.
                    </p>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormState({
                          name: "",
                          email: "",
                          subject: "",
                          message: "",
                        });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Direct Contact */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        Email
                      </div>
                      <a
                        href="mailto:support@jobwave.com"
                        className="text-sm text-blue-600 hover:underline"
                      >
                        support@jobwave.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        Support Hours
                      </div>
                      <div className="text-sm text-gray-600">
                        Mon-Fri: 9am - 6pm PST
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        Headquarters
                      </div>
                      <div className="text-sm text-gray-600">
                        San Francisco, CA
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-md transition-all"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-md transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-md transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>

              {/* Quick Help */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                }}
                className="bg-blue-50 rounded-2xl p-6 border border-blue-100"
              >
                <HelpCircle className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Need Quick Help?
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Check out our Help Center for instant answers to common
                  questions.
                </p>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Visit Help Center →
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </div>{" "}
    </>
  );
}
