import { motion } from "framer-motion";

export default function SobreNosotros() {
  return (
    <div className="bg-stone-50">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[#070f0a]">
        <motion.div
          animate={{ background: ["radial-gradient(ellipse at 20% 50%, #0d2818 0%, #070f0a 50%)","radial-gradient(ellipse at 80% 20%, #0d2818 0%, #070f0a 50%)","radial-gradient(ellipse at 50% 80%, #0d2818 0%, #070f0a 50%)"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(7,15,10,0.8)_100%)]" />
        <div className="relative z-10 text-center px-6">
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3, duration: 1 }} className="h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent max-w-[100px] mx-auto mb-5" />
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400/80 tracking-[0.2em] uppercase text-[10px] font-semibold">Agro Nova Foods</span>
          </motion.div>
          <div className="overflow-hidden mb-1">
            <motion.h1 initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Sobre <span className="text-green-400">Nosotros</span>
            </motion.h1>
          </div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="text-white/60 text-sm md:text-base max-w-xl mx-auto mt-4">Del Caribe colombiano al mundo. Una empresa agroindustrial que transforma yuca y plátano en harinas de clase mundial.</motion.p>
        </div>
      </section>

      {/* Historia / Valores */}
      <section className="py-20 max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-green-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">Nuestra historia</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 mb-6">Transformar la producción agrícola del <span className="text-green-600">Caribe</span></h2>
            <p className="text-stone-600 leading-relaxed mb-4">AGRO NOVA FOODS S.A.S. nació en Bolívar con el propósito de transformar la producción agrícola del Caribe colombiano en productos de valor agregado que conecten a los productores locales con mercados globales, generando desarrollo económico sostenible en las comunidades rurales de Bolívar.</p>
            <p className="text-stone-600 leading-relaxed">Ser la empresa agroindustrial líder del Caribe colombiano en exportación de productos transformados, reconocida mundialmente por su calidad, trazabilidad y compromiso con el desarrollo sostenible.</p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white border border-stone-200 rounded-2xl p-5">
                <h4 className="font-bold text-stone-900 text-sm mb-1">Sostenibilidad</h4>
                <p className="text-stone-500 text-xs">Respeto al medio ambiente</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-2xl p-5">
                <h4 className="font-bold text-stone-900 text-sm mb-1">Calidad e inocuidad</h4>
                <p className="text-stone-500 text-xs">En cada proceso</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-2xl p-5">
                <h4 className="font-bold text-stone-900 text-sm mb-1">Alianza campesina</h4>
                <p className="text-stone-500 text-xs">Con el campesino colombiano</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-2xl p-5">
                <h4 className="font-bold text-stone-900 text-sm mb-1">Transparencia</h4>
                <p className="text-stone-500 text-xs">Responsabilidad social</p>
              </div>
            </div>
          </div>
          <div className="relative h-[520px] rounded-3xl overflow-hidden shadow-xl">
            <img src="/mario fotos/ZONA PORTERIA/nuestra planta - nuestro futuro.jpeg" alt="Planta" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-2xl p-5">
              <p className="text-stone-700 text-sm font-medium">Instalaciones diseñadas específicamente para asegurar la inocuidad del producto. Proceso minuciosamente controlado que asegura una harina del más alto nivel.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
