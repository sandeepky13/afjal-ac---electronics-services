import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h3 className="text-xl font-bold mb-6">Afjal AC Services</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Your trusted partner for all electronics repair and color services. 
            Providing futuristic solutions for modern devices with over 15 years of excellence.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-blue hover:text-dark-bg transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-blue hover:text-dark-bg transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-blue hover:text-dark-bg transition-all">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 tracking-wide uppercase text-xs text-neon-blue">Services</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/services" className="hover:text-white transition-colors">AC Installation & Repair</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">TV Panel & Board Repair</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Fridge Maintenance</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Washing Machine Service</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 tracking-wide uppercase text-xs text-neon-blue">Company</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition-colors">Work Gallery</Link></li>
            <li><Link to="/reviews" className="hover:text-white transition-colors">Client Reviews</Link></li>
            <li><Link to="/admin" className="hover:text-white transition-colors underline opacity-50">Admin Login</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 tracking-wide uppercase text-xs text-neon-blue">Reach Us</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex gap-3">
              <MapPin size={18} className="text-neon-blue shrink-0" />
              <span>Main Road, Electronics Market, Near City Center, Mumbai</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-neon-blue shrink-0" />
              <span>+91 91234 56789</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-neon-blue shrink-0" />
              <span>info@afjalacservices.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© 2024 Afjal AC and Colour Services Center. All rights reserved.</p>
        <p>Managed by Afjal & Team</p>
      </div>
    </footer>
  );
}
