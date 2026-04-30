import React from 'react';
import { motion } from 'motion/react';
import { useConfig } from '../context/ConfigContext';

export const Menu: React.FC = () => {
  const { config } = useConfig();

  const categories = Array.from(new Set(config.menu.map(item => item.category)));

  return (
    <section id="menu" className="py-32 bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-20">
          <div className="md:col-span-1">
            <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold mb-6 block">
              Curated Selection
            </span>
            <h2 className="text-5xl font-serif mb-8 leading-tight">
              A Taste of <br />
              <span className="italic">Heritage</span>
            </h2>
            <p className="text-paper/60 leading-relaxed font-light mb-12">
              We select only the finest beans from the Central Highlands, roasted to perfection to bring out the bold, iconic Milano flavor profile.
            </p>
            <div className="w-full aspect-square rounded-full overflow-hidden border border-paper/10 p-2">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2070" 
                alt="Coffee" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-16">
            {categories.map((category) => (
              <div key={category} className="space-y-8">
                <h3 className="text-xs uppercase tracking-[0.3em] text-accent font-semibold flex items-center">
                  <span className="w-8 h-[1px] bg-accent mr-3" />
                  {category}
                </h3>
                <div className="grid gap-8">
                  {config.menu
                    .filter(item => item.category === category)
                    .map((item) => (
                      <div key={item.id} className="group flex justify-between items-end border-b border-paper/10 pb-4 hover:border-paper/30 transition-colors">
                        <div className="flex-1 mr-8">
                          <h4 className="text-xl font-serif mb-1 group-hover:text-accent transition-colors">
                            {item.name}
                          </h4>
                          <p className="text-sm text-paper/40 font-light italic">
                            {item.description}
                          </p>
                        </div>
                        <span className="text-lg font-serif">
                          {item.price.toLocaleString()}đ
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
