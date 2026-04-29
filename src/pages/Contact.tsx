import { motion } from "motion/react";
import { Mail, Instagram, Linkedin, Twitter, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We'll get back to you soon.");
    setFormData({ name: "", email: "", interest: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 via-transparent to-[#10b981]/5"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl mb-6 text-[#e8e8ea]">Join Money Plant Club</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#10b981] mx-auto mb-6"></div>
            <p className="text-xl text-[#9ca3af] max-w-3xl mx-auto leading-relaxed">
              Take the first step towards financial excellence. Become part of our community today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-gradient-to-br from-[#141824] to-[#1f2937] rounded-2xl border border-[#d4af37]/30 p-10">
                <h2 className="text-3xl mb-8 text-[#e8e8ea]">Registration Form</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-[#e8e8ea] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#1f2937] border border-[#d4af37]/20 rounded-lg text-[#e8e8ea] placeholder-[#9ca3af] focus:outline-none focus:border-[#d4af37] transition-colors duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[#e8e8ea] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#1f2937] border border-[#d4af37]/20 rounded-lg text-[#e8e8ea] placeholder-[#9ca3af] focus:outline-none focus:border-[#d4af37] transition-colors duration-300"
                      placeholder="your.email@student.college.edu"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-[#e8e8ea] mb-2">
                      Area of Interest *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#1f2937] border border-[#d4af37]/20 rounded-lg text-[#e8e8ea] focus:outline-none focus:border-[#d4af37] transition-colors duration-300"
                    >
                      <option value="">Select your primary interest</option>
                      <option value="trading">Stock Trading & Technical Analysis</option>
                      <option value="investment">Investment & Wealth Management</option>
                      <option value="entrepreneurship">Entrepreneurship & Startups</option>
                      <option value="research">Financial Research & Analysis</option>
                      <option value="general">General Financial Literacy</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[#e8e8ea] mb-2">
                      Why do you want to join? (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#1f2937] border border-[#d4af37]/20 rounded-lg text-[#e8e8ea] placeholder-[#9ca3af] focus:outline-none focus:border-[#d4af37] transition-colors duration-300 resize-none"
                      placeholder="Tell us about your financial goals and what you hope to gain from the club..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#aa8a2b] text-[#0a0e1a] rounded-lg hover:shadow-lg hover:shadow-[#d4af37]/20 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    Submit Application
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-[#141824] to-[#1f2937] rounded-2xl border border-[#d4af37]/30 p-8">
                <h3 className="text-2xl mb-6 text-[#e8e8ea]">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#d4af37]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#d4af37]" />
                    </div>
                    <div>
                      <p className="text-[#9ca3af] text-sm mb-1">Email</p>
                      <a
                        href="mailto:moneyplantclub@college.edu"
                        className="text-[#e8e8ea] hover:text-[#d4af37] transition-colors duration-300"
                      >
                        moneyplantclub@college.edu
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#d4af37]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#d4af37]" />
                    </div>
                    <div>
                      <p className="text-[#9ca3af] text-sm mb-1">Phone</p>
                      <a
                        href="tel:+911234567890"
                        className="text-[#e8e8ea] hover:text-[#d4af37] transition-colors duration-300"
                      >
                        +91 123 456 7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#d4af37]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#d4af37]" />
                    </div>
                    <div>
                      <p className="text-[#9ca3af] text-sm mb-1">Location</p>
                      <p className="text-[#e8e8ea]">
                        Student Activity Center
                        <br />
                        Room 204, Main Campus
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#141824] to-[#1f2937] rounded-2xl border border-[#10b981]/30 p-8">
                <h3 className="text-2xl mb-6 text-[#e8e8ea]">Connect With Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="#"
                    className="flex flex-col items-center gap-3 p-4 bg-[#1f2937] hover:bg-[#d4af37]/10 rounded-lg border border-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-300 group"
                  >
                    <Instagram className="w-6 h-6 text-[#9ca3af] group-hover:text-[#d4af37] transition-colors duration-300" />
                    <span className="text-sm text-[#9ca3af] group-hover:text-[#e8e8ea] transition-colors duration-300">
                      Instagram
                    </span>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col items-center gap-3 p-4 bg-[#1f2937] hover:bg-[#d4af37]/10 rounded-lg border border-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-300 group"
                  >
                    <Linkedin className="w-6 h-6 text-[#9ca3af] group-hover:text-[#d4af37] transition-colors duration-300" />
                    <span className="text-sm text-[#9ca3af] group-hover:text-[#e8e8ea] transition-colors duration-300">
                      LinkedIn
                    </span>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col items-center gap-3 p-4 bg-[#1f2937] hover:bg-[#d4af37]/10 rounded-lg border border-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-300 group"
                  >
                    <Twitter className="w-6 h-6 text-[#9ca3af] group-hover:text-[#d4af37] transition-colors duration-300" />
                    <span className="text-sm text-[#9ca3af] group-hover:text-[#e8e8ea] transition-colors duration-300">
                      Twitter
                    </span>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col items-center gap-3 p-4 bg-[#1f2937] hover:bg-[#d4af37]/10 rounded-lg border border-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-300 group"
                  >
                    <Mail className="w-6 h-6 text-[#9ca3af] group-hover:text-[#d4af37] transition-colors duration-300" />
                    <span className="text-sm text-[#9ca3af] group-hover:text-[#e8e8ea] transition-colors duration-300">
                      Email
                    </span>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#d4af37]/10 to-[#10b981]/10 rounded-2xl border border-[#d4af37]/30 p-8">
                <h3 className="text-xl mb-4 text-[#e8e8ea]">Membership Benefits</h3>
                <ul className="space-y-3 text-[#9ca3af]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Free access to all workshops and seminars</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Networking with industry professionals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Exclusive trading resources and materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Certificate of membership and participation</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
