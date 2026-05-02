import { useState, useEffect } from 'react';

interface Sponsor {
  id: number;
  name: string;
  logo: string;
  website?: string;
  description?: string;
}

export default function Sponsors() {
  const [hoveredSponsor, setHoveredSponsor] = useState<number | null>(null);
  const [hoveredLogo, setHoveredLogo] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleLogoClick = (website: string) => {
    if (website && website !== '#') {
      window.open(website, '_blank', 'noopener,noreferrer');
    }
  };

  const sponsors: Sponsor[] = [
    {
      id: 1,
      name: "Beyond the Bean",
      logo: "/sponsors/beyond the bean.png",
      website: "https://beyondthebeancafe.com/",
      description: "Premium coffee partner supporting student innovation"
    },
    {
      id: 2,
      name: "Trade Steady Academy",
      logo: "/sponsors/tradesteady.png",
      website: "https://www.tradesteady.in/",
      description: "Trading education and financial literacy platform"
    }
  ];

  const handleBecomeSponsor = () => {
    // Handle sponsor inquiry
    console.log('Opening sponsor inquiry form');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Our Sponsors & Partners
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Supporting our mission to empower the next generation of financial leaders
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
        </div>


        {/* Sponsors Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="group relative professional-card cursor-pointer bg-white/5 border-yellow-500/20 hover:bg-yellow-500/10 transform transition-all duration-500 hover:scale-105"
              onMouseEnter={() => setHoveredSponsor(sponsor.id)}
              onMouseLeave={() => setHoveredSponsor(null)}
            >
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              {/* Additional glow effect for entire card */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-yellow-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

              {/* Sponsor Logo */}
              <div className="text-center mb-6">
                <div className="relative inline-block mb-4">
                  {/* Tooltip */}
                  {hoveredLogo === sponsor.id && (
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap z-50 backdrop-blur-sm border border-yellow-500/30">
                      {sponsor.name}
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/90 border-l border-b border-yellow-500/30 rotate-45"></div>
                    </div>
                  )}
                  
                  {/* Enhanced glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-yellow-500/30 rounded-full blur-xl opacity-0 transition-all duration-500 transform scale-150 ${hoveredLogo === sponsor.id ? 'opacity-100 scale-200' : ''}`}></div>
                  
                  {/* Logo container with glassmorphism and lift effect */}
                  <div 
                    className={`relative w-24 h-24 mx-auto flex items-center justify-center rounded-full overflow-hidden bg-white/5 backdrop-blur-md border border-yellow-500/30 transform transition-all duration-300 cursor-pointer ${
                      hoveredLogo === sponsor.id 
                        ? 'scale-110 -translate-y-2 bg-yellow-500/15 border-yellow-400/50 shadow-lg shadow-yellow-500/20' 
                        : 'scale-100 translate-y-0'
                    }`}
                    onMouseEnter={() => setHoveredLogo(sponsor.id)}
                    onMouseLeave={() => setHoveredLogo(null)}
                    onClick={() => handleLogoClick(sponsor.website || '#')}
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Sponsor Name */}
              <h3 className="text-xl font-bold text-white text-center mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                {sponsor.name}
              </h3>

              {/* Sponsor Description - Show on Hover */}
              <div className={`text-center transition-all duration-300 ${
                hoveredSponsor === sponsor.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}>
                <p className="text-gray-300 text-sm mb-4">{sponsor.description}</p>
                {sponsor.website && (
                  <a
                    href={sponsor.website}
                    className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mr-2">Visit Website</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-yellow-500/20 mb-16">
          <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">Why Partner With Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-8 h-8 mx-auto mb-4 text-yellow-400 modern-icon">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" fill="none"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Access to Talent</h4>
              <p className="text-gray-300 text-sm">Connect with bright, motivated students interested in finance and technology</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 mx-auto mb-4 text-yellow-400 modern-icon">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" fill="none"/>
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke="currentColor" fill="none"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Brand Visibility</h4>
              <p className="text-gray-300 text-sm">Showcase your brand to the next generation of financial leaders</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 mx-auto mb-4 text-yellow-400 modern-icon">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" fill="none"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Community Impact</h4>
              <p className="text-gray-300 text-sm">Support financial literacy and entrepreneurship education</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">Become a Sponsor</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us in our mission to empower students with financial literacy and entrepreneurial skills. 
            Your support helps us create impactful events and educational opportunities.
          </p>
          
          <div className="flex justify-center">
            <a
              href="mailto:themoneyplantclub@gmail.com?subject=Sponsorship%20Inquiry%20%E2%80%93%20Money%20Plant%20Club&body=Hello%2C%20I%20am%20interested%20in%20sponsoring%20Money%20Plant%20Club.%20Please%20share%20more%20details."
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
            >
              Become a Sponsor
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-2xl p-8 border border-yellow-500/20">
          <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-yellow-400 mb-2">📧</div>
              <p className="text-gray-300">themoneyplantclub@gmail.com</p>
            </div>
            <div>
              <div className="text-yellow-400 mb-2">📱</div>
              <p className="text-gray-300">+91 8277006362</p>
            </div>
            <div>
              <div className="text-yellow-400 mb-2">📍</div>
              <p className="text-gray-300">Bangalore, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
