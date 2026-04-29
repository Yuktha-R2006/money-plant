import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400/20 font-mono text-sm animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1.81.45 1.36 1.63 1.36 1.31 0 2.63-1.28 2.63-2.63 0-.38-.04-.74-.1-1.1h2.07c.07.88.33 1.73.67 2.5.67 1.43 0 2.93-.87 3.63-2.01l-2.49-3.89c-.2-.31-.61-.47-1.04-.47-.41 0-.83.17-1.04.47l-2.49 3.89c-.7 1.14-2.2 2.01-3.63 2.01-.87 0-1.7-.2-2.5-.67v2.07h2.07c.36.06.72.1 1.1.1z"/>
            </svg>
          </div>
        ))}
      </div>

      {/* Mouse-following glow */}
      <div
        className="absolute w-96 h-96 rounded-full bg-green-500/10 blur-3xl pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        
        {/* Main content */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
            Money Plant Club
          </span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 font-light">
          Growing Financial Intelligence & Wealth Mindset
        </p>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          A student-led initiative focused on financial awareness, entrepreneurship, and wealth management
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('join')}
            className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-green-500/25"
          >
            <span className="relative z-10">Join the Club</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            onClick={() => scrollToSection('events')}
            className="px-8 py-4 border border-green-500/50 text-green-400 font-semibold rounded-lg bg-green-500/10 backdrop-blur-sm transition-all duration-300 hover:bg-green-500/20 hover:border-green-400 hover:scale-105"
          >
            Explore Events
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
