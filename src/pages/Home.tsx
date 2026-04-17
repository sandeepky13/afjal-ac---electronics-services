import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Settings, ShieldCheck, Zap, Phone } from 'lucide-react';
import { SERVICES } from '../constants';
import { useData } from '../hooks';

export function Home() {
  const { reviews } = useData();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden" aria-label="Hero">
        {/* Background Gradients */}
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-neon-blue/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-neon-purple/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon-blue/10 border border-neon-blue/20 rounded-full text-neon-blue text-xs font-bold uppercase tracking-widest mb-6">
              <Zap size={14} aria-hidden="true" />
              <span>Next-Gen Repair Services</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight font-display">
              Afjal <span className="text-neon-blue glow-blue">AC</span> & <br /> Electronics
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
              Professional repair services for AC, TV, Fridge, and more. 
              Bridging the gap between faulty electronics and futuristic performance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                aria-label="Book a service appointment"
                className="px-8 py-4 bg-neon-blue text-dark-bg font-bold rounded-xl flex items-center gap-2 glow-button transition-all"
              >
                Book A Service <ArrowRight size={20} aria-hidden="true" />
              </Link>
              <a 
                href="tel:+911234567890" 
                aria-label="Call AFJAL AC technician now"
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <Phone size={20} aria-hidden="true" /> Call Now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 aspect-square rounded-3xl overflow-hidden glass-card p-4">
               <img 
                 src="https://picsum.photos/seed/technician/800/800" 
                 alt="Certified AFJAL technician repairing complex electronic circuit board" 
                 className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-40" />
            </div>
            {/* Floating Badges */}
            <div className="absolute top-10 -left-10 glass-card p-6 rounded-2xl flex items-center gap-4 animate-bounce duration-[3000ms]">
              <div className="w-12 h-12 bg-neon-blue/20 rounded-xl flex items-center justify-center text-neon-blue">
                <ShieldCheck size={28} aria-hidden="true" />
              </div>
              <div>
                <p className="font-bold text-lg">90 Days Warranty</p>
                <p className="text-xs text-gray-500">All parts & labor</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-32 bg-dark-surface/30" aria-label="Featured Services">
        <div className="max-w-7xl mx-auto px-4">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
             <div>
               <h2 className="text-4xl font-bold mb-4 font-display">Specialized <span className="text-neon-blue">Solutions</span></h2>
               <p className="text-gray-400 max-w-lg">We provide end-to-end solutions for all your home appliances with specialized tools and skilled professionals.</p>
             </div>
             <div className="flex gap-4">
               <a href="tel:+911234567890" aria-label="Talk to our specialist" className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-neon-blue hover:text-dark-bg transition-all">
                 <Phone size={18} aria-hidden="true" /> Call Specialist
               </a>
               <Link to="/services" aria-label="Explore all repair categories" className="text-neon-blue font-bold flex items-center gap-2 group px-6 py-3">
                 Explore Categories <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
               </Link>
             </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {SERVICES.slice(0, 3).map((service) => (
               <motion.div 
                 key={service.id}
                 whileHover={{ y: -10 }}
                 className="p-8 glass-card rounded-3xl group border-white/5 hover:border-neon-blue/20 transition-all"
               >
                 <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-neon-blue mb-8 group-hover:bg-neon-blue group-hover:text-dark-bg transition-all">
                   <Settings size={28} aria-hidden="true" />
                 </div>
                 <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                 <p className="text-gray-400 mb-8 leading-relaxed">{service.description}</p>
                 <Link to="/contact" aria-label={`Request service for ${service.name}`} className="text-sm font-bold flex items-center gap-2 text-neon-blue hover:underline">
                    Book Service <ArrowRight size={16} aria-hidden="true" />
                 </Link>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-32" aria-label="Customer Reviews">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16 font-display">What Our <span className="text-neon-blue">Reviews</span> Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.slice(0, 2).map((review) => (
              <div key={review.id} className="p-8 glass-card rounded-2xl text-left border-white/5 relative group">
                {/* Identity on Top */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
                  <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue font-bold" aria-hidden="true">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold group-hover:text-neon-blue transition-colors">{review.name}</h4>
                    <div className="flex gap-1 mt-1" aria-label={`${review.rating} out of 5 stars`}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill={i < review.rating ? "var(--color-neon-blue)" : "none"} className={i < review.rating ? "text-neon-blue" : "text-gray-600"} aria-hidden="true" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content on Bottom */}
                <p className="text-lg italic text-gray-300 mb-6 font-light">"{review.content}"</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">{review.date}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
            <Link to="/reviews" aria-label="View all customer reviews" className="px-8 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all font-bold text-sm">
              Read All Reviews
            </Link>
            <a href="tel:+911234567890" className="px-8 py-3 bg-neon-blue text-dark-bg rounded-full font-bold text-sm glow-button flex items-center gap-2 justify-center">
              <Phone size={16} aria-hidden="true" /> Call for Inquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

