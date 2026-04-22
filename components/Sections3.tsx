'use client';

import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export function Offer() {
  const plans = [
    { name: "Session simple", duration: "1 séance", price: "80€ – 120€", body: "Pour faire un point net. Nommer ce qui bloque. Ouvrir un premier mouvement." },
    { name: "Format recommandé", duration: "4 semaines", price: "300€ – 600€", body: "Pour traverser un vrai réalignement. Sessions + suivi + actes concrets entre les rendez-vous.", featured: true },
    { name: "Travail profond", duration: "8 semaines", price: "800€ – 1500€", body: "Pour stabiliser durablement un nouveau rapport à toi-même, à tes choix et à l’action." }
  ];

  return (
    <section id="offre" className="py-24 md:py-40 px-4 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-brand-muted">L’offre</span>
            <h2 className="font-display text-4xl md:text-[56px] leading-[1.02] font-medium tracking-tight text-brand-text">
              AXE — Le Process
            </h2>
          </div>
          <p className="text-lg text-brand-muted max-w-[420px]">
            Un accompagnement 1:1 pour sortir du bruit intérieur et reconstruire une capacité d’action réelle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.75, delay: i * 0.1 }}
              className={`p-10 rounded-[32px] h-auto min-h-[460px] flex flex-col justify-between ${
                plan.featured 
                ? 'bg-gradient-to-b from-brand-signal/10 to-brand-surface border border-brand-signal/30 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.4)] relative' 
                : 'bg-brand-surface border border-white/10'
              }`}
            >
              {plan.featured && (
                 <div className="absolute top-0 right-10 -translate-y-1/2 bg-brand-signal text-[#0A0A0A] font-medium text-xs px-4 py-1.5 rounded-full">
                   Recommandé
                 </div>
              )}
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-3xl font-medium">{plan.name}</h3>
                  <div className="flex flex-col text-sm font-mono text-brand-muted tracking-widest uppercase">
                    <span>{plan.duration}</span>
                    <span className="text-brand-signal mt-1">{plan.price}</span>
                  </div>
                </div>
                <p className="text-brand-muted/90 text-[17px] leading-relaxed">{plan.body}</p>
              </div>
              <div className="mt-12">
                <Link href="#contact" className={`block w-full py-4 text-center rounded-full font-medium transition-colors ${plan.featured ? 'bg-brand-signal text-[#0A0A0A] hover:bg-brand-signal/90' : 'bg-white/5 text-brand-text hover:bg-white/10'}`}>
                  Prendre un temps d'échange
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const items = [
    { q: "Comment savoir si cet accompagnement est fait pour moi ?", a: "Si tu comprends déjà beaucoup de choses sur toi mais que tu n’arrives pas à transformer cette lucidité en mouvement stable, alors oui, cette approche peut être juste." },
    { q: "Est-ce un coaching motivationnel ?", a: "Non. Il ne s’agit pas de te pousser artificiellement. Il s’agit de retrouver un endroit intérieur depuis lequel l’action devient plus juste et plus tenable." },
    { q: "Combien de temps faut-il pour voir un changement ?", a: "Cela dépend du point de départ, mais un changement réel commence souvent quand tu cesses d’attendre l’état parfait pour agir." },
    { q: "Est-ce que cela remplace un suivi thérapeutique ?", a: "Non. Cet accompagnement ne remplace pas un suivi médical, psychologique ou psychiatrique quand celui-ci est nécessaire." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="questions" className="py-24 md:py-32 px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-6 text-center items-center">
          <span className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-brand-muted">Questions</span>
          <h2 className="font-display text-4xl md:text-[56px] leading-[1.02] font-medium tracking-tight text-brand-text">
            Ce que tu peux avoir besoin de savoir.
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {items.map((item, i) => {
             const isOpen = openIndex === i;
             return (
               <motion.div 
                 key={i}
                 className={`overflow-hidden border transition-colors duration-300 ${isOpen ? 'bg-brand-surface border-brand-signal/30 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] rounded-[28px]' : 'bg-white/5 border-white/10 hover:border-white/20 rounded-[24px]'}`}
               >
                 <button 
                   onClick={() => setOpenIndex(isOpen ? null : i)}
                   className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                 >
                   <span className="font-display text-xl md:text-2xl font-medium tracking-tight pr-8">{item.q}</span>
                   <div className={`p-2 rounded-full flex-shrink-0 transition-colors ${isOpen ? 'bg-brand-signal/20 text-brand-signal' : 'bg-white/5 text-brand-muted'}`}>
                     {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                   </div>
                 </button>
                 <AnimatePresence>
                   {isOpen && (
                     <motion.div 
                       initial={{ height: 0, opacity: 0 }}
                       animate={{ height: "auto", opacity: 1 }}
                       exit={{ height: 0, opacity: 0 }}
                       transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                     >
                       <div className="px-6 pb-6 md:px-8 md:pb-8 text-lg text-brand-muted">
                         {item.a}
                       </div>
                     </motion.div>
                   )}
                 </AnimatePresence>
               </motion.div>
             )
          })}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-4">
      <div className="max-w-5xl mx-auto bg-brand-surface/40 border border-white/10 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row gap-16 backdrop-blur-md">
        <div className="flex-1 flex flex-col gap-6 md:pr-10 justify-center">
          <span className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-brand-muted">Premier pas</span>
          <h2 className="font-display text-4xl md:text-[64px] leading-[1.05] font-medium tracking-tight text-brand-text">
            Tu peux continuer à réfléchir.<br/>Ou commencer à bouger.
          </h2>
          <p className="text-xl text-brand-muted leading-relaxed mt-4">
            Un premier échange simple. Sans pression. Juste un point de départ.
          </p>
        </div>

        <div className="w-full md:w-[400px]">
          {formState === 'success' ? (
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="h-full flex flex-col items-center justify-center text-center p-8 border border-brand-signal/20 rounded-[28px] bg-brand-signal/5"
             >
               <div className="w-16 h-16 rounded-full bg-brand-signal/20 flex items-center justify-center text-brand-signal mb-6">
                 ✓
               </div>
               <h3 className="font-display text-2xl mb-2">Demande envoyée</h3>
               <p className="text-brand-muted">Je reviens vers toi rapidement avec une proposition de créneau.</p>
             </motion.div>
          ) : (
             <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input 
                required 
                type="text" 
                placeholder="Ton prénom" 
                className="w-full bg-white/5 border border-white/10 rounded-[18px] px-6 py-4 text-brand-text placeholder-brand-muted/70 focus:outline-none focus:border-brand-signal focus:ring-1 focus:ring-brand-signal/30 transition-all font-body text-[15px]" 
              />
              <input 
                required 
                type="email" 
                placeholder="Ton email" 
                className="w-full bg-white/5 border border-white/10 rounded-[18px] px-6 py-4 text-brand-text placeholder-brand-muted/70 focus:outline-none focus:border-brand-signal focus:ring-1 focus:ring-brand-signal/30 transition-all font-body text-[15px]" 
              />
              <textarea 
                required 
                placeholder="Ce que tu traverses en ce moment" 
                className="w-full bg-white/5 border border-white/10 rounded-[18px] px-6 py-4 text-brand-text placeholder-brand-muted/70 focus:outline-none focus:border-brand-signal focus:ring-1 focus:ring-brand-signal/30 transition-all font-body text-[15px] min-h-[140px] resize-y" 
              />
              <button 
                type="submit" 
                disabled={formState === 'loading'}
                className="w-full sm:w-auto self-start mt-2 bg-brand-signal text-[#0A0A0A] font-medium px-8 py-4 rounded-full hover:bg-brand-signal/90 transition-all disabled:opacity-70 disabled:cursor-wait shrink-0 shadow-[0_0_20px_rgba(127,156,139,0.1)]"
              >
                {formState === 'loading' ? 'Envoi...' : 'Envoyer la demande'}
              </button>
             </form>
          )}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-semibold text-brand-text tracking-wide">
          AXE
        </div>
        <div className="font-mono text-[11px] font-medium tracking-[0.08em] text-brand-muted uppercase text-center">
          Coaching de transformation intérieure
        </div>
        <div className="font-mono text-[11px] font-medium tracking-[0.08em] text-brand-muted uppercase">
          contact@axe-coaching.fr
        </div>
      </div>
    </footer>
  );
}
