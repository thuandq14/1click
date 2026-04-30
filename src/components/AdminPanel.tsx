import React, { useState } from 'react';
import { useConfig } from '../context/ConfigContext';
import { motion, AnimatePresence } from 'motion/react';
import { Save, Plus, Trash2, X, Image as ImageIcon, Settings, Coffee, Info } from 'lucide-react';

export const AdminPanel: React.FC = () => {
  const { config, updateConfig } = useConfig();
  const [activeTab, setActiveTab] = useState<'general' | 'menu' | 'images'>('general');
  const [formData, setFormData] = useState(config);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    updateConfig(formData);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const updateMenuItem = (id: string, field: string, value: any) => {
    setFormData({
      ...formData,
      menu: formData.menu.map(item => item.id === id ? { ...item, [field]: value } : item)
    });
  };

  const addMenuItem = () => {
    const newItem = {
      id: Date.now().toString(),
      name: "New Coffee",
      description: "Description here",
      price: 0,
      category: "Classic"
    };
    setFormData({ ...formData, menu: [...formData.menu, newItem] });
  };

  const removeMenuItem = (id: string) => {
    setFormData({ ...formData, menu: formData.menu.filter(item => item.id !== id) });
  };

  return (
    <div className="bg-paper min-h-screen pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-serif mb-2">Editor Panel</h1>
            <p className="text-sm text-ink/40 font-medium uppercase tracking-[0.2em]">Manage your digital sanctuary</p>
          </div>
          <motion.button 
            whileTap={{ scale: 0.95 }}
            onClick={handleSave}
            className="flex items-center px-8 py-4 bg-accent text-paper text-xs uppercase tracking-widest font-bold rounded-sm hover:opacity-90 transition-all shadow-lg"
          >
            <Save size={16} className="mr-3" />
            {isSaved ? "Saved Successfully" : "Publish Changes"}
          </motion.button>
        </div>

        <div className="flex space-x-8 mb-12 border-b border-ink/5">
          {[
            { id: 'general', icon: Settings, label: 'General Info' },
            { id: 'menu', icon: Coffee, label: 'Menu Items' },
            { id: 'images', icon: ImageIcon, label: 'Media' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center pb-4 text-[10px] uppercase tracking-[0.2em] font-bold transition-all relative ${
                activeTab === tab.id ? 'text-accent' : 'text-ink/30 hover:text-ink/60'
              }`}
            >
              <tab.icon size={14} className="mr-2" />
              {tab.label}
              {activeTab === tab.id && (
                <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent" />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'general' && (
            <motion.div 
              key="general"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-ink/40">Shop Name</label>
                  <input 
                    type="text" 
                    value={formData.shopName}
                    onChange={(e) => setFormData({ ...formData, shopName: e.target.value })}
                    className="w-full p-4 border border-ink/10 rounded-sm focus:border-accent outline-none font-serif text-xl"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-ink/40">Contact Phone</label>
                  <input 
                    type="text" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-4 border border-ink/10 rounded-sm focus:border-accent outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-ink/40">Address</label>
                <input 
                  type="text" 
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full p-4 border border-ink/10 rounded-sm focus:border-accent outline-none"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-ink/40">Hero Title</label>
                  <input 
                    type="text" 
                    value={formData.heroTitle}
                    onChange={(e) => setFormData({ ...formData, heroTitle: e.target.value })}
                    className="w-full p-4 border border-ink/10 rounded-sm focus:border-accent outline-none font-serif"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-ink/40">Hero Subtitle</label>
                  <input 
                    type="text" 
                    value={formData.heroSubtitle}
                    onChange={(e) => setFormData({ ...formData, heroSubtitle: e.target.value })}
                    className="w-full p-4 border border-ink/10 rounded-sm focus:border-accent outline-none italic font-serif"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-ink/40">About Description</label>
                <textarea 
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full p-4 border border-ink/10 rounded-sm focus:border-accent outline-none leading-relaxed"
                />
              </div>
            </motion.div>
          )}

          {activeTab === 'menu' && (
            <motion.div 
              key="menu"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="space-y-6"
            >
              {formData.menu.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-sm border border-ink/5 shadow-sm group relative">
                  <button 
                    onClick={() => removeMenuItem(item.id)}
                    className="absolute top-4 right-4 text-ink/20 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                  <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-6">
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase font-bold text-ink/30">Item Name</label>
                      <input 
                        type="text" 
                        value={item.name}
                        onChange={(e) => updateMenuItem(item.id, 'name', e.target.value)}
                        className="w-full bg-transparent border-b border-ink/5 focus:border-accent outline-none font-serif text-lg py-1"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase font-bold text-ink/30">Category</label>
                      <select 
                        value={item.category}
                        onChange={(e) => updateMenuItem(item.id, 'category', e.target.value)}
                        className="w-full bg-transparent border-b border-ink/5 focus:border-accent outline-none py-1 appearance-none"
                      >
                        <option value="Classic">Classic</option>
                        <option value="Modern">Modern</option>
                        <option value="Food">Food</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase font-bold text-ink/30">Price (VND)</label>
                      <input 
                        type="number" 
                        value={item.price}
                        onChange={(e) => updateMenuItem(item.id, 'price', parseInt(e.target.value))}
                        className="w-full bg-transparent border-b border-ink/5 focus:border-accent outline-none py-1"
                      />
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <label className="text-[9px] uppercase font-bold text-ink/30">Description</label>
                    <input 
                      type="text" 
                      value={item.description}
                      onChange={(e) => updateMenuItem(item.id, 'description', e.target.value)}
                      className="w-full bg-transparent border-b border-ink/5 focus:border-accent outline-none italic font-light py-1"
                    />
                  </div>
                </div>
              ))}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={addMenuItem}
                className="w-full py-6 border-2 border-dashed border-ink/10 rounded-sm text-ink/30 hover:text-accent hover:border-accent transition-all flex items-center justify-center uppercase text-[10px] tracking-widest font-bold"
              >
                <Plus size={16} className="mr-2" />
                Add New Menu Item
              </motion.button>
            </motion.div>
          )}

          {activeTab === 'images' && (
            <motion.div 
              key="images"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="grid md:grid-cols-2 gap-12"
            >
              {Object.entries(formData.images).map(([key, url]) => (
                <div key={key} className="space-y-4">
                  <label className="text-[10px] uppercase font-bold text-ink/40 block">{key} Image URL</label>
                  <div className="relative group aspect-video rounded-sm overflow-hidden bg-ink/5 mb-4 border border-ink/5">
                    <img src={url} alt={key} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <input 
                    type="text" 
                    value={url}
                    onChange={(e) => setFormData({ ...formData, images: { ...formData.images, [key]: e.target.value } })}
                    className="w-full p-4 border border-ink/10 rounded-sm focus:border-accent outline-none text-xs text-ink/60"
                  />
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
