import React from 'react';
import { motion } from 'motion/react';
import { useConfig } from '../context/ConfigContext';

export const Hero: React.FC = () => {
  const { config } = useConfig();

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-accent font-semibold mb-6 block">
            Est. in Thao Dien
          </span>
          <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] tracking-tighter mb-8 text-ink">
            {config.heroTitle} <br />
            <span className="italic font-light">{config.heroSubtitle}</span>
          </h1>
          <p className="text-lg text-ink/60 max-w-md leading-relaxed mb-10 font-light">
            {config.description}
          </p>
          <div className="flex space-x-6">
            <button className="px-8 py-4 bg-ink text-paper text-xs uppercase tracking-widest font-semibold hover:bg-accent transition-colors rounded-sm">
              Discover Menu
            </button>
            <button className="px-8 py-4 border border-ink/20 text-ink text-xs uppercase tracking-widest font-semibold hover:border-ink transition-colors rounded-sm">
              Our Location
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative aspect-[4/5] md:aspect-square"
        >
          <div className="absolute inset-0 bg-accent/5 rounded-[40%_60%_70%_30%/40%_50%_60%_70%] animate-pulse" />
          <img 
            src={config.images.hero} 
            alt="Hero" 
            className="w-full h-full object-cover rounded-2xl shadow-2xl relative z-10 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute -bottom-6 -left-6 bg-paper p-8 shadow-xl z-20 hidden md:block">
            <p className="font-serif italic text-2xl text-accent">"Sophistication in every drop."</p>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-20 bg-gradient-to-b from-ink/0 via-ink/20 to-ink/0"
        />
      </div>
    </section>
  );
};
