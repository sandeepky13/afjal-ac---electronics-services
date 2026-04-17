import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { AirVent, Tv, Refrigerator, Wind, WashingMachine, Microwave, ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ICON_MAP: { [key: string]: any } = {
  AirVent, Tv, Refrigerator, Wind, WashingMachine, Microwave
};

export function Services() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-black mb-6 font-display">Specialized <span className="text-neon-blue">Services</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
            We offer premium repair services for all your electronic needs. 
            From cooling systems to entertainment devices, we handle it all with precision.
          </p>
          <a 
            href="tel:+911234567890" 
            aria-label="Call Afjal AC Services"
            className="inline-flex items-center gap-2 px-8 py-3 bg-neon-blue text-dark-bg font-bold rounded-xl hover:scale-105 transition-all glow-button"
          >
            <Phone size={18} aria-hidden="true" />
            <span>Call Our Expert</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.icon] || AirVent;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 glass-card rounded-3xl border-white/5 hover:border-neon-blue/20 transition-all flex flex-col"
              >
                <div className="relative w-16 h-16 mb-8 group/icon">
                  <div className="w-full h-full bg-white/5 rounded-2xl flex items-center justify-center text-neon-blue group-hover:bg-neon-blue group-hover:text-dark-bg transition-all shadow-[0_0_0_rgba(0,242,255,0)] group-hover:shadow-[0_0_20px_rgba(0,242,255,0.4)]">
                    <Icon size={32} aria-hidden="true" />
                  </div>
                  {/* Tooltip */}
                  <div role="tooltip" className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-neon-blue text-dark-bg text-[10px] font-bold uppercase tracking-wider rounded-md opacity-0 group-hover/icon:opacity-100 transition-opacity pointer-events-none whitespace-nowrap before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-neon-blue shadow-[0_0_10px_rgba(0,242,255,0.4)]">
                    {service.name}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                <p className="text-gray-400 mb-6 flex-grow">{service.description}</p>
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <a 
                      href="tel:+911234567890" 
                      aria-label={`Call for ${service.name}`} 
                      className={`${index === 0 ? 'text-[13px]' : 'text-base'} text-[#10f110] hover:text-white transition-colors flex items-center gap-2 mt-1 font-bold uppercase tracking-widest`}
                    >
                       <Phone size={index === 0 ? 14 : 16} aria-hidden="true" /> Quick Call
                    </a>
                  </div>
                  <Link 
                    to="/contact" 
                    aria-label={`Book service for ${service.name}`}
                    className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-neon-blue hover:text-dark-bg transition-all"
                  >
                    <ArrowRight size={20} aria-hidden="true" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Why choose us in services page */}
        <div className="mt-32 p-8 md:p-12 glass-card rounded-[3rem] border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/5 blur-[80px] pointer-events-none" />
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
               <h2 className="text-3xl font-bold text-center md:text-left">Our Repair Process</h2>
               <a 
                 href="tel:+911234567890" 
                 aria-label="Call for support or assistance"
                 className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-neon-blue hover:text-dark-bg transition-all font-bold text-sm"
               >
                 <Phone size={16} aria-hidden="true" />
                 <span>Call for Process Guidance</span>
               </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
              {[
                { step: '01', title: 'Inspection', desc: 'Deep dive into the issue with modern diagnostics.' },
                { step: '02', title: 'Quotation', desc: 'A transparent and fair price estimate provided.' },
                { step: '03', title: 'Repair', desc: 'Fixing the device using genuine spare parts.' },
                { step: '04', title: 'Quality Check', desc: 'Rigorous testing before final delivery.' }
              ].map((item) => (
                <div key={item.step}>
                  <div className="text-5xl font-black text-white/10 mb-4 font-display" aria-hidden="true">{item.step}</div>
                  <h4 className="text-xl font-bold mb-2 flex items-center gap-2 lg:justify-start justify-center">
                    <CheckCircle2 size={18} className="text-neon-blue" aria-hidden="true" />
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

