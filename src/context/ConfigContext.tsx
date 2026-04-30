import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteConfig } from '../types';
import { INITIAL_CONFIG } from '../constants';

interface ConfigContextType {
  config: SiteConfig;
  updateConfig: (newConfig: SiteConfig) => void;
  isLoading: boolean;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<SiteConfig>(INITIAL_CONFIG);
  const [isLoading, setIsLoading] = useState(true);

  // In a real app, this would fetch from Firestore
  useEffect(() => {
    const saved = localStorage.getItem('milano_config');
    if (saved) {
      try {
        setConfig(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved config", e);
      }
    }
    setIsLoading(false);
  }, []);

  const updateConfig = (newConfig: SiteConfig) => {
    setConfig(newConfig);
    localStorage.setItem('milano_config', JSON.stringify(newConfig));
  };

  return (
    <ConfigContext.Provider value={{ config, updateConfig, isLoading }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) throw new Error('useConfig must be used within ConfigProvider');
  return context;
};
