import { useState } from 'react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio?: string;
  social: {
    linkedin?: string;
    instagram?: string;
    email?: string;
  };
}

export default function Team() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Karthik Moger",
      role: "President",
      image: "president",
      bio: "Leading the club with vision and passion for financial education",
      social: {
        linkedin: "#",
        instagram: "#",
        email: "karthik@moneyplantclub.com"
      }
    },
    {
      id: 2,
      name: "Tanushree M",
      role: "Student Coordinator",
      image: "coordinator",
      bio: "Organizing events and managing team coordination",
      social: {
        linkedin: "#",
        instagram: "#",
        email: "tanushree@moneyplantclub.com"
      }
    },
    {
      id: 3,
      name: "Bharadwaj B R",
      role: "Technical Lead",
      image: "technical",
      bio: "Managing technical aspects and digital initiatives",
      social: {
        linkedin: "#",
        email: "bharadwaj@moneyplantclub.com"
      }
    },
    {
      id: 4,
      name: "Yogendra Naik",
      role: "Events Manager",
      image: "events",
      bio: "Planning and executing successful club events",
      social: {
        linkedin: "#",
        instagram: "#",
        email: "yogendra@moneyplantclub.com"
      }
    },
    {
      id: 5,
      name: "Shradha Basavaraj",
      role: "Marketing Lead",
      image: "marketing",
      bio: "Handling marketing and promotional activities",
      social: {
        linkedin: "#",
        instagram: "#",
        email: "shradha@moneyplantclub.com"
      }
    },
    {
      id: 6,
      name: "Dwithin",
      role: "Finance Coordinator",
      image: "finance",
      bio: "Managing club finances and sponsorships",
      social: {
        linkedin: "#",
        email: "dwithin@moneyplantclub.com"
      }
    }
  ];

  const getRoleColor = (role: string) => {
    if (role.includes('President')) return 'from-purple-500 to-pink-500';
    if (role.includes('Coordinator')) return 'from-blue-500 to-cyan-500';
    if (role.includes('Technical')) return 'from-yellow-500 to-yellow-600';
    if (role.includes('Events')) return 'from-orange-500 to-red-500';
    if (role.includes('Marketing')) return 'from-pink-500 to-purple-500';
    if (role.includes('Finance')) return 'from-yellow-500 to-orange-500';
    return 'from-yellow-500 to-yellow-600';
  };

  const handleSocialClick = (platform: string, url: string) => {
    console.log(`Opening ${platform}: ${url}`);
    // In a real app, this would open the social media link
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            The passionate individuals driving financial literacy forward
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative team-card"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Glassmorphism Card */}
              <div className="relative professional-card hover:bg-yellow-500/10 hover:shadow-yellow-500/20 hover:shadow-xl">
                
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${getRoleColor(member.role)} blur-xl`}></div>

                {/* Profile Image */}
                <div className="relative z-10 text-center mb-6">
                  <div className="relative inline-block avatar-container">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 flex items-center justify-center border-2 border-yellow-500/30 group-hover:scale-110 transition-transform duration-300 overflow-hidden avatar-image">
                      {/* Neutral placeholder silhouette */}
                      <svg className="w-16 h-16 text-yellow-400/60" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    {/* Animated Ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-yellow-400 opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="relative z-10 text-center">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  {/* Role Badge */}
                  <div className={`inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-gradient-to-r ${getRoleColor(member.role)} text-white`}>
                    {member.role}
                  </div>

                  {/* Bio - Show on Hover */}
                  <div className={`text-center transition-all duration-300 ${
                    hoveredMember === member.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}>
                    <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                  </div>

                  {/* Social Icons - Show on Hover */}
                  <div className={`flex justify-center space-x-3 transition-all duration-300 ${
                    hoveredMember === member.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}>
                    {member.social.linkedin && (
                      <button
                        onClick={() => handleSocialClick('LinkedIn', member.social.linkedin!)}
                        className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 hover:bg-blue-500/30 transition-colors duration-300"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </button>
                    )}
                    
                    {member.social.instagram && (
                      <button
                        onClick={() => handleSocialClick('Instagram', member.social.instagram!)}
                        className="w-10 h-10 rounded-full bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400 hover:bg-pink-500/30 transition-colors duration-300"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                        </svg>
                      </button>
                    )}
                    
                    {member.social.email && (
                      <button
                        onClick={() => handleSocialClick('Email', `mailto:${member.social.email}`)}
                        className="w-10 h-10 rounded-full bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center text-yellow-400 hover:bg-yellow-500/30 transition-colors duration-300"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Tilt Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-yellow-500/20">
          <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">Our Team Strength</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">6+</div>
              <div className="text-gray-300">Core Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-gray-300">Active Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">10+</div>
              <div className="text-gray-300">Events Organized</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-gray-300">Dedicated Team</div>
            </div>
          </div>
        </div>

        {/* Join Team CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">Want to Join Our Team?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals who want to make a difference in financial education.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105">
            Apply to Join Team
          </button>
        </div>
      </div>
    </section>
  );
}
