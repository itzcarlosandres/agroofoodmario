import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section id="mision-vision" className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-green-600" />
            <span className="text-green-600 text-[10px] font-bold tracking-[0.2em] uppercase">Comprometidos con la</span>
            <div className="w-12 h-0.5 bg-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900">Comprometidos con la <span className="text-green-600">Excelencia Agrícola</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-stone-50 border border-stone-200 rounded-2xl p-6 md:p-8 text-center">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4"><Target className="w-6 h-6 text-green-700" /></div>
            <h3 className="text-[11px] font-bold tracking-widest uppercase text-green-700 mb-3">Nuestra Misión</h3>
            <p className="text-stone-700 text-sm md:text-base leading-relaxed italic">"Transformamos yuca dulce y plátano verde del Caribe en harinas de alta calidad, garantizando inocuidad y precios justos para nuestros productores aliados."</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="bg-stone-50 border border-stone-200 rounded-2xl p-6 md:p-8 text-center">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4"><Eye className="w-6 h-6 text-green-700" /></div>
            <h3 className="text-[11px] font-bold tracking-widest uppercase text-green-700 mb-3">Visión 2030</h3>
            <p className="text-stone-700 text-sm md:text-base leading-relaxed italic">"Ser el referente nacional en producción de harinas nativas, reconocido por calidad consistente y un impacto positivo en las comunidades rurales."</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
