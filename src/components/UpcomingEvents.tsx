import { useState } from 'react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  category: string;
  registrationLink?: string;
}

export default function UpcomingEvents() {
  const [events] = useState<Event[]>([
    {
      id: 1,
      title: "Stock Market Investment Fundamentals Workshop",
      date: "2026-05-7",
      time: "9:00 AM - 12:30 PM",
      description: "Learn the basics of stock market investing, portfolio diversification, and risk management strategies.",
      category: "Workshop",
      registrationLink: "https://forms.gle/eK1dx2ahcF1FqyX76"
    },
    {
      id: 2,
      title: "Startup Pitch Competition",
      date: "2026-05-28",
      time: "9:00 AM - 5:00 PM",
      description: "Present your business ideas to investors and win exciting prizes. Open to all students.",
      category: "Competition",
      registrationLink: ""
    },
    {
      id: 3,
      title: "Financial Planning 101",
      date: "2026-06-20",
      time: "9:00 AM - 1:00 PM",
      description: "Understand budgeting, saving, and creating a personal financial plan for long-term success.",
      category: "Seminar"
    }
  ]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Workshop':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Competition':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Seminar':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default:
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    }
  };

  const handleRegister = (registrationLink?: string) => {
    if (registrationLink) {
      window.open(registrationLink, '_blank');
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Upcoming Events
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Join us for exciting workshops, competitions, and learning opportunities
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
        </div>

        {events.length === 0 ? (
          // No events placeholder
          <div className="text-center py-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-yellow-500/20 max-w-2xl mx-auto">
              <div className="text-6xl mb-4">📅</div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">No Upcoming Events</h3>
              <p className="text-gray-300 mb-8">
                We're working on exciting new events! Check back soon for updates.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300">
                Get Notified
              </button>
            </div>
          </div>
        ) : (
          // Events Grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-yellow-500/20 hover:bg-yellow-500/10 transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/20 hover:shadow-xl"
              >
                {/* Event Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </span>
                  </div>
                  <div className="text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>

                {/* Event Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                  {event.title}
                </h3>

                {/* Event Date & Time */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {event.time}
                  </div>
                </div>

                {/* Event Description */}
                <p className="text-gray-300 mb-6 line-clamp-3">
                  {event.description}
                </p>

                {/* Register Button */}
                {event.registrationLink && event.registrationLink.trim() !== '' ? (
                  <button
                    onClick={() => handleRegister(event.registrationLink)}
                    className="w-full px-4 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Register Now
                  </button>
                ) : (
                  <button
                    disabled
                    className="w-full px-4 py-3 bg-gray-600/50 text-gray-400 font-semibold rounded-lg cursor-not-allowed opacity-50"
                  >
                    Register Now
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

        {/* View All Events Button */}
        {events.length > 0 && (
          <div className="text-center mt-12">
            <a href="#events" className="inline-block px-8 py-4 border border-yellow-500/50 text-yellow-400 font-semibold rounded-lg bg-yellow-500/10 backdrop-blur-sm transition-all duration-300 hover:bg-yellow-500/20 hover:border-yellow-400 hover:scale-105">
              View All Events
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
