export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSocialClick = (platform: string) => {
    console.log(`Opening ${platform}`);
    // In a real app, this would open the social media links
  };

  return (
    <footer className="relative bg-black border-t border-yellow-500/15">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1: Club Info */}
          <div className="space-y-4">
            {/* Logo/Icon */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 rounded-lg flex items-center justify-center border border-yellow-500/30">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Money Plant Club</h3>
            </div>
            
            {/* Description */}
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Empowering students to achieve financial excellence through education and community.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('events')}
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-left"
                >
                  Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('sponsors')}
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-left"
                >
                  Sponsors
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('join')}
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-left"
                >
                  Join Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect With Us */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-6">Connect With Us</h4>
            <div className="flex space-x-4">
              {/* LinkedIn */}
              <button
                onClick={() => handleSocialClick('LinkedIn')}
                className="w-10 h-10 rounded-lg bg-white/5 border border-yellow-500/20 flex items-center justify-center hover:bg-yellow-500/10 hover:border-yellow-500/40 transition-all duration-300 hover:scale-110 group"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </button>

              {/* Instagram */}
              <button
                onClick={() => handleSocialClick('Instagram')}
                className="w-10 h-10 rounded-lg bg-white/5 border border-yellow-500/20 flex items-center justify-center hover:bg-yellow-500/10 hover:border-yellow-500/40 transition-all duration-300 hover:scale-110 group"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" fill="none"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke="currentColor" fill="none"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor"/>
                </svg>
              </button>

              {/* Twitter */}
              <button
                onClick={() => handleSocialClick('Twitter')}
                className="w-10 h-10 rounded-lg bg-white/5 border border-yellow-500/20 flex items-center justify-center hover:bg-yellow-500/10 hover:border-yellow-500/40 transition-all duration-300 hover:scale-110 group"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-yellow-500/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm opacity-80">
            © 2026 Money Plant Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
