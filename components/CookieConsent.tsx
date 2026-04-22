'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('axe-cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('axe-cookie-consent', 'accepted');
    setIsVisible(false);
    // You could trigger analytics initialization here
  };

  const handleDecline = () => {
    localStorage.setItem('axe-cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.6 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-brand-surface border border-white/10 rounded-2xl p-5 md:px-8 md:py-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-lg">
            <div className="flex-1 text-sm text-brand-muted">
              <p>
                Nous utilisons des cookies pour réaliser des statistiques de visites et améliorer votre expérience. 
                Aucune donnée n'est revendue. Vous pouvez ajuster vos préférences ou continuer votre navigation.
              </p>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <button 
                onClick={handleDecline}
                className="flex-1 md:flex-none px-6 py-2.5 rounded-full border border-white/10 text-brand-text hover:bg-white/5 transition-colors text-sm font-medium"
              >
                Refuser
              </button>
              <button 
                onClick={handleAccept}
                className="flex-1 md:flex-none px-6 py-2.5 rounded-full bg-brand-signal text-[#0A0A0A] hover:bg-brand-signal/90 transition-colors text-sm font-medium"
              >
                Accepter
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
