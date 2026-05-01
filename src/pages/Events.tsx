import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Calendar,
  MapPin,
  ArrowRight,
  TrendingUp,
  Lightbulb,
  ExternalLink,
} from "lucide-react";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  registrationLink?: string;
  icon: React.ReactNode;
  gradient: string;
}

export function Events() {
  const events: Event[] = [
    {
      id: "wealthwise",
      title: "WealthWise – Trading Workshop",
      date: "April 28, 2026",
      time: "2:00 PM - 5:00 PM",
      location: "Main Auditorium",
      category: "Workshop",
      description:
        "Master stock market trading with industry experts. Learn technical analysis, chart patterns, and risk management strategies.",
      registrationLink: "https://forms.google.com/example-wealthwise",
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: "from-[#d4af37] to-[#aa8a2b]",
    },
    {
      id: "hackonomics",
      title: "Hackonomics 2026 – Ideathon",
      date: "May 12, 2026",
      time: "10:00 AM - 6:00 PM",
      location: "Innovation Lab",
      category: "Competition",
      description:
        "24-hour ideathon focused on innovative fintech solutions. Compete, collaborate, and create the future of finance.",
      registrationLink: "",
      icon: <Lightbulb className="w-6 h-6" />,
      gradient: "from-[#C9A227] to-[#A67C00]",
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
            <h1 className="text-6xl mb-6 text-[#e8e8ea]">Our Events</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#C9A227] mx-auto mb-6"></div>
            <p className="text-xl text-[#9ca3af] max-w-3xl mx-auto leading-relaxed">
              Join our premium workshops, seminars, and competitions designed to elevate your
              financial expertise and entrepreneurial mindset
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-[#141824] to-[#1f2937] rounded-2xl border border-[#d4af37]/20 overflow-hidden hover:border-[#d4af37] hover:shadow-2xl hover:shadow-[#d4af37]/10 transition-all duration-500 h-full flex flex-col">
                  <div className={`bg-gradient-to-r ${event.gradient} p-8`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="px-4 py-1 bg-[#0a0e1a]/50 text-white rounded-full text-sm backdrop-blur-sm">
                          {event.category}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-sm backdrop-blur-sm ${
                            event.registrationLink && event.registrationLink.trim() !== ''
                              ? "bg-[#C9A227]/30 text-white"
                              : "bg-red-500/30 text-white"
                          }`}
                        >
                          {event.registrationLink && event.registrationLink.trim() !== '' ? "Registrations Open" : "Registrations Closed"}
                        </span>
                      </div>
                      <div className="w-12 h-12 bg-[#0a0e1a]/50 rounded-lg flex items-center justify-center text-white backdrop-blur-sm">
                        {event.icon}
                      </div>
                    </div>
                    <h3 className="text-3xl text-white mb-2">{event.title}</h3>
                  </div>

                  <div className="p-8 flex-grow flex flex-col">
                    <p className="text-[#9ca3af] mb-6 leading-relaxed flex-grow">
                      {event.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-[#e8e8ea]">
                        <Calendar className="w-5 h-5 text-[#d4af37]" />
                        <span>
                          {event.date} • {event.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-[#e8e8ea]">
                        <MapPin className="w-5 h-5 text-[#d4af37]" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Link
                        to={`/events/${event.id}`}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#1f2937] text-[#e8e8ea] rounded-lg border border-[#d4af37]/30 hover:bg-[#d4af37]/10 hover:border-[#d4af37] transition-all duration-300"
                      >
                        View Details
                      </Link>
                      {event.registrationLink && event.registrationLink.trim() !== '' ? (
                        <a
                          href={event.registrationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#d4af37] to-[#aa8a2b] text-[#0a0e1a] rounded-lg hover:shadow-lg hover:shadow-[#d4af37]/20 transition-all duration-300"
                        >
                          Register
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        <div className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#1f2937] text-[#9ca3af] rounded-lg border border-[#d4af37]/20 cursor-not-allowed opacity-50">
                          Registration Closed
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
            className="text-center"
          >
            <h2 className="text-4xl mb-6 text-[#e8e8ea]">More Events Coming Soon</h2>
            <p className="text-xl text-[#9ca3af] mb-8">
              Stay tuned for more exciting workshops, seminars, and networking events
            </p>
            <a
              href="mailto:moneyplantclub@college.edu"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#aa8a2b] text-[#0a0e1a] rounded-lg hover:shadow-lg hover:shadow-[#d4af37]/20 transition-all duration-300"
            >
              Contact Us for Updates
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
