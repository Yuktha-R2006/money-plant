import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  CheckCircle,
  ArrowLeft,
  User,
  TrendingUp,
  Lightbulb,
  ExternalLink,
} from "lucide-react";

export function EventDetails() {
  const { eventId } = useParams();

  const eventData: Record<
    string,
    {
      title: string;
      date: string;
      time: string;
      location: string;
      attendees: string;
      category: string;
      icon: React.ReactNode;
      gradient: string;
      registrationLink?: string;
      description: string;
      longDescription: string;
      highlights: string[];
      speakers: { name: string; role: string; company: string; bio: string }[];
    }
  > = {
    wealthwise: {
      title: "WealthWise – Trading Workshop",
      date: "December 19,2025",
      time: "9:30 AM - 12:30 PM",
      location: "BSN Auditorium",
      attendees: "150+",
      category: "Workshop+Inaguration",
      icon: <TrendingUp className="w-12 h-12" />,
      gradient: "from-[#d4af37] to-[#aa8a2b]",
      registrationLink: "",
      description:
        "An intensive 3-hour workshop designed to transform beginners into confident traders. Learn from industry veterans who have navigated bull and bear markets successfully.",
      longDescription:
        "This comprehensive trading workshop covers everything from market fundamentals to advanced technical analysis. You'll gain hands-on experience with real-time trading simulations, learn to interpret market indicators, and develop your own trading strategy tailored to your risk profile.",
      highlights: [
        "Introduction to stock market mechanics and trading platforms",
        "Technical analysis: reading charts, patterns, and indicators",
        "Risk management and position sizing strategies",
        "Live trading simulation with real market data",
        "Building your personalized trading plan",
        "Q&A session with professional traders",
      ],
      speakers: [
        {
          name: "Avneesh Asija",
          role: "Founder MD",
          company: "TRADESTEADY",
          bio: "10+ years of experience in equity trading and portfolio management",
        }
      ],
    },
    hackonomics: {
      title: "Hackonomics 2026 – Ideathon",
      date: "March 13, 2026",
      time: "10:00 AM - 6:00 PM",
      location: "APJ Abdul Kalam Auditorium,Lab Block",
      attendees: "200+",
      category: "Competition",
      icon: <Lightbulb className="w-12 h-12" />,
      gradient: "from-[#C9A227] to-[#A67C00]",
      registrationLink: "",
      description:
        "A full-day ideathon bringing together innovative minds to solve real-world financial challenges through technology and creative business models.",
      longDescription:
        "Hackonomics is our flagship innovation challenge where students form teams to develop groundbreaking fintech solutions. From blockchain applications to AI-powered investment tools, participants will pitch their ideas to industry judges for exciting prizes and mentorship opportunities.",
      highlights: [
        "Team formation and problem statement reveal",
        "Ideation workshops with industry mentors",
        "Prototype development and business model canvas",
        "Pitch preparation and presentation coaching",
        "Final presentations to expert judging panel",
        "Networking session with venture capitalists and startup founders",
      ],
      speakers: [
        {
          name: "BEYOND THE BEAN",
          role: "MD & CEO",
          company: "BEYOND THE BEAN",
          bio: " Entrepreneur with 3 successful exits",
        }
      ],
    },
  };

  const event = eventData[eventId || "wealthwise"];

  if (!event) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4 text-[#e8e8ea]">Event Not Found</h1>
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#f4e5b8]"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 via-transparent to-[#C9A227]/5"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#f4e5b8] transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Events
          </Link>
        </div>
      </section>

      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`bg-gradient-to-r ${event.gradient} rounded-3xl p-12 mb-12`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-grow">
                <span className="inline-block px-4 py-1 bg-[#0a0e1a]/50 text-white rounded-full text-sm mb-4 backdrop-blur-sm">
                  {event.category}
                </span>
                <h1 className="text-5xl md:text-6xl mb-6 text-white">{event.title}</h1>
                <p className="text-xl text-white/90 mb-8 max-w-3xl leading-relaxed">
                  {event.description}
                </p>
              </div>
              <div className="hidden lg:flex w-24 h-24 bg-[#0a0e1a]/50 rounded-2xl items-center justify-center text-white backdrop-blur-sm">
                {event.icon}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#0a0e1a]/50 backdrop-blur-sm rounded-xl p-4">
                <Calendar className="w-6 h-6 text-white mb-2" />
                <p className="text-sm text-white/70">Date</p>
                <p className="text-white">{event.date}</p>
              </div>
              <div className="bg-[#0a0e1a]/50 backdrop-blur-sm rounded-xl p-4">
                <Clock className="w-6 h-6 text-white mb-2" />
                <p className="text-sm text-white/70">Time</p>
                <p className="text-white">{event.time}</p>
              </div>
              <div className="bg-[#0a0e1a]/50 backdrop-blur-sm rounded-xl p-4">
                <MapPin className="w-6 h-6 text-white mb-2" />
                <p className="text-sm text-white/70">Location</p>
                <p className="text-white">{event.location}</p>
              </div>
              <div className="bg-[#0a0e1a]/50 backdrop-blur-sm rounded-xl p-4">
                <Users className="w-6 h-6 text-white mb-2" />
                <p className="text-sm text-white/70">Attendees</p>
                <p className="text-white">{event.attendees}</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl mb-6 text-[#e8e8ea]">Event Overview</h2>
                <p className="text-lg text-[#9ca3af] leading-relaxed mb-6">
                  {event.longDescription}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-3xl mb-6 text-[#e8e8ea]">Key Highlights</h2>
                <div className="space-y-4">
                  {event.highlights.map((highlight: string, index: number) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <CheckCircle className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                      <p className="text-[#9ca3af] leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl mb-6 text-[#e8e8ea]">Guest Speakers</h2>
                <div className="space-y-6">
                  {event.speakers.map((speaker: { name: string; role: string; company: string; bio: string }, index: number) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-[#141824] to-[#1f2937] rounded-xl border border-[#d4af37]/20 p-6 hover:border-[#d4af37] transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#C9A227] rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="w-8 h-8 text-[#0a0e1a]" />
                        </div>
                        <div className="flex-grow">
                          <h4 className="text-xl mb-1 text-[#e8e8ea]">{speaker.name}</h4>
                          <p className="text-[#d4af37] mb-2">
                            {speaker.role} • {speaker.company}
                          </p>
                          <p className="text-[#9ca3af]">{speaker.bio}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sticky top-24"
              >
                <div className="bg-gradient-to-br from-[#141824] to-[#1f2937] rounded-2xl border border-[#d4af37]/30 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl text-[#e8e8ea]">Register Now</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${event.registrationLink && event.registrationLink.trim() !== ''
                        ? "bg-[#C9A227]/20 text-[#C9A227]"
                        : "bg-red-500/20 text-red-400"
                        }`}
                    >
                      {event.registrationLink && event.registrationLink.trim() !== '' ? "Open" : "Closed"}
                    </span>
                  </div>
                  <p className="text-[#9ca3af] mb-6 leading-relaxed">
                    Secure your spot at this exclusive event. Limited seats available!
                  </p>
                  {event.registrationLink && event.registrationLink.trim() !== '' ? (
                    <a
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-[#d4af37] to-[#aa8a2b] text-[#0a0e1a] text-center rounded-lg hover:shadow-lg hover:shadow-[#d4af37]/20 transition-all duration-300 mb-4"
                    >
                      Register for Event
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  ) : (
                    <div className="flex items-center justify-center w-full px-6 py-4 bg-[#1f2937] text-[#9ca3af] text-center rounded-lg border border-[#d4af37]/20 cursor-not-allowed opacity-50 mb-4">
                      Registration Closed
                    </div>
                  )}
                  <p className="text-sm text-center text-[#9ca3af]">
                    Free for Money Plant Club members
                  </p>
                </div>

                <div className="mt-8 bg-gradient-to-br from-[#141824] to-[#1f2937] rounded-2xl border border-[#C9A227]/30 p-8">
                  <h3 className="text-xl mb-4 text-[#e8e8ea]">Share This Event</h3>
                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 bg-[#1f2937] hover:bg-[#d4af37]/10 text-[#9ca3af] hover:text-[#d4af37] rounded-lg border border-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-300">
                      Twitter
                    </button>
                    <button className="flex-1 px-4 py-2 bg-[#1f2937] hover:bg-[#d4af37]/10 text-[#9ca3af] hover:text-[#d4af37] rounded-lg border border-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-300">
                      LinkedIn
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
