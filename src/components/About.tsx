import { useState } from 'react';
import { TrendingUp, Wallet, GraduationCap } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision'>('mission');

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              About Us
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Description */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-yellow-500/20">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Money Plant Club is a <span className="text-yellow-400 font-semibold">student-led initiative</span> focused on 
                <span className="text-yellow-400 font-semibold"> financial awareness</span>, 
                <span className="text-yellow-400 font-semibold"> entrepreneurship</span>, and 
                <span className="text-yellow-400 font-semibold"> wealth management</span>.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We aim to <span className="text-yellow-400 font-semibold">bridge the gap</span> between 
                technical education and financial literacy, empowering students with real-world money management skills.
              </p>
            </div>

            {/* Tabs */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-yellow-500/20 overflow-hidden">
              <div className="flex border-b border-yellow-500/20">
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`flex-1 px-6 py-4 text-center font-semibold transition-all duration-300 ${
                    activeTab === 'mission'
                      ? 'bg-yellow-500/20 text-yellow-400 border-b-2 border-yellow-400'
                      : 'text-gray-400 hover:text-white hover:bg-yellow-500/10'
                  }`}
                >
                  Our Mission
                </button>
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`flex-1 px-6 py-4 text-center font-semibold transition-all duration-300 ${
                    activeTab === 'vision'
                      ? 'bg-yellow-500/20 text-yellow-400 border-b-2 border-yellow-400'
                      : 'text-gray-400 hover:text-white hover:bg-yellow-500/10'
                  }`}
                >
                  Our Vision
                </button>
              </div>

              <div className="p-8">
                {activeTab === 'mission' && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-yellow-400 mb-4">Mission</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Empower students with financial literacy and real-world money management skills through 
                      workshops, events, and practical learning experiences.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                      <div className="text-center p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                        <div className="w-8 h-8 mx-auto mb-2 text-yellow-400 modern-icon">
                          <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                        <div className="text-sm text-gray-300">Growth</div>
                      </div>
                      <div className="text-center p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                        <div className="w-8 h-8 mx-auto mb-2 text-yellow-400 modern-icon">
                          <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="8" stroke="currentColor" fill="none"/>
                            <path d="M12 8v4m0 0h4" stroke="currentColor" strokeLinecap="round"/>
                            <text x="12" y="16" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="bold">$</text>
                          </svg>
                        </div>
                        <div className="text-sm text-gray-300">Wealth</div>
                      </div>
                      <div className="text-center p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                        <div className="w-8 h-8 mx-auto mb-2 text-yellow-400 modern-icon">
                          <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <rect x="6" y="4" width="12" height="16" rx="2" stroke="currentColor" fill="none"/>
                            <path d="M10 8h4M10 12h4" stroke="currentColor" strokeLinecap="round"/>
                          </svg>
                        </div>
                        <div className="text-sm text-gray-300">Learning</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'vision' && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-yellow-400 mb-4">Vision</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Build financially intelligent individuals for sustainable growth, creating a generation 
                      of students who are confident in managing their finances and building wealth.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                      <div className="text-center p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                        <div className="w-8 h-8 mx-auto mb-2 text-yellow-400">
                          <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                        <div className="text-sm text-gray-300">Growth</div>
                      </div>
                      <div className="text-center p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                        <div className="w-8 h-8 mx-auto mb-2 text-yellow-400">
                          <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" stroke="currentColor" fill="none"/>
                            <path d="M12 8v4l3 3" stroke="currentColor" strokeLinecap="round"/>
                          </svg>
                        </div>
                        <div className="text-sm text-gray-300">Innovation</div>
                      </div>
                      <div className="text-center p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                        <div className="w-8 h-8 mx-auto mb-2 text-yellow-400">
                          <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div className="text-sm text-gray-300">Success</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 backdrop-blur-lg rounded-2xl p-8 border border-yellow-500/20 h-full min-h-[400px] flex items-center justify-center">
              <div className="text-center space-y-6">
                {/* Animated Icons */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="animate-pulse">
                    <div className="flex justify-center mb-2">
                      <TrendingUp className="w-10 h-10 text-yellow-400" strokeWidth={1.5} />
                    </div>
                    <div className="text-sm text-gray-400">Growth</div>
                  </div>
                  <div className="animate-pulse" style={{ animationDelay: '0.5s' }}>
                    <div className="flex justify-center mb-2">
                      <Wallet className="w-10 h-10 text-yellow-400" strokeWidth={1.5} />
                    </div>
                    <div className="text-sm text-gray-400">Wealth</div>
                  </div>
                  <div className="animate-pulse" style={{ animationDelay: '1s' }}>
                    <div className="flex justify-center mb-2">
                      <GraduationCap className="w-10 h-10 text-yellow-400" strokeWidth={1.5} />
                    </div>
                    <div className="text-sm text-gray-400">Learning</div>
                  </div>
                </div>

                {/* Central Message */}
                <div className="pt-6">
                  <div className="text-2xl font-bold text-yellow-400 mb-2">
                    Financial Intelligence
                  </div>
                  <div className="text-gray-300">
                    Building tomorrow's financial leaders today
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="professional-card">
            <div className="icon mb-4 mx-auto">
              <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-yellow-400">Focus Areas</h3>
            <p className="text-gray-300">Financial awareness, entrepreneurship, and wealth management</p>
          </div>
          <div className="professional-card">
            <div className="icon mb-4 mx-auto">
              <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-yellow-400">Bridge Education</h3>
            <p className="text-gray-300">Connecting technical knowledge with financial literacy</p>
          </div>
          <div className="professional-card">
            <div className="icon mb-4 mx-auto">
              <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-yellow-400">Student Led</h3>
            <p className="text-gray-300">Driven by passionate students for student success</p>
          </div>
        </div>
      </div>
    </section>
  );
}
