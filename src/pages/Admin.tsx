import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { LayoutDashboard, Trash2, Plus, LogOut, Image as ImageIcon, Video as VideoIcon, Star, User } from 'lucide-react';
import { useData } from '../hooks';
import { useNavigate } from 'react-router-dom';

export function Admin() {
  const [activeTab, setActiveTab] = useState<'reviews' | 'gallery' | 'videos'>('reviews');
  const { reviews, gallery, videos, updateReviews, updateGallery, updateVideos, isAdmin, logout } = useData();
  const navigate = useNavigate();

  // Redirect if not logged in
  useEffect(() => {
    if (!isAdmin) {
      navigate('/login');
    }
  }, [isAdmin, navigate]);

  // Form states
  const [newImage, setNewImage] = useState({ title: '', url: '' });
  const [newVideo, setNewVideo] = useState({ title: '', youtubeId: '' });

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const deleteItem = (type: 'review' | 'gallery' | 'video', id: string) => {
    if (type === 'review') updateReviews(reviews.filter(r => r.id !== id));
    if (type === 'gallery') updateGallery(gallery.filter(g => g.id !== id));
    if (type === 'video') updateVideos(videos.filter(v => v.id !== id));
  };

  const addItem = (type: 'gallery' | 'video') => {
    if (type === 'gallery' && newImage.url && newImage.title) {
       updateGallery([{ ...newImage, id: Date.now().toString() }, ...gallery]);
       setNewImage({ title: '', url: '' });
    }
    if (type === 'video' && newVideo.youtubeId && newVideo.title) {
       updateVideos([{ ...newVideo, id: Date.now().toString() }, ...videos]);
       setNewVideo({ title: '', youtubeId: '' });
    }
  };

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
           <div className="flex items-center gap-4">
              <LayoutDashboard size={32} className="text-neon-blue" />
              <h1 className="text-4xl font-bold font-display">Command Center</h1>
           </div>
           <button 
             onClick={handleLogout}
             className="flex items-center gap-2 px-6 py-3 bg-red-500/10 text-red-500 border border-red-500/20 rounded-xl hover:bg-red-500 hover:text-white transition-all text-xs font-bold uppercase tracking-widest"
           >
              <LogOut size={16} /> Disconnect
           </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
           {/* Sidebar */}
           <div className="lg:col-span-1 space-y-4">
              <button 
                onClick={() => setActiveTab('reviews')}
                className={`w-full p-4 rounded-2xl flex items-center gap-4 transition-all ${activeTab === 'reviews' ? 'bg-neon-blue text-dark-bg font-bold shadow-[0_0_15px_rgba(0,242,255,0.4)]' : 'glass-card border-white/5 text-gray-400 hover:bg-white/5'}`}
              >
                 <Star size={20} /> Reviews ({reviews.length})
              </button>
              <button 
                onClick={() => setActiveTab('gallery')}
                className={`w-full p-4 rounded-2xl flex items-center gap-4 transition-all ${activeTab === 'gallery' ? 'bg-neon-blue text-dark-bg font-bold shadow-[0_0_15px_rgba(0,242,255,0.4)]' : 'glass-card border-white/5 text-gray-400 hover:bg-white/5'}`}
              >
                 <ImageIcon size={20} /> Gallery ({gallery.length})
              </button>
              <button 
                onClick={() => setActiveTab('videos')}
                className={`w-full p-4 rounded-2xl flex items-center gap-4 transition-all ${activeTab === 'videos' ? 'bg-neon-blue text-dark-bg font-bold shadow-[0_0_15px_rgba(0,242,255,0.4)]' : 'glass-card border-white/5 text-gray-400 hover:bg-white/5'}`}
              >
                 <VideoIcon size={20} /> Videos ({videos.length})
              </button>
           </div>

           {/* Main Content */}
           <div className="lg:col-span-3">
              {activeTab === 'reviews' && (
                 <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-8">Manage Reviews</h2>
                    {reviews.map(review => (
                       <div key={review.id} className="p-6 glass-card rounded-2xl border-white/5 flex flex-col md:flex-row justify-between gap-6 items-start">
                          <div className="flex-1">
                             <div className="flex items-center gap-4 mb-4">
                                <span className="font-bold text-neon-blue flex items-center gap-1"><User size={14}/> {review.name}</span>
                                <span className="text-xs text-gray-600">{review.date}</span>
                             </div>
                             <p className="text-gray-400 text-sm italic">"{review.content}"</p>
                          </div>
                          <button 
                            onClick={() => deleteItem('review', review.id)}
                            className="p-3 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all flex items-center gap-2 text-xs font-bold"
                          >
                             <Trash2 size={16} /> Delete
                          </button>
                       </div>
                    ))}
                 </div>
              )}

              {activeTab === 'gallery' && (
                 <div className="space-y-12">
                    <div className="p-8 glass-card rounded-3xl border-neon-blue/20 bg-neon-blue/5">
                       <h3 className="text-lg font-bold mb-6">Import New Asset</h3>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <input 
                            placeholder="Image Title" 
                            className="bg-dark-bg border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-neon-blue transition-all"
                            value={newImage.title}
                            onChange={e => setNewImage({...newImage, title: e.target.value})}
                          />
                          <input 
                            placeholder="Image Delivery URL" 
                            className="bg-dark-bg border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-neon-blue transition-all"
                            value={newImage.url}
                            onChange={e => setNewImage({...newImage, url: e.target.value})}
                          />
                       </div>
                       <button 
                         onClick={() => addItem('gallery')}
                         className="flex items-center gap-2 px-8 py-4 bg-white text-dark-bg font-bold rounded-xl hover:bg-neon-blue transition-all"
                       >
                          <Plus size={18} /> Push to Gallery
                       </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       {gallery.map(image => (
                          <div key={image.id} className="glass-card rounded-2xl border-white/5 p-4 relative group">
                             <img src={image.url} className="w-full h-40 object-cover rounded-xl mb-4 grayscale hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                             <div className="flex justify-between items-center">
                                <span className="text-xs font-bold uppercase tracking-tight">{image.title}</span>
                                <button onClick={() => deleteItem('gallery', image.id)} className="text-red-500 hover:scale-110 transition-transform"><Trash2 size={16}/></button>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
              )}

              {activeTab === 'videos' && (
                 <div className="space-y-12">
                     <div className="p-8 glass-card rounded-3xl border-neon-blue/20 bg-neon-blue/5">
                       <h3 className="text-lg font-bold mb-6">Integrate YouTube Stream</h3>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <input 
                            placeholder="Video Headline" 
                            className="bg-dark-bg border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-neon-blue transition-all"
                            value={newVideo.title}
                            onChange={e => setNewVideo({...newVideo, title: e.target.value})}
                          />
                          <input 
                            placeholder="YouTube ID (e.g. dQw4w9WgXcQ)" 
                            className="bg-dark-bg border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-neon-blue transition-all"
                            value={newVideo.youtubeId}
                            onChange={e => setNewVideo({...newVideo, youtubeId: e.target.value})}
                          />
                       </div>
                       <button 
                         onClick={() => addItem('video')}
                         className="flex items-center gap-2 px-8 py-4 bg-white text-dark-bg font-bold rounded-xl hover:bg-neon-blue transition-all"
                       >
                          <Plus size={18} /> Mount Video
                       </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       {videos.map(video => (
                          <div key={video.id} className="glass-card rounded-2xl border-white/5 p-4 relative group">
                             <div className="aspect-video rounded-xl bg-black mb-4 flex items-center justify-center text-gray-700">
                                <VideoIcon size={40} />
                             </div>
                             <div className="flex justify-between items-center">
                                <span className="text-xs font-bold uppercase tracking-tight">{video.title}</span>
                                <button onClick={() => deleteItem('video', video.id)} className="text-red-500 hover:scale-110 transition-transform"><Trash2 size={16}/></button>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
              )}
           </div>
        </div>
      </div>
    </div>
  );
}
