
import { motion } from "motion/react";
import { Mail, Linkedin, Instagram, User } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  year: string;
  bio: string;
  email: string;
  linkedin: string;
  instagram: string;
}

export function TeamDynamic() {
  const facultyCoordinator = {
    name: "Dr. Anil Verma",
    role: "Faculty Coordinator",
    department: "Department of Commerce & Finance",
    bio: "Ph.D. in Financial Markets with 20+ years of academic and industry experience. Passionate about nurturing financial literacy among students.",
    email: "anil.verma@college.edu",
  };

  const teamMembers: TeamMember[] = [
    {
      id: "1",
      name: "Arjun Patel",
      role: "President",
      year: "Final Year, B.Com (Hons)",
      bio: "Leading the club's vision and strategic initiatives. Experienced in equity research and technical analysis.",
      email: "arjun.patel@student.college.edu",
      linkedin: "#",
      instagram: "#",
    },
    {
      id: "2",
      name: "Sneha Reddy",
      role: "Vice President",
      year: "Third Year, BBA Finance",
      bio: "Manages events and workshops. Passionate about portfolio management and fundamental analysis.",
      email: "sneha.reddy@student.college.edu",
      linkedin: "#",
      instagram: "#",
    },
    {
      id: "3",
      name: "Rohit Singh",
      role: "Technical Head",
      year: "Final Year, B.Com",
      bio: "Oversees technical training programs and trading simulations. Specializes in algorithmic trading.",
      email: "rohit.singh@student.college.edu",
      linkedin: "#",
      instagram: "#",
    },
    {
      id: "4",
      name: "Priya Malhotra",
      role: "Content & Media Lead",
      year: "Third Year, Economics",
      bio: "Creates educational content and manages social media. Focuses on financial journalism and market insights.",
      email: "priya.malhotra@student.college.edu",
      linkedin: "#",
      instagram: "#",
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
            <h1 className="text-6xl mb-6 text-[#e8e8ea]">Our Team</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#C9A227] mx-auto mb-6"></div>
            <p className="text-xl text-[#9ca3af] max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated individuals driving financial excellence and innovation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-4xl mb-12 text-center text-[#e8e8ea]">Faculty Coordinator</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-[#141824] to-[#1f2937] rounded-2xl border border-[#d4af37]/30 overflow-hidden hover:border-[#d4af37] hover:shadow-2xl hover:shadow-[#d4af37]/10 transition-all duration-500">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="bg-gradient-to-br from-[#d4af37] to-[#aa8a2b] p-12 flex items-center justify-center">
                    <div className="w-48 h-48 bg-[#0a0e1a]/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <User className="w-24 h-24 text-white" />
                    </div>
                  </div>
                  <div className="md:col-span-2 p-10">
                    <h3 className="text-3xl mb-2 text-[#e8e8ea]">{facultyCoordinator.name}</h3>
                    <p className="text-xl text-[#d4af37] mb-2">{facultyCoordinator.role}</p>
                    <p className="text-[#9ca3af] mb-6">{facultyCoordinator.department}</p>
                    <p className="text-lg text-[#9ca3af] leading-relaxed mb-6">
                      {facultyCoordinator.bio}
                    </p>
                    <a
                      href={`mailto:${facultyCoordinator.email}`}
                      className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#f4e5b8] transition-colors duration-300"
                    >
                      <Mail className="w-5 h-5" />
                      {facultyCoordinator.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl mb-12 text-center text-[#e8e8ea]">Student Coordinators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((coordinator, index) => (
                <motion.div
                  key={coordinator.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white/3 backdrop-blur-lg rounded-2xl border border-yellow-500/15 p-8 transition-all duration-300 group-hover:scale-103 group-hover:shadow-lg group-hover:shadow-yellow-500/12 h-full">
                    <div className="flex justify-center mb-6">
                      <div className="w-32 h-32 bg-gray-800/50 rounded-full flex items-center justify-center border border-yellow-500/30 group-hover:scale-105 transition-transform duration-300">
                        <User className="w-16 h-16 text-gray-400/80" />
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl mb-2 text-[#e8e8ea] group-hover:text-[#d4af37] transition-colors duration-300">
                        {coordinator.name}
                      </h3>
                      <p className="text-lg text-[#d4af37] mb-1">{coordinator.role}</p>
                      <p className="text-[#9ca3af] mb-4 text-sm">{coordinator.year}</p>
                      <p className="text-[#9ca3af] leading-relaxed mb-6">{coordinator.bio}</p>
                      <div className="flex items-center justify-center gap-4">
                        {/* LinkedIn */}
                        <a
                          href={coordinator.linkedin || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 bg-gray-700/50 border border-gray-600/50 text-gray-400 hover:bg-gray-600/50 hover:text-yellow-400 hover:border-yellow-500/30 rounded-full transition-all duration-300 hover:scale-105"
                          title="LinkedIn"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        
                        {/* Instagram */}
                        <a
                          href={coordinator.instagram || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 bg-gray-700/50 border border-gray-600/50 text-gray-400 hover:bg-gray-600/50 hover:text-yellow-400 hover:border-yellow-500/30 rounded-full transition-all duration-300 hover:scale-105"
                          title="Instagram"
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                        
                        {/* Email */}
                        <a
                          href={`mailto:${coordinator.email || ''}`}
                          className="flex items-center justify-center w-10 h-10 bg-gray-700/50 border border-gray-600/50 text-gray-400 hover:bg-gray-600/50 hover:text-yellow-400 hover:border-yellow-500/30 rounded-full transition-all duration-300 hover:scale-105"
                          title="Email"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
