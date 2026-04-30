import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useConfig } from '../context/ConfigContext';

export const Navbar: React.FC = () => {
  const { config } = useConfig();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-paper/80 backdrop-blur-md border-b border-ink/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl tracking-tight text-ink">
          {config.shopName}
        </Link>
        
        <div className="hidden md:flex items-center space-x-12">
          {['Menu', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-xs uppercase tracking-[0.2em] font-medium text-ink/60 hover:text-ink transition-colors"
            >
              {item}
            </a>
          ))}
          <Link 
            to="/admin" 
            className="text-[10px] uppercase tracking-[0.2em] px-4 py-2 border border-ink/10 rounded-full hover:bg-ink hover:text-paper transition-all"
          >
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
};
