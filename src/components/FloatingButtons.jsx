import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const INSTAGRAM = "https://www.instagram.com/agronovafoods_";
const FACEBOOK = "https://www.facebook.com/profile.php?id=61590954803548";

const waNumbers = [
  { label: "Venta 1", number: "573245172591", display: "+57 324 517 2591" },
  { label: "Ventas 2", number: "573014641164", display: "+57 301 464 1164" },
  { label: "Atención al cliente", number: "573185234989", display: "+57 318 523 4989" },
];

export default function FloatingButtons() {
  const [hoverIG, setHoverIG] = useState(false);
  const [hoverWA, setHoverWA] = useState(false);
  const [hoverFB, setHoverFB] = useState(false);
  const [waMenuOpen, setWaMenuOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* Facebook */}
      <motion.a
        href={FACEBOOK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Síguenos en Facebook"
        initial={{ scale: 0, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: [0, -5, 0] }}
        transition={{
          scale: { delay: 1.0, type: "spring", stiffness: 260, damping: 18 },
          y: { delay: 1.2, duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
        whileHover={{ scale: 1.08, y: 0 }}
        whileTap={{ scale: 0.92 }}
        onHoverStart={() => setHoverFB(true)}
        onHoverEnd={() => setHoverFB(false)}
        className="relative w-14 h-14 md:w-[58px] md:h-[58px] rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(24,119,242,0.35)] border border-white/20 bg-[#1877F2]"
      >
        <svg className="w-6 h-6 text-white drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
        <AnimatePresence>
          {hoverFB && (
            <motion.span initial={{ opacity: 0, x: 10, scale: 0.9 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: 10, scale: 0.9 }} transition={{ duration: 0.2 }} className="absolute right-full mr-3 px-3 py-1.5 bg-stone-900 text-white text-xs font-semibold rounded-full whitespace-nowrap shadow-lg pointer-events-none">Facebook</motion.span>
          )}
        </AnimatePresence>
      </motion.a>

      {/* Instagram */}
      <motion.a
        href={INSTAGRAM}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Síguenos en Instagram"
        initial={{ scale: 0, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: [0, -6, 0] }}
        transition={{
          scale: { delay: 1.2, type: "spring", stiffness: 260, damping: 18 },
          y: { delay: 1.4, duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
        whileHover={{ scale: 1.08, y: 0, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.92 }}
        onHoverStart={() => setHoverIG(true)}
        onHoverEnd={() => setHoverIG(false)}
        className="relative w-14 h-14 md:w-[58px] md:h-[58px] rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(225,48,108,0.35)] border border-white/20 overflow-hidden group"
        style={{ background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" }}
      >
        <svg className="w-7 h-7 text-white relative z-10 drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]" fill="none" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="6" ry="6" stroke="white" fill="none" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="white" fill="none" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
        <AnimatePresence>
          {hoverIG && (
            <motion.span initial={{ opacity: 0, x: 10, scale: 0.9 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: 10, scale: 0.9 }} transition={{ duration: 0.2 }} className="absolute right-full mr-3 px-3 py-1.5 bg-stone-900 text-white text-xs font-semibold rounded-full whitespace-nowrap shadow-lg pointer-events-none">Instagram</motion.span>
          )}
        </AnimatePresence>
      </motion.a>

      {/* WhatsApp con 3 números desplegables */}
      <div className="relative" onMouseEnter={() => setHoverWA(true)} onMouseLeave={() => { setHoverWA(false); }}>
        <AnimatePresence>
          {waMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full right-0 mb-3 w-64 bg-white rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.18)] border border-stone-200 overflow-hidden"
            >
              <div className="px-4 py-2.5 bg-stone-50 border-b border-stone-100 flex items-center justify-between">
                <p className="text-[11px] font-bold tracking-widest uppercase text-stone-500">Elige un asesor</p>
                <button onClick={() => setWaMenuOpen(false)} className="w-6 h-6 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-400 hover:text-stone-700">✕</button>
              </div>
              {waNumbers.map((wa) => (
                <a key={wa.number} href={`https://wa.me/${wa.number}`} target="_blank" rel="noopener noreferrer" onClick={() => setWaMenuOpen(false)} className="flex items-center justify-between px-4 py-3 hover:bg-green-50 border-b last:border-0 border-stone-100 transition-colors group">
                  <div>
                    <p className="text-xs font-bold text-stone-900 group-hover:text-[#25D366]">{wa.label}</p>
                    <p className="text-[11px] text-stone-500">{wa.display}</p>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-[#25D366] group-hover:bg-[#1da851] flex items-center justify-center text-white shadow-sm transition-colors">↗</span>
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setWaMenuOpen(!waMenuOpen)}
          onHoverStart={() => setHoverWA(true)}
          onHoverEnd={() => setHoverWA(false)}
          aria-label="WhatsApp"
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: [0, -6, 0] }}
          transition={{
            scale: { delay: 1.4, type: "spring", stiffness: 260, damping: 18 },
            y: { delay: 1.6, duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.2 },
          }}
          whileHover={{ scale: 1.05, y: 0 }}
          whileTap={{ scale: 0.92 }}
          className="relative w-[60px] h-[60px] md:w-[64px] md:h-[64px] rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.45)] border-2 border-white/20"
        >
          {!waMenuOpen && (
            <>
              <motion.span className="absolute inset-0 rounded-full bg-[#25D366]" animate={{ scale: [1, 1.35, 1.35], opacity: [0.5, 0, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeOut", repeatDelay: 0.5 }} style={{ zIndex: -1 }} />
              <motion.span className="absolute inset-0 rounded-full bg-[#25D366]" animate={{ scale: [1, 1.55, 1.55], opacity: [0.3, 0, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.4, repeatDelay: 0.5 }} style={{ zIndex: -1 }} />
            </>
          )}
          <motion.svg animate={{ rotate: hoverWA && !waMenuOpen ? [0, -12, 12, -8, 8, 0] : 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8 text-white relative z-10 drop-shadow-sm">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </motion.svg>
          <span className={`absolute -top-1 -right-1 w-4 h-4 bg-stone-900 border-2 border-white rounded-full flex items-center justify-center transition-transform ${waMenuOpen ? "rotate-45" : ""}`}>
            <span className="text-white text-[10px] leading-none">{waMenuOpen ? "✕" : "+"}</span>
          </span>
          <AnimatePresence>
            {hoverWA && !waMenuOpen && (
              <motion.span initial={{ opacity: 0, x: 10, scale: 0.9 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: 10, scale: 0.9 }} transition={{ duration: 0.2 }} className="absolute right-full mr-3 px-4 py-2 bg-stone-900 text-white text-xs font-bold rounded-full whitespace-nowrap shadow-xl pointer-events-none flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> 3 asesores disponibles
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.2, duration: 0.5 }} className="hidden md:block text-[10px] font-bold tracking-widest uppercase text-stone-400 bg-white/90 backdrop-blur px-2 py-1 rounded-full shadow-sm border border-stone-200 -mt-1">
        ¡Escríbenos!
      </motion.p>
    </div>
  );
}
