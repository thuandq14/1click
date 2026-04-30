import React from 'react';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import { motion } from 'motion/react';

export const Home: React.FC = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-paper"
    >
      <Navbar />
      <Hero />
      <Menu />
      <Contact />
      
      <footer className="py-20 border-t border-ink/5 bg-paper">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="font-serif text-2xl">Milano Coffee <span className="italic font-light">Thao Dien</span></p>
          <p className="text-[10px] uppercase tracking-widest text-ink/40 font-bold">
            © 2024 MILANO COFFEE THAO DIEN. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </motion.main>
  );
};
