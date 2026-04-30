import React from 'react';
import { motion } from 'motion/react';
import { useConfig } from '../context/ConfigContext';
import { Phone, Mail, MapPin, Instagram, Facebook, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const { config } = useConfig();

  return (
    <section id="contact" className="py-32 bg-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold mb-6 block">
                Connect With Us
              </span>
              <h2 className="text-5xl font-serif mb-6">
                Visit our <span className="italic">Sanctuary</span>
              </h2>
              <p className="text-ink/60 leading-relaxed font-light">
                Located in the heart of the vibrant Thao Dien neighborhood, our cafe offers a quiet escape from the city rush. Come for the coffee, stay for the atmosphere.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center text-accent shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink/30 mb-1">Location</p>
                  <p className="text-sm font-medium">{config.address}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center text-accent shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink/30 mb-1">Phone</p>
                  <a href={`tel:${config.phone}`} className="text-sm font-medium hover:text-accent transition-colors">{config.phone}</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center text-accent shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink/30 mb-1">Email</p>
                  <a href={`mailto:${config.email}`} className="text-sm font-medium hover:text-accent transition-colors">{config.email}</a>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-6 pt-4 border-t border-ink/5">
              <Facebook size={20} className="text-ink/40 hover:text-accent cursor-pointer transition-colors" />
              <Instagram size={20} className="text-ink/40 hover:text-accent cursor-pointer transition-colors" />
            </div>

            <div className="pt-10">
              <button className="w-full py-5 bg-accent text-paper text-xs uppercase tracking-[0.3em] font-bold hover:shadow-2xl transition-all flex items-center justify-center group">
                Order for Delivery
                <ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </button>
              <p className="text-[10px] text-ink/30 mt-4 text-center uppercase tracking-widest font-bold">Available on GrabFood & ShopeeFood</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            <img 
              src={config.images.contact} 
              alt="Interior" 
              className="w-full aspect-[3/4] object-cover rounded-sm shadow-2xl relative z-10"
            />
            <div className="absolute bottom-12 -right-12 bg-accent text-paper p-12 hidden lg:block z-20">
              <p className="text-[10px] uppercase tracking-[0.5em] font-bold mb-4 opacity-70">Experience Thao Dien</p>
              <h3 className="text-4xl font-serif">Open Daily</h3>
              <p className="text-sm mt-4 font-light opacity-80">07:00 AM — 09:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
