import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, ShieldAlert } from 'lucide-react';
import { useData } from '../hooks';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const { login, isAdmin } = useData();
  const navigate = useNavigate();

  // If already logged in, redirect to admin
  React.useEffect(() => {
    if (isAdmin) {
      navigate('/admin');
    }
  }, [isAdmin, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(password);
    if (success) {
      navigate('/admin');
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-4 bg-dark-bg">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-10 glass-card rounded-[2.5rem] border-white/5 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-neon-blue/20" />
        
        <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 transition-all duration-300 ${error ? 'bg-red-500/20 text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.3)]' : 'bg-neon-blue/10 text-neon-blue shadow-[0_0_20px_rgba(0,242,255,0.1)]'}`}>
           {error ? <ShieldAlert size={32} /> : <Lock size={32} />}
        </div>

        <h1 className="text-3xl font-black mb-2 font-display">Secure Access</h1>
        <p className="text-gray-500 text-sm mb-10 tracking-[0.2em] uppercase">Authorized Personnel Only</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
           <div className="relative">
              <input 
                 autoFocus
                 type="password" 
                 placeholder="Enter Admin Password" 
                 className={`w-full bg-white/5 border rounded-2xl px-6 py-4 outline-none transition-all pl-14 font-mono tracking-widest ${error ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-neon-blue'}`}
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
              />
              <Lock className={`absolute left-6 top-1/2 -translate-y-1/2 transition-colors ${error ? 'text-red-500' : 'text-gray-500'}`} size={18} />
           </div>
           
           <button 
             type="submit" 
             className={`w-full py-4 font-bold rounded-2xl tracking-widest uppercase transition-all duration-300 ${error ? 'bg-red-500 text-white' : 'bg-neon-blue text-dark-bg glow-button'}`}
           >
              {error ? 'Access Denied' : 'Verify Identity'}
           </button>
        </form>

        <div className="mt-10 flex items-center justify-between text-[10px] text-gray-600 uppercase tracking-widest font-mono">
           <span>Level 4 Clearance</span>
           <span>Prot: AFJ-99</span>
        </div>
      </motion.div>
    </div>
  );
}
