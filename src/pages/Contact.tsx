import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, Clock, User, MessageCircle } from 'lucide-react';

export function Contact() {
  const [formState, setFormState] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formState);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: '', phone: '', message: '' });
  };

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-black mb-6 font-display uppercase tracking-tight">Get In <span className="text-neon-blue text-glow">Touch</span></h1>
          <p className="text-gray-400 max-w-xl mx-auto">Have an electronic emergency? Drop us a message or find us on the map. We respond faster than a short circuit.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="p-10 glass-card rounded-[2.5rem] border-white/5 space-y-10">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-neon-blue/10 rounded-2xl flex items-center justify-center text-neon-blue shrink-0 shadow-[0_0_15px_rgba(0,242,255,0.1)]">
                   <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-neon-blue font-bold mb-2">Call Us</h4>
                  <p className="text-xl font-bold">+91 91234 56789</p>
                  <p className="text-sm text-gray-500 mt-1">Mon-Sat: 9AM - 8PM</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-neon-blue/10 rounded-2xl flex items-center justify-center text-neon-blue shrink-0 shadow-[0_0_15px_rgba(0,242,255,0.1)]">
                   <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-neon-blue font-bold mb-2">Email Support</h4>
                  <p className="text-xl font-bold">help@afjalac.com</p>
                  <p className="text-sm text-gray-500 mt-1">24/7 Digital Assistant</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-neon-blue/10 rounded-2xl flex items-center justify-center text-neon-blue shrink-0 shadow-[0_0_15px_rgba(0,242,255,0.1)]">
                   <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-neon-blue font-bold mb-2">Location</h4>
                  <p className="text-xl font-bold">Electronics Market, Mumbai</p>
                  <p className="text-sm text-gray-400 mt-1 italic">Opposite City Mall, Shop #42</p>
                </div>
              </div>
            </div>

            {/* Availability Widget */}
            <div className="bg-neon-blue/10 border border-neon-blue/20 p-8 rounded-[2rem] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-neon-blue rounded-full animate-pulse shadow-[0_0_10px_#00f2ff]" />
                <span className="font-bold text-sm tracking-widest uppercase">Center Status: OPEN</span>
              </div>
              <Clock size={20} className="text-neon-blue" />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-10 glass-card rounded-[2.5rem] border-white/5 relative"
          >
             <h3 className="text-2xl font-bold mb-8">Send a Service <span className="text-neon-blue">Request</span></h3>
             
             <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                   <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2 px-1">
                     <User size={12} /> Full Name
                   </label>
                   <input 
                     required
                     type="text" 
                     placeholder="John Doe"
                     className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-neon-blue focus:shadow-[0_0_15px_rgba(0,242,255,0.1)] transition-all"
                     value={formState.name}
                     onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                   />
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2 px-1">
                     <Phone size={12} /> Phone Number
                   </label>
                   <input 
                     required
                     type="tel" 
                     placeholder="+91 00000 00000"
                     className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-neon-blue focus:shadow-[0_0_15px_rgba(0,242,255,0.1)] transition-all"
                     value={formState.phone}
                     onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                   />
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2 px-1">
                     <MessageCircle size={12} /> Message
                   </label>
                   <textarea 
                     required
                     rows={4}
                     placeholder="Describe the issue with your appliance..."
                     className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-neon-blue focus:shadow-[0_0_15px_rgba(0,242,255,0.1)] transition-all resize-none"
                     value={formState.message}
                     onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                   />
                </div>
                
                <button 
                  type="submit" 
                  disabled={submitted}
                  className={`w-full py-5 rounded-2xl font-bold tracking-widest uppercase flex items-center justify-center gap-3 transition-all ${
                    submitted ? 'bg-green-500 text-white' : 'bg-neon-blue text-dark-bg glow-button'
                  }`}
                >
                  {submitted ? 'Request Received!' : 'Ignite Request'}
                  <Send size={18} />
                </button>
             </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-32 w-full h-[400px] bg-dark-surface rounded-[3rem] overflow-hidden border border-white/5 relative group">
           <div className="absolute inset-0 grayscale contrast-125 opacity-40 group-hover:opacity-60 transition-opacity">
              <img src="https://picsum.photos/seed/map/1200/600" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
           </div>
           <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="glass-card p-8 rounded-3xl border-white/5 max-w-sm text-center">
                 <MapPin className="text-neon-blue mx-auto mb-4" size={40} />
                 <h4 className="text-xl font-bold mb-2">Our Headquarter</h4>
                 <p className="text-gray-400 text-sm">Electronics Market, B-Block, Sector 12, Mumbai, 400001</p>
                 <a href="#" className="mt-6 inline-block text-xs font-bold text-neon-blue uppercase underline tracking-tighter">Open in Google Maps</a>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
