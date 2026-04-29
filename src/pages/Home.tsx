import { Link } from "react-router";
import { motion } from "motion/react";
import {
  TrendingUp,
  DollarSign,
  Briefcase,
  Target,
  ArrowRight,
  Calendar,
  MapPin,
  Sparkles,
  Mail,
  Phone,
  Instagram,
  Linkedin,
  Twitter,
  MessageCircle,
} from "lucide-react";
import logoImg from "@/assets/mpc_pic.jpeg";

export function Home() {
  const learningAreas = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Trading & Stock Market",
      description: "Master technical analysis, market patterns, and trading strategies",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Wealth Management",
      description: "Learn portfolio optimization, risk management, and investment planning",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Entrepreneurship",
      description: "Develop business acumen, startup strategies, and innovation mindset",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Financial Decision Making",
      description: "Build strategic thinking and data-driven financial decision skills",
    },
  ];

  const upcomingEvents = [
    {
      title: "Portfolio Management Masterclass",
      date: "May 15, 2026",
      category: "Workshop",
    },
    {
      title: "Crypto & Blockchain Seminar",
      date: "June 3, 2026",
      category: "Seminar",
    },
    {
      title: "Market Analysis Session",
      date: "June 20, 2026",
      category: "Session",
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 via-transparent to-[#10b981]/5"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#10b981]/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-[#d4af37]" />
                <span className="text-sm text-[#d4af37]">Premium Financial Education</span>
              </div>

              <h1 className="text-6xl md:text-7xl mb-6 text-[#e8e8ea] leading-tight">
                Money Plant Club
              </h1>

              <p className="text-2xl text-[#d4af37] mb-6 italic">
                Cultivate Wealth. Build Financial Intelligence.
              </p>

              <p className="text-lg text-[#9ca3af] mb-8 leading-relaxed max-w-xl">
                Join a community of forward-thinking students mastering financial literacy, trading
                strategies, and entrepreneurial excellence. Transform your financial future through
                knowledge and practical experience.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/911234567890?text=Hi!%20I%20want%20to%20join%20Money%20Plant%20Club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#aa8a2b] text-[#0a0e1a] rounded-lg hover:shadow-lg hover:shadow-[#d4af37]/20 transition-all duration-300 flex items-center gap-2"
                >
                  Join Club
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <Link
                  to="/events"
                  className="px-8 py-4 bg-[#1f2937] text-[#e8e8ea] rounded-lg border border-[#d4af37]/30 hover:bg-[#d4af37]/10 hover:border-[#d4af37] transition-all duration-300"
                >
                  Explore Events
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/30 to-[#10b981]/30 rounded-full blur-3xl"></div>
                <img
                  src={logoImg}
                  alt="Money Plant Club Logo"
                  className="relative w-96 h-96 object-contain transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#141824]/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4 text-[#e8e8ea]">About Our Club</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#10b981] mx-auto mb-6"></div>
            <p className="text-xl text-[#9ca3af] max-w-3xl mx-auto leading-relaxed">
              Money Plant Club is a premier student-led organization dedicated to cultivating
              financial intelligence and entrepreneurial excellence. We provide practical knowledge
              in trading, investment strategies, wealth management, and business development through
              workshops, seminars, and hands-on experiences.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4 text-[#e8e8ea]">Featured Event</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#10b981] mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#141824] to-[#1f2937] rounded-2xl border border-[#d4af37]/30 overflow-hidden hover:border-[#d4af37] transition-all duration-500 group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12">
                <span className="inline-block px-4 py-1 bg-[#d4af37]/20 text-[#d4af37] rounded-full text-sm mb-4">
                  Featured Workshop
                </span>
                <h3 className="text-4xl mb-4 text-[#e8e8ea]">WealthWise – Trading Workshop</h3>
                <p className="text-lg text-[#9ca3af] mb-6 leading-relaxed">
                  Master the fundamentals of stock market trading with industry experts. Learn
                  technical analysis, chart patterns, risk management, and develop your own trading
                  strategy in this comprehensive workshop.
                </p>
                <div className="flex items-center gap-6 mb-8 text-[#9ca3af]">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#d4af37]" />
                    <span>April 28, 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#d4af37]" />
                    <span>Main Auditorium</span>
                  </div>
                </div>
                <Link
                  to="/events/wealthwise"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#d4af37] text-[#0a0e1a] rounded-lg hover:shadow-lg hover:shadow-[#d4af37]/20 transition-all duration-300 group-hover:gap-4"
                >
                  View Details
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="bg-gradient-to-br from-[#d4af37]/20 to-[#10b981]/20 flex items-center justify-center p-12">
                <div className="text-center">
                  <TrendingUp className="w-32 h-32 text-[#d4af37] mx-auto mb-4" />
                  <p className="text-2xl text-[#d4af37] italic">Learn. Trade. Succeed.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#141824]/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4 text-[#e8e8ea]">Upcoming Events</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#10b981] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#141824] rounded-xl border border-[#d4af37]/20 p-6 hover:border-[#d4af37] hover:shadow-lg hover:shadow-[#d4af37]/10 transition-all duration-300 group"
              >
                <span className="inline-block px-3 py-1 bg-[#10b981]/20 text-[#10b981] rounded-full text-sm mb-4">
                  {event.category}
                </span>
                <h4 className="text-xl mb-3 text-[#e8e8ea] group-hover:text-[#d4af37] transition-colors duration-300">
                  {event.title}
                </h4>
                <div className="flex items-center gap-2 text-[#9ca3af]">
                  <Calendar className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-sm">{event.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4 text-[#e8e8ea]">What You'll Learn</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#10b981] mx-auto mb-6"></div>
            <p className="text-xl text-[#9ca3af] max-w-3xl mx-auto">
              Comprehensive financial education covering all aspects of wealth creation and
              management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-[#141824] to-[#1f2937] rounded-xl border border-[#d4af37]/20 p-8 hover:border-[#d4af37] hover:shadow-lg hover:shadow-[#d4af37]/10 transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37]/20 to-[#10b981]/20 rounded-lg flex items-center justify-center mb-6 text-[#d4af37] group-hover:scale-110 transition-transform duration-300">
                    {area.icon}
                  </div>
                  <h4 className="text-xl mb-3 text-[#e8e8ea] group-hover:text-[#d4af37] transition-colors duration-300">
                    {area.title}
                  </h4>
                  <p className="text-[#9ca3af] leading-relaxed">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#141824] to-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4 text-[#e8e8ea]">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#10b981] mx-auto mb-6"></div>
            <p className="text-xl text-[#9ca3af] max-w-3xl mx-auto leading-relaxed">
              Join our community and start your journey towards financial excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-[#141824] to-[#1f2937] rounded-2xl border border-[#d4af37]/30 p-8">
                <h3 className="text-2xl mb-6 text-[#e8e8ea]">Contact Information</h3>
                <div className="space-y-5">
                  <a
                    href="https://wa.me/911234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-[#1f2937] hover:bg-[#10b981]/10 border border-[#d4af37]/20 hover:border-[#10b981] rounded-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-[#10b981]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MessageCircle className="w-6 h-6 text-[#10b981]" />
                    </div>
                    <div className="flex-grow text-left">
                      <p className="text-sm text-[#9ca3af] mb-1">WhatsApp</p>
                      <p className="text-[#e8e8ea] group-hover:text-[#10b981] transition-colors duration-300">
                        +91 123 456 7890
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#9ca3af] group-hover:text-[#10b981] group-hover:translate-x-1 transition-all duration-300" />
                  </a>

                  <a
                    href="mailto:moneyplantclub@college.edu"
                    className="flex items-center gap-4 p-4 bg-[#1f2937] hover:bg-[#d4af37]/10 border border-[#d4af37]/20 hover:border-[#d4af37] rounded-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-[#d4af37]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-[#d4af37]" />
                    </div>
                    <div className="flex-grow text-left">
                      <p className="text-sm text-[#9ca3af] mb-1">Email</p>
                      <p className="text-[#e8e8ea] group-hover:text-[#d4af37] transition-colors duration-300">
                        moneyplantclub@college.edu
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#9ca3af] group-hover:text-[#d4af37] group-hover:translate-x-1 transition-all duration-300" />
                  </a>

                  <a
                    href="tel:+911234567890"
                    className="flex items-center gap-4 p-4 bg-[#1f2937] hover:bg-[#d4af37]/10 border border-[#d4af37]/20 hover:border-[#d4af37] rounded-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-[#d4af37]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-[#d4af37]" />
                    </div>
                    <div className="flex-grow text-left">
                      <p className="text-sm text-[#9ca3af] mb-1">Phone</p>
                      <p className="text-[#e8e8ea] group-hover:text-[#d4af37] transition-colors duration-300">
                        +91 123 456 7890
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#9ca3af] group-hover:text-[#d4af37] group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-[#141824] to-[#1f2937] rounded-2xl border border-[#10b981]/30 p-8">
                <h3 className="text-2xl mb-6 text-[#e8e8ea]">Connect With Us</h3>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 p-6 bg-[#1f2937] hover:bg-[#d4af37]/10 rounded-xl border border-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-300 group"
                  >
                    <Instagram className="w-8 h-8 text-[#9ca3af] group-hover:text-[#d4af37] group-hover:scale-110 transition-all duration-300" />
                    <span className="text-sm text-[#9ca3af] group-hover:text-[#e8e8ea] transition-colors duration-300">
                      Instagram
                    </span>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 p-6 bg-[#1f2937] hover:bg-[#d4af37]/10 rounded-xl border border-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-300 group"
                  >
                    <Linkedin className="w-8 h-8 text-[#9ca3af] group-hover:text-[#d4af37] group-hover:scale-110 transition-all duration-300" />
                    <span className="text-sm text-[#9ca3af] group-hover:text-[#e8e8ea] transition-colors duration-300">
                      LinkedIn
                    </span>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 p-6 bg-[#1f2937] hover:bg-[#d4af37]/10 rounded-xl border border-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-300 group"
                  >
                    <Twitter className="w-8 h-8 text-[#9ca3af] group-hover:text-[#d4af37] group-hover:scale-110 transition-all duration-300" />
                    <span className="text-sm text-[#9ca3af] group-hover:text-[#e8e8ea] transition-colors duration-300">
                      Twitter
                    </span>
                  </a>
                  <a
                    href="mailto:moneyplantclub@college.edu"
                    className="flex flex-col items-center gap-3 p-6 bg-[#1f2937] hover:bg-[#d4af37]/10 rounded-xl border border-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-300 group"
                  >
                    <Mail className="w-8 h-8 text-[#9ca3af] group-hover:text-[#d4af37] group-hover:scale-110 transition-all duration-300" />
                    <span className="text-sm text-[#9ca3af] group-hover:text-[#e8e8ea] transition-colors duration-300">
                      Email
                    </span>
                  </a>
                </div>

                <div className="p-6 bg-gradient-to-br from-[#d4af37]/10 to-[#10b981]/10 rounded-xl border border-[#d4af37]/30">
                  <h4 className="text-lg mb-3 text-[#e8e8ea]">Office Location</h4>
                  <p className="text-[#9ca3af] leading-relaxed">
                    <MapPin className="w-4 h-4 inline mr-2 text-[#d4af37]" />
                    Student Activity Center
                    <br />
                    Room 204, Main Campus
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
