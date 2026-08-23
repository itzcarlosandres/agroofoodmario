import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Leaf, MapPin, Users, Award } from "lucide-react";
import { heroSlides } from "../data/siteData";

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((p) => (p + 1) % heroSlides.length);
  const prev = () => setIdx((p) => (p - 1 + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    const id = setInterval(() => setIdx((p) => (p + 1) % heroSlides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div id="inicio" className="relative w-full">
      <section className="relative h-[72vh] md:h-[78vh] min-h-[540px] max-h-[720px] w-full overflow-hidden bg-black">
        <div className="absolute inset-0">
          {heroSlides.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: idx === i ? 1 : 0 }} transition={{ duration: 1.2 }} className="absolute inset-0">
              <img src={s.image} alt={s.title} className="w-full h-full object-cover" loading="eager" decoding="sync" fetchPriority="high" style={{ imageRendering: "-webkit-optimize-contrast" }} />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        </div>

        <button onClick={prev} className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 items-center justify-center text-white transition-all">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={next} className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 items-center justify-center text-white transition-all">
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="hidden md:flex absolute top-20 left-1/2 -translate-x-1/2 z-10">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex items-center gap-2 px-5 py-2 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-400/30">
            <Leaf className="w-3.5 h-3.5 text-green-400" />
            <span className="text-green-300 text-[10px] font-bold tracking-[0.15em] uppercase">Planta de Transformación Agro Nova Foods</span>
          </motion.div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }} className="text-white font-display leading-tight drop-shadow-2xl md:mt-8">
            <span className="block text-3xl font-medium md:text-6xl md:font-bold">{heroSlides[idx].title} <span className="text-green-400 font-bold md:font-bold">{heroSlides[idx].highlight}</span></span>
            <span className="block text-xl font-light md:text-3xl md:font-normal text-white/85 mt-2 md:mt-3">{heroSlides[idx].subtitle}</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex gap-2.5 mt-6 md:mt-8 md:gap-3">
            <a href="https://wa.me/573014641164" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 md:px-8 md:py-3.5 bg-[#008e38] hover:bg-[#007a30] text-white rounded-xl md:rounded-lg font-medium md:font-semibold text-xs md:text-sm transition-all shadow-lg">Cotizar por WhatsApp</a>
            <button onClick={() => document.getElementById("productos")?.scrollIntoView({ behavior: "smooth" })} className="px-5 py-2.5 md:px-8 md:py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl md:rounded-lg font-medium md:font-semibold text-xs md:text-sm backdrop-blur-sm">Ver productos</button>
          </motion.div>

        </div>
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-white" : "w-3 bg-white/40"}`} aria-label={`Ir a slide ${i + 1}`} />
          ))}
        </div>
      </section>

      {/* Stats flotante - más visual */}
      <div className="relative z-20 -mt-14 px-4">
        <div className="max-w-[1100px] mx-auto bg-white rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.14)] border border-stone-200/50 p-5 md:p-7 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-stone-200">
          {[
            { icon: MapPin, value: "6,000+", label: "Hectáreas en Bolívar" },
            { icon: Users, value: "300+", label: "Campesinos aliados" },
            { icon: Award, value: "1+", label: "Federación Baluarte Bolívar" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-5 py-3 md:py-1 md:px-8">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#f0f7ed] border border-[#d9e8d0] flex items-center justify-center shrink-0 shadow-sm">
                <s.icon className="w-6 h-6 md:w-7 md:h-7 text-[#008e38]" strokeWidth={1.8} />
              </div>
              <div>
                <p className="font-display font-extrabold text-[#008e38] text-2xl md:text-3xl leading-none tracking-tight">{s.value}</p>
                <p className="text-stone-700 text-sm md:text-[15px] font-semibold mt-1.5">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
