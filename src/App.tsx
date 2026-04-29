import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import UpcomingEvents from './components/UpcomingEvents';
import EventsConducted from './components/EventsConducted';
import Sponsors from './components/Sponsors';
import Team from './components/Team';
import Recruitment from './components/Recruitment';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'events', 'team', 'sponsors', 'join'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navbar activeSection={activeSection} />
      
      <section id="home">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="events">
        <UpcomingEvents />
        <EventsConducted />
      </section>
      
      <section id="team">
        <Team />
      </section>
      
      <section id="sponsors">
        <Sponsors />
      </section>
      
      <section id="join">
        <Recruitment />
      </section>
      
      <Footer />
    </div>
  );
}
