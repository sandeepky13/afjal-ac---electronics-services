import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, AirVent, Phone, LogOut, LayoutDashboard } from 'lucide-react';
import { useState } from 'react';
import { useData } from '../hooks';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Videos', path: '/videos' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAdmin, logout } = useData();

  const handleLogout = () => {
    logout();
    navigate('/login');
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-dark-bg/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-neon-blue rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(0,242,255,0.4)]">
            <AirVent className="text-dark-bg w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight block leading-tight">AFJAL AC</span>
            <span className="text-[10px] text-neon-blue uppercase tracking-[0.2em] block leading-tight">Electronics & Color</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-neon-blue ${
                location.pathname === link.path ? 'text-neon-blue' : 'text-gray-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {isAdmin ? (
            <div className="flex items-center gap-4 pl-4 border-l border-white/10">
              <Link to="/admin" className="p-2 text-neon-blue hover:bg-neon-blue/10 rounded-lg transition-all" title="Admin Dashboard">
                <LayoutDashboard size={20} />
              </Link>
              <button 
                onClick={handleLogout}
                className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-all"
                title="Disconnect Session"
              >
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <Link to="/login" className="text-xs text-gray-600 hover:text-gray-400 transition-colors uppercase tracking-[0.2em] font-mono">
              Admin
            </Link>
          )}

          <a
            href="https://wa.me/911234567890" 
            className="flex items-center gap-2 px-5 py-2.5 bg-neon-blue text-dark-bg font-bold rounded-full hover:scale-105 active:scale-95 transition-all glow-button"
          >
            <Phone size={16} />
            <span>Book Now</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           className="lg:hidden bg-dark-surface border-b border-white/5 px-4 py-6 flex flex-col gap-4"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-medium ${
                location.pathname === link.path ? 'text-neon-blue' : 'text-gray-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+911234567890"
            className="flex items-center justify-center gap-2 w-full py-4 bg-neon-blue text-dark-bg font-bold rounded-xl"
          >
            <Phone size={20} />
            <span>Call Now</span>
          </a>
        </motion.div>
      )}
    </nav>
  );
}
