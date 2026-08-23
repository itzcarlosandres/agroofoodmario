import { motion } from "framer-motion";

export default function Allies() {
  return (
    <section className="bg-white border-t border-stone-100 py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1100px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-10">
          <span className="text-green-600 text-[10px] font-bold tracking-[0.2em] uppercase block mb-2">Red de colaboración</span>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-stone-900">Nuestros Aliados</h2>
          <div className="w-10 h-[2px] bg-green-500 rounded-full mx-auto mt-3" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="flex items-center justify-center">
          <div className="w-full max-w-3xl bg-stone-50 rounded-2xl border border-stone-100 px-8 py-8 flex items-center justify-center">
            <img src="/aliados/Aso.png" alt="Aliados: Teoclix, Asociación Campesina de Mujeres y Lideresas de Villanueva - Bolívar, Confederación Baluartes Campesinos de Colombia" className="w-full h-auto object-contain max-h-28 filter grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
        </motion.div>
        <p className="text-center text-stone-400 text-xs mt-6">Trabajamos junto a organizaciones locales, logísticas y campesinas para fortalecer la cadena productiva.</p>
      </div>
    </section>
  );
}
