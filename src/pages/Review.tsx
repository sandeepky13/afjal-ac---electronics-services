import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquarePlus, User, Quote, Send } from 'lucide-react';
import { useData } from '../hooks';
import { Review as ReviewType } from '../types';

export function Review() {
  const { reviews, updateReviews } = useData();
  const [newReview, setNewReview] = useState({ name: '', content: '', rating: 5 });
  const [isAdding, setIsAdding] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const review: ReviewType = {
      id: Date.now().toString(),
      name: newReview.name,
      content: newReview.content,
      rating: newReview.rating,
      date: new Date().toISOString().split('T')[0]
    };
    updateReviews([review, ...reviews]);
    setNewReview({ name: '', content: '', rating: 5 });
    setIsAdding(false);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
           <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
             <h1 className="text-5xl font-black mb-4 font-display italic tracking-widest uppercase"><span className="text-neon-blue">Pulse</span> of Reviews</h1>
             <p className="text-gray-400">Authentic feedback from our community of tech-savvy homeowners.</p>
           </motion.div>
           <button 
             onClick={() => setIsAdding(!isAdding)}
             className="flex items-center gap-3 px-8 py-4 bg-neon-blue text-dark-bg font-bold rounded-2xl glow-button"
           >
              <MessageSquarePlus size={20} />
              {isAdding ? 'Close Form' : 'Submit Review'}
           </button>
        </div>

        {/* Add Review Form */}
        {isAdding && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mb-20 overflow-hidden"
          >
            <div className="p-10 glass-card rounded-[2.5rem] border-neon-blue/20 bg-neon-blue/5">
              <h3 className="text-2xl font-bold mb-8">Tell us about your experience</h3>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2 px-1">
                      <User size={12} /> Review Reference
                    </label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. AC Repair Service"
                      className="w-full bg-dark-bg/50 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-neon-blue transition-all"
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2 px-1">
                      Rating
                    </label>
                    <div className="flex gap-4 p-4 glass-card rounded-2xl border-white/5 justify-between">
                       {[1, 2, 3, 4, 5].map((num) => (
                         <button
                           key={num}
                           type="button"
                           onClick={() => setNewReview({ ...newReview, rating: num })}
                           className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-all ${
                             newReview.rating === num ? 'bg-neon-blue text-dark-bg scale-110 shadow-[0_0_10px_#00f2ff]' : 'bg-white/5 text-gray-400'
                           }`}
                         >
                           {num}
                         </button>
                       ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2 px-1">
                      Review Content
                    </label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="Share your experience with our technicians..."
                      className="w-full bg-dark-bg/50 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-neon-blue transition-all resize-none"
                      value={newReview.content}
                      onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
                    />
                  </div>
                  <button type="submit" className="w-full py-4 bg-white text-dark-bg font-bold rounded-2xl hover:bg-neon-blue transition-all flex items-center justify-center gap-2">
                    Broadcast Review <Send size={18} />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}

        {/* Reviews List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="p-8 glass-card rounded-3xl border-white/5 relative group"
            >
              <div className="absolute top-6 right-8 text-white/5 group-hover:text-neon-blue/10 transition-colors">
                 <Quote size={50} aria-hidden="true" />
              </div>
              
              {/* Review Reference Info on Top */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-dark-bg font-bold text-lg shadow-xl shrink-0" aria-hidden="true">
                   {review.name.charAt(0)}
                </div>
                <div>
                   <h4 className="font-bold text-white group-hover:text-neon-blue transition-colors">{review.name}</h4>
                   <div className="flex gap-1 mt-1" aria-label={`${review.rating} out of 5 stars`}>
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={12} 
                        fill={i < review.rating ? "var(--color-neon-blue)" : "none"} 
                        className={i < review.rating ? "text-neon-blue shadow-neon" : "text-gray-700"} 
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Content on Bottom */}
              <p className="text-gray-300 leading-relaxed italic min-h-[80px]">"{review.content}"</p>
              
              <div className="mt-6 flex justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest font-mono">
                 <span aria-label="Review date">{review.date}</span>
                 <span className="text-neon-blue/40">Verified Pulse</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
