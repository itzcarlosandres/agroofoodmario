import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contacto" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-100/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-green-600" />
            <span className="text-green-600 font-display text-[11px] font-bold tracking-[0.2em] uppercase">Contáctanos</span>
            <div className="w-8 h-0.5 bg-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-4 leading-tight">¿Listo para trabajar <span className="text-green-600">juntos</span>?</h2>
          <p className="text-stone-500 text-base md:text-lg max-w-2xl mx-auto">Estamos aquí para responder tus preguntas y construir relaciones comerciales sólidas.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-5">
            <div className="bg-gradient-to-br from-[#0a1f12] to-[#112d1b] rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/20 rounded-full blur-3xl" />
              <h3 className="text-lg font-display font-bold mb-6 relative">Información de contacto</h3>
              <div className="space-y-4 relative">
                <a href="https://wa.me/573014641164" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/90 hover:text-white">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center"><Phone className="w-4 h-4" /></div>
                  <div><p className="text-sm font-semibold">WhatsApp</p><p className="text-xs text-white/60">+57 301 464 1164</p></div>
                </a>
                <a href="mailto:agronovafoodssas@gmail.com" className="flex items-center gap-3 text-white/90 hover:text-white">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center"><Mail className="w-4 h-4" /></div>
                  <div><p className="text-sm font-semibold">Correo</p><p className="text-xs text-white/60">agronovafoodssas@gmail.com</p></div>
                </a>
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center"><MapPin className="w-4 h-4" /></div>
                  <div><p className="text-sm font-semibold">Ubicación</p><p className="text-xs text-white/60">Bolívar, Colombia</p></div>
                </div>
              </div>
              <a href="https://www.instagram.com/agronovafoods_" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">Síguenos en Instagram →</a>
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} onSubmit={onSubmit} className="bg-stone-50 border border-stone-200 rounded-2xl p-6 md:p-8 space-y-4">
            {sent && <div className="p-3 bg-green-50 border border-green-200 text-green-700 text-sm rounded-xl text-center">¡Mensaje enviado! Te responderemos pronto.</div>}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="name" value={form.name} onChange={onChange} placeholder="Nombre completo" required className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-green-500" />
              <input name="phone" value={form.phone} onChange={onChange} placeholder="Teléfono" className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-green-500" />
            </div>
            <input name="email" value={form.email} onChange={onChange} placeholder="Correo electrónico" type="email" required className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-green-500" />
            <textarea name="message" value={form.message} onChange={onChange} placeholder="Cuéntanos sobre tu proyecto o cotización..." rows={4} className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-green-500 resize-none" />
            <button type="submit" className="w-full py-3.5 bg-[#008e38] hover:bg-[#007a30] text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-colors">
              <Send className="w-4 h-4" /> Enviar mensaje
            </button>
            <p className="text-center text-stone-400 text-xs">Respuesta en menos de 24h · Atención B2B</p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
