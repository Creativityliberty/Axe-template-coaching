import { Navbar, Hero, Mirror, BreakSection } from '../components/Sections1';
import { Presence, Method, StickyStory, Transformation, NotThis } from '../components/Sections2';
import { Offer, FAQ, Contact, Footer } from '../components/Sections3';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "AXE Coaching",
    "url": process.env.APP_URL || "https://axe-coaching.fr",
    "description": "Coaching de transformation intérieure pour passer de la compréhension à l’action réelle.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Paris",
      "addressCountry": "FR"
    },
    "priceRange": "$$",
    "slogan": "Agir sans se trahir."
  };

  return (
    <main className="flex flex-col relative w-full overflow-hidden bg-[#0A0A0A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <Mirror />
      <BreakSection />
      <Presence />
      <Method />
      <StickyStory />
      <Transformation />
      <NotThis />
      <Offer />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
