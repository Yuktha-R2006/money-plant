import { useState } from 'react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio?: string;
  social: {
    linkedin?: string;
    email?: string;
  };
}

export default function Team() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const applicationLink = ""; // Set to empty for disabled, or provide valid URL for enabled

  const teamMembers: TeamMember[] = [
    {
      id: 0,
      name: "Dr Balbhadra Kishore ",
      role: "Faculty Coordinator",
      image: "faculty",
      bio: "Guiding the club with expertise and mentorship in financial education",
      social: {
        linkedin: "",
        email: ""
      }
    },
    {
      id: 1,
      name: "Karthik Moger",
      role: "President",
      image: "/team/kartik.png",
      bio: "Leading the club with vision and passion for financial education",
      social: {
        linkedin: "https://www.linkedin.com/in/kartik-moger-b2b226340?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        email: "kartikmoger74@gmail.com"
      }
    },
    {
      id: 2,
      name: "Tanushree M",
      role: "Student Coordinator",
      image: "/team/tanushree.png",
      bio: "Organizing events and managing team coordination",
      social: {
        linkedin: "https://www.linkedin.com/in/tanushree-m?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        email: "tanushreem1605@gmail.com"
      }
    },
    {
      id: 3,
      name: "Bharadwaj B R",
      role: "Technical Head",
      image: "/team/bharadwaj.png",
      bio: "Managing technical aspects and digital initiatives",
      social: {
        linkedin: "https://www.linkedin.com/in/bhadradwaj-bhadra-roy-526927325/",
        email: "bharadwajbhadraroy@gmail.com"
      }
    },
    {
      id: 4,
      name: "Yogendra R Naik",
      role: "Technical Head",
      image: "events",
      bio: "Planning and executing successful club events",
      social: {
        linkedin: "https://www.linkedin.com/in/yogendra-r-naik-aba228347?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        email: "yogendra@moneyplantclub.com"
      }
    },
    {
      id: 5,
      name: "Shradha Basavaraj",
      role: "Media and Design Head",
      image: "/team/shradha.png",
      bio: "Handling marketing and promotional activities",
      social: {
        linkedin: "#",
        email: "hurakadlishradha@gmail.com"
      }
    }
  ];

  const getRoleBadgeColor = (role: string) => {
    if (role.includes('Faculty')) return 'bg-gradient-to-r from-purple-400 to-purple-500';
    if (role.includes('President')) return 'bg-gradient-to-r from-yellow-400 to-yellow-500';
    if (role.includes('Coordinator')) return 'bg-gradient-to-r from-yellow-300 to-yellow-400';
    return 'bg-gradient-to-r from-yellow-200 to-yellow-300';
  };

  const handleSocialClick = (platform: string, url: string) => {
    if (!url || url === "#") return; // prevent empty links

    window.open(url, "_blank");
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
              {/* Premium Profile Card */}
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-yellow-500/20 p-5 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_8px_30px_rgb(234,179,8,0.15)] flex flex-col h-full">

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent pointer-events-none"></div>

                {/* Cover Style Profile Image */}
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-yellow-500/30 bg-gray-800/80 mb-6 group-hover:border-yellow-500/50 transition-colors duration-500 shadow-inner">
                  {member.image && member.image !== "" ? (
                    <img
                      src={member.image}
                      alt={member.name || member.role}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  ) : null}
                  {/* Fallback Icon */}
                  <div className={`w-full h-full flex items-center justify-center ${member.image && member.image !== "" ? 'hidden' : ''}`}>
                    <svg className="w-20 h-20 text-gray-500/50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>

                  {/* Subtle Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>

                {/* Card Content */}
                <div className="flex flex-col items-center flex-grow relative z-10">
                  {/* Name */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300 text-center">
                    {member.name}
                  </h3>

                  {/* Role Badge */}
                  <div className={`inline-block px-4 py-1.5 mb-4 text-xs font-bold rounded-md ${getRoleBadgeColor(member.role)} text-gray-900 uppercase tracking-widest shadow-sm`}>
                    {member.role}
                  </div>

                  {/* Bio */}
                  <div className="text-center mb-6 flex-grow flex items-center justify-center w-full">
                    <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                  </div>

                  {/* Social Icons */}
                  {member.role !== "Faculty Coordinator" && (
                    <div className="flex justify-center gap-4 w-full pt-5 border-t border-yellow-500/10">
                      {/* LinkedIn */}
                      {member.social.linkedin && member.social.linkedin !== "#" && (
                        <button
                          onClick={() => handleSocialClick('LinkedIn', member.social.linkedin as string)}
                          className="w-10 h-10 rounded-lg bg-gray-800/80 border border-gray-600/50 flex items-center justify-center text-gray-400 hover:bg-yellow-500/10 hover:text-yellow-400 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgb(234,179,8,0.2)]"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </button>
                      )}

                      {/* Email */}
                      {member.social.email && member.social.email !== "#" && (
                        <button
                          onClick={() => handleSocialClick('Email', `mailto:${member.social.email}`)}
                          className="w-10 h-10 rounded-lg bg-gray-800/80 border border-gray-600/50 flex items-center justify-center text-gray-400 hover:bg-yellow-500/10 hover:text-yellow-400 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgb(234,179,8,0.2)]"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </button>
                      )}
                    </div>
                  )}
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
              <div className="text-3xl font-bold text-yellow-400 mb-2">10+</div>
              <div className="text-gray-300">Core Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">30+</div>
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
          {applicationLink ? (
            <a
              href={applicationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
            >
              Apply to Join Team
            </a>
          ) : (
            <>
              <button
                disabled
                className="inline-block px-8 py-4 bg-gray-500 text-gray-300 font-semibold rounded-lg cursor-not-allowed opacity-50"
              >
                Apply to Join Team
              </button>
              <p className="text-sm text-gray-500 mt-3">
                Applications are not open yet.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
