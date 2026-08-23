import { motion } from "framer-motion";
import { ClipboardCheck, Scissors, Droplets, Flame, Wheat, Boxes, Package, Truck } from "lucide-react";

const steps = [
  { icon: ClipboardCheck, title: "Selección y recepción", desc: "Evaluación rigurosa de la materia prima desde el origen." },
  { icon: Scissors, title: "Lavado / preparación", desc: "Limpieza profunda y adecuación para procesamiento." },
  { icon: Droplets, title: "Corte / troceado", desc: "Uniformidad precisa para optimizar el secado." },
  { icon: Flame, title: "Deshidratación", desc: "Control de humedad para conservar nutrientes." },
  { icon: Wheat, title: "Molienda", desc: "Transformación mecánica fina en unidades de alta eficiencia." },
  { icon: Boxes, title: "Tamizado", desc: "Clasificación por granulometría y homogeneidad." },
  { icon: Package, title: "Empaque", desc: "Sellado automático en presentaciones de 1kg y 25kg." },
  { icon: Truck, title: "Trazabilidad", desc: "Control estricto de lote a nivel exigente." },
];

export default function Process() {
  return (
    <section id="proceso" className="py-20 bg-white border-y border-stone-200/30">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-stone-300" />
            <span className="text-stone-400 text-[10px] font-bold tracking-[0.2em] uppercase">Tecnología y precisión</span>
            <div className="w-12 h-0.5 bg-stone-300" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 mb-3">NUESTRO PROCESO</h2>
          <p className="text-stone-500 text-base max-w-xl mx-auto">Tecnología y precisión en cada etapa para garantizar la excelencia que nos define.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="relative bg-stone-50/80 border border-stone-200/80 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-lg hover:border-green-500/30 transition-all duration-300 group overflow-hidden">
                <div className="absolute top-4 right-4 font-display font-bold text-lg text-stone-200 group-hover:text-green-500/20 transition-colors select-none">{String(i + 1).padStart(2, "0")}</div>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-green-50 border border-green-100/50 flex items-center justify-center shrink-0 group-hover:bg-green-600 group-hover:border-green-600 transition-all duration-300">
                    <Icon className="w-5 h-5 text-green-600 group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                  <div className="pr-6">
                    <h3 className="font-display font-bold text-stone-900 text-sm leading-tight mt-1 group-hover:text-green-900">{s.title}</h3>
                  </div>
                </div>
                <p className="text-stone-500 text-xs leading-relaxed group-hover:text-stone-600">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
