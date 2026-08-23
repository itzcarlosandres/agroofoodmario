import { motion } from "framer-motion";
import { Factory, HandHeart, Leaf } from "lucide-react";

export default function About() {
  return (
    <section id="sobre-nosotros" className="py-20 bg-stone-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-green-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">Planta de Transformación</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 leading-[1.15]">
            Nuestra planta <span className="text-green-600">Agro Nova Foods</span> en Bolívar <br className="hidden sm:inline" />ya está en <span className="text-green-600">funcionamiento</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative rounded-3xl overflow-hidden h-[500px] lg:h-[600px] shadow-xl">
            <video src="/portada/video.mp4" className="w-full h-full object-cover" autoPlay loop muted playsInline poster="/portada/portada.jpg" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            <div className="absolute top-6 left-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-400/30">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-300 text-[10px] font-bold tracking-widest uppercase">Planta en funcionamiento</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="space-y-6 text-stone-700 text-base leading-relaxed">
            <div className="flex flex-wrap gap-3 pb-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-white border border-stone-200 rounded-full shadow-sm">
                <Factory className="w-4 h-4 text-green-600" />
                <span className="text-stone-700 text-xs font-semibold uppercase tracking-wider">Foco industrial</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-white border border-stone-200 rounded-full shadow-sm">
                <HandHeart className="w-4 h-4 text-green-600" />
                <span className="text-stone-700 text-xs font-semibold uppercase tracking-wider">Compromiso social</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-white border border-stone-200 rounded-full shadow-sm">
                <Leaf className="w-4 h-4 text-green-600" />
                <span className="text-stone-700 text-xs font-semibold uppercase tracking-wider">Sostenible</span>
              </div>
            </div>
            <p><strong>AGRO NOVA FOODS S.A.S.</strong> es una empresa agroindustrial colombiana con sede en el departamento de Bolívar, dedicada a la transformación de yuca dulce y plátano verde en harinas de alta calidad.</p>
            <p>Nacimos con la visión de conectar el campo Caribe con mercados nacionales e internacionales, generando valor agregado y desarrollo económico sostenible en comunidades rurales.</p>
            <p>Nuestra planta cuenta con túneles de secado, zonas de picado, selección y empaque, operando bajo buenas prácticas de manufactura y estándares de inocuidad.</p>
            <div className="flex gap-3 pt-4">
              <a href="https://wa.me/573014641164" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#008e38] text-white rounded-xl font-semibold text-sm">Hablar con un asesor</a>
              <a href="/sobre-nosotros" className="px-6 py-3 bg-white border border-stone-200 text-stone-700 rounded-xl font-semibold text-sm">Conocer más</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
