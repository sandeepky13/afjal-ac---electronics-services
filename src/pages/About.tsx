import { motion } from 'motion/react';
import { Shield, Clock, Award, Users, CheckCircle, Phone } from 'lucide-react';

export function About() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl font-black mb-8 font-display">Experience. <span className="text-neon-blue">Integrity.</span> Excellence.</h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Afjal AC and Colour Services Center was founded with a single mission: to provide futuristic, reliable, and high-quality electronic repair solutions to our community.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              With over 15 years of hands-on experience in the heartbeat of the electronics industry, we have evolved from a small workshop to a leading service center equipped with state-of-the-art tools and a team of certified technicians.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 glass-card rounded-2xl border-white/5">
                <h4 className="text-3xl font-black text-neon-blue mb-1">15+</h4>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Years Experience</p>
              </div>
              <div className="p-6 glass-card rounded-2xl border-white/5">
                <h4 className="text-3xl font-black text-neon-blue mb-1">5000+</h4>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Happy Clients</p>
              </div>
            </div>
            <a 
              href="tel:+911234567890" 
              aria-label="Call for consultation"
              className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-neon-blue text-dark-bg font-bold rounded-xl glow-button transition-all"
            >
              <Phone size={20} aria-hidden="true" />
              <span>Direct Hotline</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="grid grid-cols-2 gap-4"
          >
             <div className="aspect-[4/5] rounded-3xl overflow-hidden glass-card p-2">
                <img 
                  referrerPolicy="no-referrer" 
                  src="https://picsum.photos/seed/repair-1/600/800" 
                  alt="Technician working on a modern split AC unit"
                  className="w-full h-full object-cover rounded-2xl grayscale" 
                />
             </div>
             <div className="space-y-4 pt-12">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden glass-card p-2">
                   <img 
                     referrerPolicy="no-referrer" 
                     src="https://picsum.photos/seed/repair-2/600/800" 
                     alt="Close up of a repaired circuit board showing precision soldering"
                     className="w-full h-full object-cover rounded-2xl grayscale" 
                   />
                </div>
                <div className="p-8 glass-card rounded-3xl border-white/5 bg-neon-blue/10">
                   <Award className="text-neon-blue mb-4" size={40} aria-hidden="true" />
                   <h4 className="font-bold text-lg leading-tight">Accredited Service Provider</h4>
                </div>
             </div>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <section className="mb-32" aria-label="Core Advantages">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-display">Why <span className="text-neon-blue">Choose Us</span>?</h2>
            <p className="text-gray-500 max-w-xl mx-auto italic">"We don't just fix; we restore performance."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Trusted Warranty', desc: 'Every repair comes with a 3-month service warranty for your peace of mind.' },
              { icon: Clock, title: 'Same Day Service', desc: 'We value your time. Most repairs are completed within 24 hours of booking.' },
              { icon: Users, title: 'Certified Experts', desc: 'Our technicians undergo regular training on the latest electronic technologies.' },
            ].map((item, i) => (
              <div key={i} className="p-10 glass-card rounded-[2rem] border-white/5 hover:bg-white/5 transition-all text-center">
                 <div className="w-16 h-16 bg-neon-blue/10 rounded-full flex items-center justify-center text-neon-blue mx-auto mb-8 shadow-[0_0_15px_rgba(0,242,255,0.1)]">
                   <item.icon size={30} aria-hidden="true" />
                 </div>
                 <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                 <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <div className="p-12 glass-card rounded-[3rem] border-white/5 bg-gradient-to-br from-dark-surface to-dark-bg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
             <div>
               <CheckCircle className="text-neon-blue mx-auto mb-6" size={40} aria-hidden="true" />
               <h3 className="text-xl font-bold mb-3">Precision</h3>
               <p className="text-gray-500 text-sm">Minute details matter in complex circuit boards.</p>
             </div>
             <div className="md:border-x border-white/5 px-12">
               <CheckCircle className="text-neon-blue mx-auto mb-6" size={40} aria-hidden="true" />
               <h3 className="text-xl font-bold mb-3">Honesty</h3>
               <p className="text-gray-500 text-sm">No hidden costs. No unnecessary part changes.</p>
             </div>
             <div>
               <CheckCircle className="text-neon-blue mx-auto mb-6" size={40} aria-hidden="true" />
               <h3 className="text-xl font-bold mb-3">Innovation</h3>
               <p className="text-gray-500 text-sm">Using latest diagnostic tools for modern problems.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

