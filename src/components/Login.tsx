import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, User, ArrowRight } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      onLogin();
    } else {
      setError('Invalid credentials. Please attempt again.');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-paper flex items-center justify-center p-6 bg-[radial-gradient(circle_at_center,_var(--color-accent-600)_0%,_transparent_100%)] bg-[length:100%_100%] bg-no-repeat opacity-90">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white p-12 rounded-sm shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-2 h-full bg-accent" />
        
        <div className="mb-12">
          <h2 className="text-4xl font-serif mb-2">Gateways</h2>
          <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-ink/30">Admin Authentication</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/20" size={18} />
              <input 
                type="text" 
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-4 pl-12 border-b border-ink/10 focus:border-accent outline-none font-medium text-sm transition-all bg-transparent"
              />
            </div>
            
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/20" size={18} />
              <input 
                type="password" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 pl-12 border-b border-ink/10 focus:border-accent outline-none font-medium text-sm transition-all bg-transparent"
              />
            </div>
          </div>

          {error && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs text-red-500 font-medium"
            >
              {error}
            </motion.p>
          )}

          <button 
            type="submit"
            className="w-full py-4 bg-ink text-paper text-[10px] uppercase font-bold tracking-[0.4em] flex items-center justify-center hover:bg-accent transition-all group"
          >
            Authenticate
            <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
          </button>
        </form>
        
        <div className="mt-12 text-center">
          <p className="text-[9px] uppercase tracking-widest text-ink/20 font-bold">Milano Coffee Thao Dien Systems</p>
        </div>
      </motion.div>
    </div>
  );
};
