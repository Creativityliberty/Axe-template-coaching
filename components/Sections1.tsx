'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-6 py-3">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-brand-signal" />
          <span className="font-semibold text-[15px] tracking-wide text-brand-text">AXE</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Approche', 'Méthode', 'Offre', 'Questions'].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-brand-muted hover:text-brand-text transition-colors">
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="#contact" className="bg-brand-signal text-[#0A0A0A] font-medium text-sm px-6 py-3 rounded-full hover:bg-brand-signal/90 hover:scale-105 transition-all focus:ring-2 ring-brand-signal/50 focus:outline-none">
            Prendre un temps d’échange
          </Link>
        </div>

        <button 
          className="md:hidden text-brand-text" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu />
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-24 left-4 right-4 bg-brand-surface border border-white/10 p-4 rounded-3xl flex flex-col gap-4"
        >
          {['Approche', 'Méthode', 'Offre', 'Questions'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-brand-muted px-4 py-3 hover:bg-white/5 rounded-xl transition-colors"
            >
              {item}
            </Link>
          ))}
          <Link 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="bg-brand-signal text-[#0A0A0A] font-medium text-center text-sm px-6 py-4 rounded-full mt-2"
          >
            Prendre un temps d’échange
          </Link>
        </motion.div>
      )}
    </header>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen py-32 flex items-center justify-center overflow-hidden">
      {/* Background Noise & Glow */}
      <div className="absolute inset-0 z-0 opacity-5" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
      <motion.div 
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.15, 0.2, 0.15]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[600px] h-[600px] rounded-full z-0 bg-[radial-gradient(circle,rgba(127,156,139,0.18)_0%,rgba(0,0,0,0)_70%)]"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center gap-8 text-center pt-20">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-mono text-[12px] font-medium tracking-[0.08em] uppercase text-brand-signal"
        >
          Agir sans se trahir.
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, filter: 'blur(12px)', y: 18 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="font-display text-5xl md:text-[108px] font-medium leading-[0.95] tracking-tight text-brand-text"
        >
          Tu sais déjà.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-brand-muted max-w-2xl"
        >
          Et pourtant, rien ne change vraiment.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-8"
        >
          <Link href="#contact" className="bg-brand-signal text-[#0A0A0A] h-14 px-8 rounded-full font-medium text-[15px] flex items-center justify-center hover:scale-[1.02] transition-transform w-full sm:w-auto shadow-[0_0_30px_rgba(127,156,139,0.16)]">
            Prendre un temps d’échange
          </Link>
          <Link href="#approche" className="bg-white/5 border border-white/10 text-brand-text h-14 px-8 rounded-full font-medium text-[15px] flex items-center justify-center hover:-translate-y-0.5 hover:border-white/20 transition-all w-full sm:w-auto">
            Continuer
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export function Mirror() {
  const phrases = [
    { text: "Tu réfléchis trop.", align: "text-left" },
    { text: "Tu analyses tout.", align: "text-right", color: "text-brand-text/80" },
    { text: "Tu sais ce que tu devrais faire.", align: "text-left" },
    { text: "Mais tu ne le fais pas.", align: "text-right", color: "text-brand-signal" },
  ];

  return (
    <section id="approche" className="py-24 md:py-48 px-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-10 md:gap-20">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          className="font-mono text-xs tracking-widest text-brand-muted uppercase"
        >
          Le miroir
        </motion.span>
        
        {phrases.map((phrase, i) => (
          <motion.h2 
            key={i}
            initial={{ opacity: 0, x: phrase.align === "text-left" ? -40 : 40, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ type: "spring", stiffness: 50, damping: 20, delay: i * 0.15 }}
            className={cn("font-display text-4xl md:text-6xl font-medium tracking-tight", phrase.align, phrase.color || "text-brand-text")}
          >
            {phrase.text}
          </motion.h2>
        ))}

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-[22px] text-brand-muted mt-8"
        >
          Tu attends. Tu doutes. Tu restes.
        </motion.p>
      </div>
    </section>
  );
}

export function BreakSection() {
  return (
    <section className="py-24 md:py-40 px-4 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.94, y: 30, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
        className="max-w-4xl text-center flex flex-col items-center gap-8"
      >
        <span className="font-mono text-[12px] font-medium tracking-[0.08em] uppercase text-brand-muted">
          Le vrai nœud
        </span>
        <h2 className="font-display text-4xl md:text-7xl leading-tight font-medium tracking-tight text-brand-text">
          Le problème n’est pas le manque de réponse.<br className="hidden md:block"/> C’est ton incapacité à agir malgré elles.
        </h2>
        <p className="text-lg md:text-xl text-brand-muted max-w-2xl leading-relaxed">
          Tu n’as pas besoin d’en savoir plus. Tu as besoin de pouvoir te faire confiance au moment d’avancer.
        </p>
      </motion.div>
    </section>
  );
}
