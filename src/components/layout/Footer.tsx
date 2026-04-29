import { Link } from "react-router";
import { Mail, Instagram, Linkedin, Twitter } from "lucide-react";
import logoImg from "@/assets/mpc_pic.jpeg";

export function Footer() {
  return (
    <footer className="bg-[#141824] border-t border-[#d4af37]/15 mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="Money Plant Club Logo" className="w-12 h-12 object-contain" />
              <span className="text-lg font-semibold text-[#d4af37]">Money Plant Club</span>
            </div>
            <p className="text-[#9ca3af] mb-6 max-w-md">
              Empowering students with financial literacy, trading expertise, and entrepreneurial
              mindset. Cultivate wealth, build intelligence.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1f2937] hover:bg-[#d4af37] text-[#9ca3af] hover:text-[#0a0e1a] flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1f2937] hover:bg-[#d4af37] text-[#9ca3af] hover:text-[#0a0e1a] flex items-center justify-center transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1f2937] hover:bg-[#d4af37] text-[#9ca3af] hover:text-[#0a0e1a] flex items-center justify-center transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1f2937] hover:bg-[#d4af37] text-[#9ca3af] hover:text-[#0a0e1a] flex items-center justify-center transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[#d4af37] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-[#9ca3af] hover:text-[#d4af37] transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-[#9ca3af] hover:text-[#d4af37] transition-colors duration-300"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#9ca3af] hover:text-[#d4af37] transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-[#9ca3af] hover:text-[#d4af37] transition-colors duration-300"
                >
                  Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#d4af37] mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:moneyplantclub@college.edu"
                  className="text-[#9ca3af] hover:text-[#d4af37] transition-colors duration-300"
                >
                  Email Us
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/911234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9ca3af] hover:text-[#d4af37] transition-colors duration-300"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="tel:+911234567890"
                  className="text-[#9ca3af] hover:text-[#d4af37] transition-colors duration-300"
                >
                  Phone
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#d4af37]/15 text-center text-[#9ca3af]">
          <p>&copy; 2026 Money Plant Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
