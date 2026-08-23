import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";
import { porteriaGallery, secadoGallery } from "../data/siteData";

function Gallery({ title, subtitle, items }) {
  const [active, setActive] = useState(null);
  return (
    <section className="py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-green-600 text-[10px] font-bold tracking-[0.2em] uppercase">{subtitle}</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 mt-2">{title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <motion.div key={it.image} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-lg transition-all cursor-pointer" onClick={() => setActive(it)}>
              <div className="relative h-64 overflow-hidden">
                <img src={it.image} alt={it.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text-[11px] font-bold tracking-widest">{it.number}</div>
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white"><Maximize2 className="w-4 h-4" /></div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-stone-900 text-sm mb-1">{it.title}</h3>
                <p className="text-stone-500 text-xs leading-relaxed mb-3">{it.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {it.tags.map((t) => (
                    <span key={t} className="px-2 py-1 bg-stone-50 border border-stone-200 text-stone-600 text-[10px] font-semibold rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setActive(null)}>
            <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }} className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden max-h-[85vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
              <div className="relative h-80 shrink-0">
                <img src={active.image} alt={active.title} className="w-full h-full object-cover" />
                <button onClick={() => setActive(null)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center"><X className="w-4 h-4" /></button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <span className="text-green-300 text-xs font-bold tracking-widest">{active.number}</span>
                  <h3 className="text-white font-display font-bold text-xl">{active.title}</h3>
                </div>
              </div>
              <div className="p-6 overflow-y-auto">
                <p className="text-stone-600 text-sm leading-relaxed mb-4">{active.description}</p>
                <div className="flex flex-wrap gap-2">
                  {active.tags.map((t) => (
                    <span key={t} className="px-3 py-1 bg-green-50 border border-green-100 text-green-700 text-xs font-semibold rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default function Nosotros() {
  return (
    <div className="bg-stone-50">
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-stone-900">
        <img src="/mario fotos/ZONA PORTERIA/aqui comienza el proceso.jpeg" alt="Portería" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
        <div className="relative z-10 text-center px-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-green-300 text-[10px] font-bold tracking-widest uppercase mb-4">Nuestra planta en Bolívar</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white">Conoce nuestra <span className="text-green-400">planta</span></h1>
          <p className="text-white/70 text-sm md:text-base max-w-xl mx-auto mt-4">Un recorrido visual por nuestras instalaciones: portería, zona de picado y túneles de secado.</p>
        </div>
      </section>

      <Gallery title="Zona Portería" subtitle="Acceso y organización" items={porteriaGallery} />
      <Gallery title="Zona de Secado" subtitle="Túneles de deshidratación" items={secadoGallery} />

      <section className="py-16 bg-white border-t border-stone-100">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <h2 className="text-2xl font-display font-bold text-stone-900 mb-4">Compromiso con la calidad</h2>
          <p className="text-stone-500 text-sm md:text-base leading-relaxed">Cada lote es monitoreado con buenas prácticas de manufactura, trazabilidad y control de humedad para garantizar harinas consistentes y seguras para el mercado nacional e internacional.</p>
          <a href="https://wa.me/573014641164" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex px-8 py-3 bg-[#008e38] text-white rounded-xl font-semibold text-sm">Agendar visita</a>
        </div>
      </section>
    </div>
  );
}
