'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

export function Presence() {
  return (
    <section className="py-24 md:py-40 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        {/* Abstract Portrait Placeholder using Next Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9 }}
          className="w-full md:w-[470px] h-[500px] md:h-[620px] rounded-[40px] overflow-hidden relative border border-white/10"
        >
          <Image 
            src="https://picsum.photos/seed/axe/800/1000" 
            alt="Présence AXE" 
            fill 
            className="object-cover opacity-80 mix-blend-luminosity grayscale contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex-1 flex flex-col items-start gap-8"
        >
          <span className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-brand-muted">
            Présence
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[56px] leading-[1.02] font-medium tracking-tight text-brand-text">
            Je ne suis pas là pour te motiver.
          </h2>
          <div className="flex flex-col gap-6 text-lg md:text-xl text-brand-muted">
            <p>
              Je suis là pour t’aider à revenir à un endroit plus stable. Un endroit où tu peux voir clair. Et surtout agir sans te trahir.
            </p>
            <p>
              Le travail n’est pas spectaculaire. Il est précis. Et il change profondément la manière dont tu avances.
            </p>
          </div>
          <Link href="#methode" className="mt-4 bg-white/5 border border-white/10 text-brand-text h-14 px-8 rounded-full font-medium text-[15px] flex items-center justify-center hover:-translate-y-0.5 hover:border-white/20 transition-all">
            Voir la méthode
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export function Method() {
  const steps = [
    { index: "01", title: "Revenir", body: "Ralentir. Sortir du bruit. Revenir à ce qui est réellement là." },
    { index: "02", title: "Voir clair", body: "Nommer les schémas. Comprendre ce qui bloque. Arrêter de se raconter des histoires.", featured: true },
    { index: "03", title: "Agir juste", body: "Faire des choix simples. Poser des actes tenables. Recréer de la confiance en avançant." }
  ];

  return (
    <section id="methode" className="py-24 md:py-40 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-brand-muted">Le chemin</span>
            <h2 className="font-display text-4xl md:text-[56px] leading-[1.02] font-medium tracking-tight text-brand-text">
              Revenir. Voir clair.<br/>Agir juste.
            </h2>
          </div>
          <p className="text-lg text-brand-muted max-w-[360px]">
            Une structure simple. Pas pour t’enfermer. Pour te redonner un axe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.75, delay: i * 0.12 }}
              className={`p-10 rounded-[28px] h-[360px] md:h-[420px] flex flex-col justify-between ${
                step.featured 
                ? 'bg-brand-signal/10 border border-brand-signal/30' 
                : 'bg-white/5 border border-white/10'
              }`}
            >
              <span className={`font-mono text-xl ${step.featured ? 'text-brand-signal' : 'text-brand-muted'}`}>
                {step.index}
              </span>
              <div className="flex flex-col gap-4">
                <h3 className="font-display text-3xl font-medium">{step.title}</h3>
                <p className="text-brand-muted/90 text-lg leading-relaxed">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StickyStory() {
  const chapters = [
    { id: "c1", title: "Se déposer", body: "Sortir de la turbulence. Arrêter de produire du bruit sur du bruit." },
    { id: "c2", title: "Nommer", body: "Voir le mécanisme au lieu d’être entièrement dedans." },
    { id: "c3", title: "Ressentir juste", body: "Revenir à un rapport moins confus à soi, au corps, au choix." },
    { id: "c4", title: "Décider", body: "Faire un pas qui ne contredit plus ce que tu sais déjà." },
    { id: "c5", title: "Tenir", body: "Créer une continuité entre compréhension, choix et action." }
  ];

  return (
    <section className="py-24 md:py-0 px-4 md:px-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row relative">
        <div className="w-full md:w-1/2 md:sticky top-0 h-auto md:h-screen flex flex-col justify-center py-20 px-0 md:px-8">
           <span className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-brand-muted mb-8">Traversée</span>
           {/* In a real high-end scroll component, these would fade strictly based on active index.
               For this robust static implementation, we'll stack them gracefully on small screens and use viewports on larger ones if we add tracking,
               but standard linear stacking is fully robust and matches the 'slider-like vertical sequence' fallback. */}
           <h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight text-brand-text mb-6">
             Avancer par étapes.
           </h2>
           <p className="text-lg md:text-xl text-brand-muted max-w-md">
            Chaque rencontre est une brique pour construire un ancrage intérieur solide.
           </p>
        </div>
        <div className="w-full md:w-1/2 py-20 md:py-64 flex flex-col gap-32">
          {chapters.map((chapter, i) => (
             <motion.div 
               key={chapter.id}
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: false, margin: "-40% 0px -40% 0px" }}
               transition={{ duration: 0.6 }}
               className="flex flex-col gap-6"
             >
               <div className="w-16 h-16 rounded-full border border-white/20 bg-brand-surface flex items-center justify-center font-mono text-brand-signal">
                 0{i + 1}
               </div>
               <h3 className="font-display text-3xl md:text-[44px] font-medium">{chapter.title}</h3>
               <p className="text-xl md:text-2xl text-brand-muted leading-relaxed">{chapter.body}</p>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Transformation() {
  return (
    <section className="py-24 md:py-48 px-4 flex items-center justify-center bg-gradient-to-b from-transparent to-brand-surface/30">
      <div className="max-w-3xl text-center flex flex-col items-center gap-6">
        <span className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-brand-muted mb-4">Ce qui change</span>
        <h2 className="font-display text-4xl md:text-[56px] leading-[1.04] font-medium tracking-tight text-brand-text">
          Tu n’es plus en lutte permanente avec toi-même.
        </h2>
        <p className="text-lg md:text-xl text-brand-muted leading-[1.8] mt-4">
          Tu prends des décisions plus simples. Tu arrêtes d’attendre la perfection avant d’agir. Tu avances même quand ce n’est pas confortable.
        </p>
        <p className="text-lg md:text-xl text-brand-signal font-medium leading-[1.8] mt-2">
          Plus stable. Plus aligné. Plus vivant dans ce que tu fais.
        </p>
      </div>
    </section>
  );
}

export function NotThis() {
  const points = [
    "Pas du contenu inspirant que tu oublieras demain.",
    "Pas une méthode miracle.",
    "Pas quelqu’un qui te pousse ou te juge.",
    "Pas un rôle à jouer."
  ];

  return (
    <section className="py-24 px-4 pb-40">
      <div className="max-w-5xl mx-auto rounded-[32px] bg-white/5 border border-white/10 p-8 md:p-16">
        <span className="font-mono text-xs font-medium tracking-[0.08em] uppercase text-brand-muted block mb-10">Ce que ce n’est pas</span>
        <div className="flex flex-col gap-6">
          {points.map((point, i) => (
             <p key={i} className="text-xl md:text-2xl text-brand-text max-w-2xl">{point}</p>
          ))}
          <p className="text-xl md:text-2xl text-brand-signal mt-6 pt-6 border-t border-white/10 max-w-2xl">
            C’est un espace de travail. Sobre. Lucide. Honnête.
          </p>
        </div>
      </div>
    </section>
  );
}
