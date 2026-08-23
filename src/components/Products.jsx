import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, X } from "lucide-react";
import { products } from "../data/products";

export default function Products() {
  const [selected, setSelected] = useState(null);
  return (
    <section id="productos" className="py-24 bg-stone-100/50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200/50 mb-4">
            <Leaf className="w-3.5 h-3.5 text-green-600 animate-pulse" />
            <span className="text-green-700 text-[10px] font-bold tracking-[0.2em] uppercase">Ingeniería de Alimentos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 tracking-tight leading-none mb-4">
            Ingeniería y Transformación <br className="hidden sm:inline" />de <span className="text-green-600">Harinas Nativas</span>
          </h2>
          <p className="text-stone-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">Procesamiento agroindustrial de alta precisión para ofrecer harinas consistentes, naturales y con fichas técnicas rigurosas para el sector alimentario.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.15 }} className="group bg-white rounded-[32px] overflow-hidden border border-stone-200/80 shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col h-full">
              <div className="relative h-[320px] sm:h-[360px] overflow-hidden bg-stone-50 shrink-0">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                  {p.certifications.map((c, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/95 backdrop-blur-sm border border-stone-100 text-stone-800 text-[10px] font-bold tracking-wider uppercase rounded-full shadow-sm">{c}</span>
                  ))}
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="text-green-400 text-xs font-bold tracking-widest uppercase mb-1 block">{p.weight} · Empaque Premium</span>
                  <h3 className="text-white font-display font-bold text-3xl">{p.name}</h3>
                  <span className="text-white/60 text-xs tracking-widest uppercase">{p.english}</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <p className="text-stone-600 text-sm leading-relaxed mb-6">{p.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {p.specs.map((s, idx) => (
                    <div key={idx} className="bg-stone-50 border border-stone-100 rounded-xl p-3">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-stone-400 block">{s.label}</span>
                      <span className="text-stone-900 font-bold text-sm">{s.value}</span>
                      <span className="text-stone-500 text-[11px] block">{s.detail}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.presentations.map((pr, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-green-50 border border-green-100 text-green-700 text-xs font-semibold rounded-full">{pr.size} · {pr.type}</span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  <button onClick={() => setSelected(p)} className="flex-1 py-3 bg-[#008e38] hover:bg-[#007a30] text-white rounded-xl font-semibold text-sm transition-colors">Ver ficha técnica</button>
                  <a href={`https://wa.me/573014641164?text=${encodeURIComponent(p.whatsappText)}`} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 bg-white border border-stone-200 hover:bg-stone-50 text-stone-700 rounded-xl font-semibold text-sm text-center transition-colors">Cotizar</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelected(null)}>
            <motion.div initial={{ scale: 0.92, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.92, y: 20 }} className="bg-white rounded-2xl max-w-lg w-full p-6 max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-display font-bold">{selected.name}</h3>
                <button onClick={() => setSelected(null)} className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center"><X className="w-4 h-4" /></button>
              </div>
              <img src={selected.image} alt={selected.name} className="w-full h-48 object-cover rounded-xl mb-4" />
              <p className="text-stone-600 text-sm mb-4">{selected.description}</p>
              <a href={`https://wa.me/573014641164?text=${encodeURIComponent(selected.whatsappText)}`} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 bg-[#25D366] text-white rounded-xl font-semibold">Cotizar por WhatsApp</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
