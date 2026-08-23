import { motion } from "framer-motion";

export default function DemoVideo() {
  return (
    <div className="bg-stone-50 min-h-screen -mt-20 relative z-40">
      <section className="relative h-[75vh] min-h-[550px] w-full overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 overflow-hidden bg-stone-900">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-800 via-stone-900 to-black" />
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full" style={{ objectFit: "cover", pointerEvents: "none" }}>
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0 0 250px 150px rgba(0, 0, 0, 1)" }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
        <div className="relative z-20 h-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl text-white">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-400/40 bg-green-500/10 backdrop-blur-sm mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-300 tracking-[0.2em] uppercase text-[10px] font-semibold">Demo · Video Hero</span>
              </span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }} className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] mb-6 tracking-tight drop-shadow-2xl">
              Nuestra planta <span className="text-green-400">Agro Nova Foods</span> en Bolívar
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }} className="text-white/80 text-base sm:text-lg mb-10 leading-relaxed max-w-xl drop-shadow-lg">
              Demo de cómo se vería el Hero con un video vertical de fondo. El video cubre toda el área, el menú se vuelve transparente.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }} className="flex gap-3">
              <a href="https://wa.me/573014641164" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#008e38] hover:bg-[#007a30] text-white rounded-lg font-semibold text-sm transition-all shadow-lg">Cotizar ahora</a>
              <a href="/" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg font-semibold text-sm backdrop-blur-sm">Volver al inicio</a>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-20 max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="text-2xl font-display font-bold text-stone-900 mb-4">Video Hero Demo</h2>
        <p className="text-stone-500">Esta página es solo demostrativa del efecto video fullscreen.</p>
      </section>
    </div>
  );
}
