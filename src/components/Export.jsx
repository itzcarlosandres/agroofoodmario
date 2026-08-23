import { motion } from "framer-motion";

export default function Export() {
  return (
    <section id="exportacion" className="py-20 bg-stone-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-green-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">Global Bizz Division</span>
            <p className="text-stone-400 text-sm font-bold tracking-widest uppercase mb-2"><strong className="text-stone-900">AGRO NOVA FOODS</strong></p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 leading-[1.1] mb-6">DIVISIÓN DE <br />EXPORTACIÓN: <br /><span className="text-green-600">BOLIVAR PARA EL MUNDO</span></h2>
            <p className="text-stone-500 text-base leading-relaxed mb-4 max-w-md">Llevamos los sabores y la calidad de Bolívar a mercados internacionales, conectando el Caribe colombiano con el mundo.</p>
            <p className="text-stone-500 text-base leading-relaxed mb-8 max-w-md">A través de nuestra robusta logística y la alianza inquebrantable con la Federación Baluarte y sus asociados, AGRO NOVA FOODS abre las puertas de otros territorios a la riqueza de nuestra tierra. Llevamos frescura y calidad industrial a nivel global.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 border-t border-stone-200/60 pt-6">
              <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm">
                <h4 className="font-display font-bold text-stone-900 text-xs tracking-[0.15em] uppercase mb-4 flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-green-500 shrink-0" />Productos Transformados</h4>
                <ul className="space-y-3">
                  {["Harina de Yuca Dulce","Harina de Plátano Verde","Harinas a Medida (B2B)"].map((t) => (
                    <li key={t} className="flex items-center gap-2.5 text-stone-500 text-xs tracking-wide uppercase font-medium">
                      <span className="w-5 h-5 rounded-full border border-green-400 flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm">
                <h4 className="font-display font-bold text-stone-900 text-xs tracking-[0.15em] uppercase mb-4 flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-green-500 shrink-0" />Productos Frescos</h4>
                <ul className="space-y-2 text-stone-500 text-xs">
                  <li>• Yuca fresca seleccionada</li>
                  <li>• Plátano verde</li>
                  <li>• Frutas tropicales</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
            <img src="/mario fotos/fotos sin nada/porteria 1.jpeg" alt="Exportación" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md border border-white/50 rounded-2xl p-5">
              <p className="text-stone-700 text-sm font-medium">Alianza con Federación Baluarte y asociados campesinos para llevar calidad del Caribe al mundo.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
