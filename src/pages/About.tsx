import { motion } from "motion/react";
import { Target, Eye, Calendar, TrendingUp, Users, Lightbulb } from "lucide-react";

export function About() {
  const values = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Financial Excellence",
      description: "Committed to delivering world-class financial education and expertise",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community First",
      description: "Building a supportive network of financially literate students",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Embracing new ideas and technologies in the financial sector",
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 via-transparent to-[#C9A227]/5"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl mb-6 text-[#e8e8ea]">About Us</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#C9A227] mx-auto mb-6"></div>
            <p className="text-xl text-[#9ca3af] max-w-3xl mx-auto leading-relaxed">
              Empowering the next generation of financially savvy leaders and entrepreneurs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-[#141824] to-[#1f2937] rounded-3xl border border-[#d4af37]/30 p-12 mb-16"
          >
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#C9A227] rounded-xl flex items-center justify-center flex-shrink-0">
                <Target className="w-8 h-8 text-[#0a0e1a]" />
              </div>
              <div>
                <h2 className="text-3xl mb-4 text-[#e8e8ea]">Our Objective</h2>
                <p className="text-lg text-[#9ca3af] leading-relaxed">
                  The Money Plant Club is dedicated to cultivating financial intelligence among
                  college students through comprehensive education, practical workshops, and
                  real-world experiences. We bridge the gap between academic finance theory and
                  practical market knowledge, preparing students for successful careers in finance,
                  trading, and entrepreneurship.
                </p>
              </div>
            </div>
            <p className="text-lg text-[#9ca3af] leading-relaxed">
              Our club provides a platform where students can learn about stock markets, wealth
              management, investment strategies, and business development from industry experts and
              experienced professionals. We foster a community of like-minded individuals passionate
              about financial growth and creating sustainable wealth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-[#141824] to-[#1f2937] rounded-2xl border border-[#d4af37]/30 p-10"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#d4af37] to-[#aa8a2b] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-7 h-7 text-[#0a0e1a]" />
                </div>
                <div>
                  <h2 className="text-3xl mb-3 text-[#e8e8ea]">Vision</h2>
                </div>
              </div>
              <p className="text-lg text-[#9ca3af] leading-relaxed">
                To become the premier student organization for financial education, creating a
                generation of financially literate, confident, and responsible investors and
                entrepreneurs who can navigate the complexities of modern markets and build
                sustainable wealth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-[#141824] to-[#1f2937] rounded-2xl border border-[#C9A227]/30 p-10"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#C9A227] to-[#A67C00] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-7 h-7 text-[#0a0e1a]" />
                </div>
                <div>
                  <h2 className="text-3xl mb-3 text-[#e8e8ea]">Mission</h2>
                </div>
              </div>
              <div className="space-y-4 text-lg text-[#9ca3af] leading-relaxed">
                <p>
                  • Provide hands-on learning experiences in trading, investment, and wealth
                  management
                </p>
                <p>• Foster entrepreneurial thinking and business acumen among students</p>
                <p>• Create networking opportunities with industry professionals and alumni</p>
                <p>• Promote financial literacy and responsible money management</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl mb-8 text-center text-[#e8e8ea]">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#141824] to-[#1f2937] rounded-xl border border-[#d4af37]/20 p-8 hover:border-[#d4af37] hover:shadow-lg hover:shadow-[#d4af37]/10 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37]/20 to-[#C9A227]/20 rounded-lg flex items-center justify-center mb-6 text-[#d4af37] group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl mb-3 text-[#e8e8ea] group-hover:text-[#d4af37] transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-[#9ca3af] leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#141824] to-[#1f2937] rounded-2xl border border-[#d4af37]/30 p-10"
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-gradient-to-br from-[#d4af37] to-[#C9A227] rounded-xl flex items-center justify-center flex-shrink-0">
                <Calendar className="w-7 h-7 text-[#0a0e1a]" />
              </div>
              <div>
                <h2 className="text-3xl mb-4 text-[#e8e8ea]">Meeting Frequency</h2>
                <p className="text-lg text-[#9ca3af] leading-relaxed mb-4">
                  We meet twice a month for regular sessions, workshops, and discussions. Our
                  meetings include:
                </p>
                <ul className="space-y-3 text-lg text-[#9ca3af]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#d4af37] mt-1">•</span>
                    <span>
                      <strong className="text-[#e8e8ea]">General Meetings (1st & 3rd week):</strong>{" "}
                      Knowledge sharing sessions, market discussions, and guest speaker talks
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#d4af37] mt-1">•</span>
                    <span>
                      <strong className="text-[#e8e8ea]">Special Events:</strong> Workshops,
                      competitions, and networking events scheduled throughout the semester
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#d4af37] mt-1">•</span>
                    <span>
                      <strong className="text-[#e8e8ea]">Online Sessions:</strong> Weekly market
                      analysis and trading discussions via our community platform
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
