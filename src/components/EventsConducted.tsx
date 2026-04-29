import { useState } from 'react';

interface PastEvent {
  id: number;
  title: string;
  date: string;
  description: string;
  highlights: string[];
  participants?: number;
  prizePool?: string;
  domains?: string[];
  image?: string;
}

export default function EventsConducted() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  const events: PastEvent[] = [
    {
      id: 1,
      title: "WealthWise – Trading Workshop",
      date: "2024-03-15",
      description: "A comprehensive workshop covering the fundamentals of trading and market analysis.",
      highlights: [
        "Basics of trading and market mechanics",
        "Risk management strategies",
        "Understanding market behavior and psychology",
        "Hands-on trading simulation"
      ],
      participants: 45,
      image: "trading-workshop"
    },
    {
      id: 2,
      title: "Hackonomics 2026 – Ideathon",
      date: "2024-02-20",
      description: "A massive ideathon bringing together innovative minds from various domains.",
      highlights: [
        "200+ participants from multiple colleges",
        "Cross-domain innovation challenges",
        "Mentorship from industry experts",
        "Pitching and presentation skills development"
      ],
      participants: 200,
      prizePool: "₹7000",
      domains: ["AI", "Blockchain", "Robotics", "IoT", "FinTech"],
      image: "hackonomics"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-transparent to-green-500/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Events Conducted
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Celebrating our successful events and their impact
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 to-green-600 opacity-30"></div>

          {/* Events */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Event Card */}
                <div
                  className={`w-full md:w-5/12 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-green-500/20 hover:bg-green-500/10 transition-all duration-300 hover:scale-105 cursor-pointer ${
                    index % 2 === 0 ? 'md:mr-auto md:ml-8' : 'md:ml-auto md:mr-8'
                  }`}
                  onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                >
                  {/* Timeline Dot */}
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-black shadow-lg shadow-green-500/50">
                    <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
                  </div>

                  {/* Event Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-green-400 text-sm font-semibold">
                        {formatDate(event.date)}
                      </span>
                      <div className="text-green-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-gray-300">{event.description}</p>
                  </div>

                  {/* Event Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {event.participants && (
                      <div className="bg-green-500/10 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-green-400">{event.participants}+</div>
                        <div className="text-xs text-gray-400">Participants</div>
                      </div>
                    )}
                    {event.prizePool && (
                      <div className="bg-purple-500/10 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-purple-400">{event.prizePool}</div>
                        <div className="text-xs text-gray-400">Prize Pool</div>
                      </div>
                    )}
                  </div>

                  {/* Expanded Content */}
                  {selectedEvent === event.id && (
                    <div className="mt-6 pt-6 border-t border-green-500/20 animate-fadeIn">
                      <h4 className="text-lg font-semibold text-green-400 mb-4">Key Highlights</h4>
                      <ul className="space-y-2 mb-6">
                        {event.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-300">{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {event.domains && (
                        <div>
                          <h4 className="text-lg font-semibold text-green-400 mb-3">Domains Covered</h4>
                          <div className="flex flex-wrap gap-2">
                            {event.domains.map((domain, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30"
                              >
                                {domain}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* View Details Button */}
                  <button className="w-full mt-4 px-4 py-2 border border-green-500/50 text-green-400 font-semibold rounded-lg bg-green-500/10 backdrop-blur-sm transition-all duration-300 hover:bg-green-500/20 hover:border-green-400">
                    {selectedEvent === event.id ? 'Show Less' : 'View Details'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-green-400 mb-8">Event Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-green-500/20 hover:bg-green-500/10 transition-all duration-300 hover:scale-105"
              >
                <div className="h-48 bg-gradient-to-br from-green-500/20 to-green-600/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      {event.title.includes('Trading') ? (
                        <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      ) : (
                        <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      )}
                    </div>
                    <div className="text-green-400 font-semibold">{event.title}</div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-300 text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-16 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-green-500/20">
          <h3 className="text-2xl font-bold text-center text-green-400 mb-8">Our Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-300">Total Participants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
              <div className="text-gray-300">Events Conducted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">₹50K+</div>
              <div className="text-gray-300">Prize Distribution</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
