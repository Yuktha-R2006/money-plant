export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
              <div className="w-8 h-8 rounded-full overflow-hidden border border-yellow-500/30">
                <img
                  src="/logo.png"
                  alt="Money Plant Club Logo"
                  className="w-full h-full object-cover"
                />
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
               <a
               href="https://www.linkedin.com/in/the-money-plant-club-9142b2407?utm_source=share_via&utm_content=profile&utm_medium=member_android"
               target="_blank"
               rel="noopener noreferrer"
               className="w-10 h-10 rounded-lg bg-white/5 border border-yellow-500/20 flex items-center justify-center hover:bg-yellow-500/10 hover:border-yellow-500/40 transition-all duration-300 hover:scale-110 group"
              >
               <svg
                 className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300"
                 fill="currentColor"
                 viewBox="0 0 24 24"
              >
               <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
</a>

              {/* Instagram */}
              <a
               href="https://www.instagram.com/mpcofbmsit?igsh=bWY4cDR2c2hmZng4"
               target="_blank"
               rel="noopener noreferrer"
               className="w-10 h-10 rounded-lg bg-white/5 border border-yellow-500/20 flex items-center justify-center hover:bg-yellow-500/10 hover:border-yellow-500/40 transition-all duration-300 hover:scale-110 group"
               >
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
               >
             <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
</a>

              {/* Gmail */}
              <a
                href="mailto:moneyplantclub@gmail.com"
                className="w-10 h-10 rounded-lg bg-white/5 border border-yellow-500/20 flex items-center justify-center hover:bg-yellow-500/10 hover:border-yellow-500/40 transition-all duration-300 hover:scale-110 group"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
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
