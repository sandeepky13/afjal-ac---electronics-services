import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Youtube, MonitorPlay, ExternalLink, Phone, Plus, X } from 'lucide-react';
import { useData } from '../hooks';

export function Video() {
  const { videos, isAdmin, updateVideos } = useData();
  const [isAdding, setIsAdding] = useState(false);
  const [newVideo, setNewVideo] = useState({ title: '', youtubeId: '' });

  const handleAddVideo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newVideo.title && newVideo.youtubeId) {
      updateVideos([{ ...newVideo, id: Date.now().toString() }, ...videos]);
      setNewVideo({ title: '', youtubeId: '' });
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
          <h1 className="text-5xl font-black mb-6 font-display"><span className="text-neon-blue">Action</span> Insights</h1>
          <p className="text-gray-400 max-w-xl mx-auto">Watch our lead technicians in action. We share tips, restoration videos, and process explainers.</p>
        </motion.div>

        {/* Admin controls */}
        {isAdmin && (
          <div className="mb-16 flex justify-center">
             <button 
               onClick={() => setIsAdding(!isAdding)}
               className="flex items-center gap-2 px-8 py-3 bg-neon-blue text-dark-bg font-bold rounded-xl shadow-[0_0_20px_rgba(0,242,255,0.3)] hover:scale-105 transition-all uppercase tracking-widest text-xs"
             >
                {isAdding ? <X size={16} /> : <Plus size={16} />}
                {isAdding ? 'Cancel Upload' : 'Add Video'}
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
                <Youtube className="text-neon-blue" size={20} aria-hidden="true" />
                Stream New Video Content
              </h3>
             <form onSubmit={handleAddVideo} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="space-y-2">
                      <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold px-1">Video Headline</label>
                      <input 
                        required
                        placeholder="e.g. Fridge Restoration" 
                        className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-neon-blue transition-all"
                        value={newVideo.title}
                        onChange={e => setNewVideo({...newVideo, title: e.target.value})}
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold px-1">YouTube ID</label>
                      <input 
                        required
                        placeholder="e.g. dQw4w9WgXcQ" 
                        className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-neon-blue transition-all"
                        value={newVideo.youtubeId}
                        onChange={e => setNewVideo({...newVideo, youtubeId: e.target.value})}
                      />
                   </div>
                </div>
                <button type="submit" className="w-full py-4 bg-white text-dark-bg font-bold rounded-xl hover:bg-neon-blue transition-all flex items-center justify-center gap-2">
                   Mount to Dashboard <Plus size={18} />
                </button>
             </form>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" aria-label="Repair demonstration videos">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
               <div className="glass-card rounded-[2.5rem] p-4 border-white/5 relative overflow-hidden group-hover:border-neon-blue/20 transition-all shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]">
                  <div className="aspect-video rounded-3xl overflow-hidden bg-black relative">
                     <iframe
                        className="w-full h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                        title={`Demonstration of ${video.title}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                     ></iframe>
                  </div>
                  <div className="pt-8 px-4 pb-4 flex justify-between items-start">
                     <div>
                        <div className="flex items-center gap-2 mb-2 text-neon-blue uppercase text-[10px] font-bold tracking-[0.2em]">
                           <MonitorPlay size={12} aria-hidden="true" /> Workshop Clip
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors">{video.title}</h3>
                     </div>
                     <a 
                       href={`https://youtube.com/watch?v=${video.youtubeId}`} 
                       target="_blank" 
                       aria-label={`Watch ${video.title} on YouTube`}
                       className="w-12 h-12 rounded-full glass-card border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-neon-blue transition-all"
                     >
                        <ExternalLink size={18} aria-hidden="true" />
                     </a>
                  </div>
               </div>
            </motion.div>
          ))}
        </div>

        {videos.length === 0 && (
           <div className="text-center py-40 border border-dashed border-white/10 rounded-[3rem]">
              <Youtube className="mx-auto text-gray-700 mb-4" size={50} aria-hidden="true" />
              <p className="text-gray-500">No videos uploaded yet. Check back soon!</p>
           </div>
        )}

        <div className="mt-20 p-12 glass-card rounded-[3rem] text-center border-white/5 relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-neon-blue/5 blur-[100px] pointer-events-none" />
           <div className="relative z-10">
              <h4 className="text-2xl font-bold mb-4">Want a professional diagnosis video?</h4>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">We record critical repairs for complex devices so you can see exactly what was fixed in your motherboard.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button aria-label="Subscribe to our YouTube channel" className="px-10 py-4 bg-neon-blue text-dark-bg font-bold rounded-2xl glow-button">Subscribe on Youtube</button>
                <a href="tel:+911234567890" aria-label="Call to request diagnostic session" className="px-10 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold text-white flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                  <Phone size={18} aria-hidden="true" /> Request Live Session
                </a>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

