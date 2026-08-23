import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const legal = {
  terminos: {
    title: "Términos de Servicio",
    body: (
      <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
        <p>El contenido de este sitio web es propiedad de <strong>AGRO NOVA FOODS S.A.S.</strong> y está destinado exclusivamente a fines informativos y comerciales. Usted se compromete a utilizarlo de manera lícita y respetuosa.</p>
        <p>Todo el material gráfico, fotográfico y textual es propiedad de Agro Nova Foods S.A.S. o de sus licenciantes. Queda prohibida su reproducción sin autorización escrita.</p>
        <p>Agro Nova Foods S.A.S. no será responsable por daños directos o indirectos derivados del uso o la imposibilidad de uso de este sitio.</p>
      </div>
    ),
  },
  privacidad: {
    title: "Política de Privacidad",
    body: (
      <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
        <p>En <strong>AGRO NOVA FOODS S.A.S.</strong> nos comprometemos a proteger su información personal de acuerdo con la <strong>Ley 1581 de 2012</strong> de Colombia.</p>
        <p>Recolectamos datos de contacto (nombre, correo, teléfono, mensaje) únicamente para responder cotizaciones y solicitudes comerciales. No vendemos, arrendamos ni cedemos su información personal a terceros, salvo obligación legal o necesidad para la prestación del servicio.</p>
        <p>Puede ejercer sus derechos de acceso, corrección o eliminación escribiendo a agronovafoodssas@gmail.com.</p>
      </div>
    ),
  },
};

export default function Footer() {
  const [modal, setModal] = useState(null);
  return (
    <>
      <footer className="bg-[#070f0a] text-white py-12 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
            <div className="flex flex-col gap-3">
              <a href="#inicio" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <img src="/images/logo_white.png" alt="Agro Nova Foods" className="h-10 sm:h-12 w-auto object-contain" />
              </a>
              <p className="text-stone-500 text-xs max-w-[220px] leading-relaxed">Del Caribe colombiano al mundo. Calidad e inocuidad desde el origen.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm font-medium">
              <button onClick={() => document.getElementById("sobre-nosotros")?.scrollIntoView({ behavior: "smooth" })} className="text-stone-400 hover:text-white text-left">Acerca de Nosotros</button>
              <button onClick={() => setModal("terminos")} className="text-stone-400 hover:text-white text-left">Términos de Servicio</button>
              <button onClick={() => setModal("privacidad")} className="text-stone-400 hover:text-white text-left">Política de Privacidad</button>
              <a href="#contacto" className="text-stone-400 hover:text-white">Contáctanos</a>
            </div>
          </div>
          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-600">
            <p>© {new Date().getFullYear()} Agro Nova Foods S.A.S. · Bolívar, Colombia · Todos los derechos reservados.</p>
            <p>La agricultura del futuro es <span className="text-green-500 font-semibold">100% Sostenible</span>.</p>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {modal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setModal(null)}>
            <motion.div initial={{ scale: 0.92, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.92, opacity: 0, y: 20 }} transition={{ type: "spring", damping: 28, stiffness: 350 }} className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between px-6 py-5 border-b border-stone-100 shrink-0">
                <h2 className="text-lg font-display font-bold text-stone-900">{legal[modal].title}</h2>
                <button onClick={() => setModal(null)} className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center transition-colors"><X className="w-4 h-4 text-stone-600" /></button>
              </div>
              <div className="overflow-y-auto px-6 py-5">{legal[modal].body}</div>
              <div className="px-6 py-4 border-t border-stone-100 shrink-0">
                <button onClick={() => setModal(null)} className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-sm font-semibold rounded-xl transition-colors">Cerrar</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
