import { createContext, useContext, useState, useEffect } from 'react';

const PrivacyContext = createContext(null);

export function PrivacyProvider({ children }) {
  const [privacyMode, setPrivacyMode] = useState(() => {
    const saved = localStorage.getItem('privacyMode');
    // Default to true (privacy on) if not set
    return saved !== null ? JSON.parse(saved) : true;
  });

  const [lastUpdated, setLastUpdated] = useState(() => {
    const saved = localStorage.getItem('lastUpdated');
    return saved ? new Date(saved) : null;
  });

  useEffect(() => {
    localStorage.setItem('privacyMode', JSON.stringify(privacyMode));
  }, [privacyMode]);

  const togglePrivacyMode = () => setPrivacyMode(!privacyMode);

  const updateLastUpdated = () => {
    const now = new Date();
    setLastUpdated(now);
    localStorage.setItem('lastUpdated', now.toISOString());
  };

  // Mask function to hide financial values
  const maskValue = (value, showAsText = false) => {
    if (!privacyMode) return value;
    if (showAsText) return '••••••';
    return '₹ ••••••';
  };

  return (
    <PrivacyContext.Provider value={{ 
      privacyMode, 
      togglePrivacyMode, 
      maskValue,
      lastUpdated,
      updateLastUpdated
    }}>
      {children}
    </PrivacyContext.Provider>
  );
}

export function usePrivacy() {
  const context = useContext(PrivacyContext);
  if (!context) {
    throw new Error('usePrivacy must be used within a PrivacyProvider');
  }
  return context;
}
