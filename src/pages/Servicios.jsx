import { motion } from "framer-motion";
import { ClipboardList, Thermometer, LayoutGrid, Sparkles, TestTubeDiagonal, Users, Building2 } from "lucide-react";
import { serviciosCards, serviciosPasos } from "../data/siteData";

export default function Servicios() {
  return (
    <div className="bg-white">
      <div className="relative min-h-[600px] lg:min-h-[640px] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img src="/mario fotos/FOTOS EMPAQUE/empaque (2).jpeg" alt="Túneles de secado Agro Nova Foods" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/70 to-stone-900/30" />
        </div>
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 pt-28 pb-28">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-xl">
            <span className="inline-block text-green-400 text-[10px] font-bold tracking-[0.25em] uppercase mb-5 bg-green-400/10 border border-green-400/20 px-3 py-1 rounded-full">Maquila Industrial · Agro Nova Foods S.A.S.</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.05] mb-5">
              Servicio de Secado<br />y Deshidratación<br /><span className="text-green-400 font-bold">para Empresas</span>
            </h1>
            <p className="text-white/70 text-base leading-relaxed mb-8 max-w-md">Maquila de secado para frutas, tubérculos, snacks, harinas e ingredientes de origen vegetal. Atendemos pruebas piloto, lotes por encargo y procesos recurrentes.</p>
            <div className="flex flex-wrap gap-3">
              <a href="https://wa.me/573014641164" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-xl font-semibold text-sm transition-all shadow-lg shadow-green-700/40">
                <ClipboardList className="w-4 h-4" /> Solicitar cotización
              </a>
              <a href="https://wa.me/573014641164" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/25 text-white rounded-xl font-semibold text-sm backdrop-blur-sm">
                Hablar por WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 -mt-12 bg-transparent px-4 sm:px-6 lg:px-8 pb-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Building2, label: "Infraestructura de secado" },
            { icon: Thermometer, label: "Seguimiento de temperatura y humedad" },
            { icon: LayoutGrid, label: "Procesos por lote" },
            { icon: Sparkles, label: "Buenas prácticas de limpieza" },
          ].map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border border-stone-200 rounded-2xl p-5 shadow-lg flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0"><f.icon className="w-5 h-5 text-green-600" /></div>
              <span className="text-stone-700 text-sm font-semibold leading-tight">{f.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <section className="py-20 max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviciosCards.map((c, i) => (
            <div key={i} className="bg-stone-50 border border-stone-200 rounded-2xl overflow-hidden">
              <img src={c.img} alt={c.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="font-display font-bold text-stone-900 mb-1">{c.title}</h3>
                <p className="text-stone-500 text-sm">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-display font-bold text-stone-900 mb-8 text-center">Cómo trabajamos</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {serviciosPasos.map((p) => (
              <div key={p.n} className="bg-white border border-stone-200 rounded-2xl p-6 text-center">
                <div className="w-10 h-10 rounded-full bg-[#008e38] text-white flex items-center justify-center mx-auto mb-3 font-bold">{p.n}</div>
                <h4 className="font-bold text-stone-900 text-sm mb-1">{p.title}</h4>
                <p className="text-stone-500 text-xs">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-stone-50 border border-stone-200 rounded-2xl p-8">
          <h3 className="font-display font-bold text-stone-900 mb-4">¿Qué productos atendemos?</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-stone-600 text-sm list-disc list-inside">
            <li>Frutas destinadas a snacks deshidratados.</li>
            <li>Yuca, plátano y otros tubérculos.</li>
            <li>Materias primas para la elaboración de harinas.</li>
            <li>Productos agrícolas que necesitan aumentar su vida útil.</li>
            <li>Ingredientes vegetales para procesos alimentarios.</li>
            <li>Hierbas, hojas, semillas y productos de origen vegetal.</li>
            <li>Nuevos productos en etapa de desarrollo o validación.</li>
          </ul>
          <a href="https://wa.me/573014641164" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#008e38] text-white rounded-xl font-semibold text-sm">Cotizar ahora</a>
        </div>
      </section>
    </div>
  );
}
