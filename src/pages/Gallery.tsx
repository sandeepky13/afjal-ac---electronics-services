import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Image as ImageIcon, ZoomIn, Info, Phone, Plus, X } from 'lucide-react';
import { useData } from '../hooks';

export function Gallery() {
  const { gallery, isAdmin, updateGallery } = useData();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newImage, setNewImage] = useState({ title: '', url: '' });

  const handleAddImage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newImage.title && newImage.url) {
      updateGallery([{ ...newImage, id: Date.now().toString() }, ...gallery]);
      setNewImage({ title: '', url: '' });
      setIsAdding(false);
    }
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-5xl font-black mb-6 font-display">Work <span className="text-neon-blue">Gallery</span></h1>
          <p className="text-gray-400 max-w-xl mx-auto">Visual proof of our precision. See how we process, repair, and restore your modern appliances.</p>
        </motion.div>

        {/* Admin controls */}
        {isAdmin && (
          <div className="mb-16 flex justify-center">
             <button 
               onClick={() => setIsAdding(!isAdding)}
               className="flex items-center gap-2 px-8 py-3 bg-neon-blue text-dark-bg font-bold rounded-xl shadow-[0_0_20px_rgba(0,242,255,0.3)] hover:scale-105 transition-all uppercase tracking-widest text-xs"
             >
                {isAdding ? <X size={16} /> : <Plus size={16} />}
                {isAdding ? 'Cancel Import' : 'Add Image'}
             </button>
          </div>
        )}

        {isAdding && isAdmin && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-16 glass-card p-10 rounded-3xl border-neon-blue/20 bg-neon-blue/5 max-w-2xl mx-auto"
          >
             <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <ImageIcon className="text-neon-blue" size={20} aria-hidden="true" />
                Import New Gallery Asset
              </h3>
             <form onSubmit={handleAddImage} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="space-y-2">
                      <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold px-1">Project Title</label>
                      <input 
                        required
                        placeholder="e.g. Inverter AC PCB Repair" 
                        className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-neon-blue transition-all"
                        value={newImage.title}
                        onChange={e => setNewImage({...newImage, title: e.target.value})}
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold px-1">Image URL</label>
                      <input 
                        required
                        type="url"
                        placeholder="https://..." 
                        className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-neon-blue transition-all"
                        value={newImage.url}
                        onChange={e => setNewImage({...newImage, url: e.target.value})}
                      />
                   </div>
                </div>
                <button type="submit" className="w-full py-4 bg-white text-dark-bg font-bold rounded-xl hover:bg-neon-blue transition-all flex items-center justify-center gap-2">
                   Add to Gallery <Plus size={18} />
                </button>
             </form>
          </motion.div>
        )}

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8" aria-label="Repair work photo gallery">
          {gallery.map((image, index) => (
            <motion.div
              layoutId={image.id}
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedImage(image.url)}
              role="button"
              aria-label={`View larger image of ${image.title}`}
              className="relative group cursor-pointer break-inside-avoid rounded-3xl overflow-hidden glass-card p-2 border-white/5"
            >
               <img 
                 src={image.url} 
                 alt={`Repair project: ${image.title} - performed by AFJAL AC Services`} 
                 className="w-full h-auto rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700" 
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-2 bg-gradient-to-t from-dark-bg/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all rounded-2xl flex flex-col justify-end p-6">
                 <h4 className="text-lg font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{image.title}</h4>
                 <div className="flex items-center gap-2 text-neon-blue text-xs font-bold uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                   <ZoomIn size={14} aria-hidden="true" /> Full View
                 </div>
               </div>
            </motion.div>
          ))}
        </div>

        {/* Modal/Lightview */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] bg-dark-bg/95 backdrop-blur-xl flex items-center justify-center p-4 lg:p-20"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image full screen view"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative max-w-4xl w-full h-full flex items-center justify-center"
            >
               <img 
                 src={selectedImage} 
                 alt="Enlarged view of repair work"
                 className="max-w-full max-h-full object-contain rounded-2xl shadow-[0_0_50px_rgba(0,242,255,0.2)]" 
                 referrerPolicy="no-referrer"
               />
               <button 
                onClick={() => setSelectedImage(null)}
                aria-label="Close image view"
                className="absolute top-4 right-4 text-white text-sm font-bold bg-white/10 px-4 py-2 rounded-full hover:bg-neon-blue hover:text-dark-bg transition-all"
               >
                 Close [ESC]
               </button>
            </motion.div>
          </div>
        )}

        {gallery.length === 0 && (
           <div className="text-center py-40 bg-white/5 rounded-[3rem] border border-dashed border-white/10">
              <ImageIcon className="mx-auto text-gray-700 mb-4" size={50} aria-hidden="true" />
              <p className="text-gray-500 font-bold uppercase tracking-[0.3em]">Gallery Under Maintenance</p>
           </div>
        )}

        <div className="mt-24 p-12 glass-card rounded-[3rem] border-white/5 text-center bg-neon-blue/5">
           <h3 className="text-2xl font-bold mb-4">Want to see your device here?</h3>
           <p className="text-gray-400 mb-8 max-w-sm mx-auto">Book a service today and experience premium electronics restoration.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+911234567890" aria-label="Call for service" className="px-10 py-4 bg-neon-blue text-dark-bg font-bold rounded-2xl glow-button flex items-center justify-center gap-2">
                <Phone size={20} aria-hidden="true" /> Call Technician
              </a>
           </div>
        </div>
      </div>
    </div>
  );
}

