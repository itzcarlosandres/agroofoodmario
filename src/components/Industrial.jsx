import { motion } from "framer-motion";
import { Settings, Tag, Building2, ClipboardList } from "lucide-react";

export default function Industrial() {
  return (
    <section id="industrial" className="py-20 bg-[#0a1f12] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-900/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-800/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-green-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-4 block">Capacidad Industrial</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-[1.05] mb-6">
              ¿NECESITAS <br /><span className="text-green-400">UNA HARINA</span> <br /><span className="text-white italic">A TU MEDIDA?</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-6 max-w-md">Nuestra futura planta contará con capacidad de ajustar procesos para entregar exactamente lo que tu formulación requiere.</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5"><Settings className="w-3 h-3 text-green-400" /></div>
                <div><h4 className="text-white font-semibold text-sm">Ajuste de Granulometría</h4><p className="text-white/50 text-xs italic">Desde semolina hasta talco según necesidad.</p></div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5"><Tag className="w-3 h-3 text-green-400" /></div>
                <div><h4 className="text-white font-semibold text-sm">Maquila &amp; Marca Propia</h4><p className="text-white/50 text-xs italic">Producción y envasado con estándares altos.</p></div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur">
            <span className="text-green-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-6 block">Especificaciones técnicas</span>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                <Building2 className="w-5 h-5 text-green-400" />
                <div><p className="text-white text-sm font-semibold">Infraestructura de secado</p><p className="text-white/50 text-xs">Túneles controlados</p></div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                <ClipboardList className="w-5 h-5 text-green-400" />
                <div><p className="text-white text-sm font-semibold">Trazabilidad por lote</p><p className="text-white/50 text-xs">Control estricto</p></div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                <Settings className="w-5 h-5 text-green-400" />
                <div><p className="text-white text-sm font-semibold">Desarrollo de granulometrías específicas</p><p className="text-white/50 text-xs">A la medida</p></div>
              </div>
            </div>
            <a href="https://wa.me/573014641164" target="_blank" rel="noopener noreferrer" className="mt-6 flex items-center justify-center gap-2 w-full py-3 bg-[#008e38] hover:bg-[#007a30] text-white rounded-xl font-semibold text-sm transition-colors">Solicitar cotización</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
