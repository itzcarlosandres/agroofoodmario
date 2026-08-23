import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin, Send, MessageCircle, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

// Configura con tus datos de EmailJS (https://dashboard.emailjs.com)
// 1. Crea Service (Gmail) -> copia Service ID
// 2. Crea Template con variables: from_name, from_email, phone, message -> copia Template ID
// 3. Copia Public Key en Account
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export default function Contacto() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError("");
    try {
      // Si aún no configuras EmailJS, avisa
      if (EMAILJS_SERVICE_ID.startsWith("YOUR_")) {
        throw new Error("Configura EmailJS: reemplaza YOUR_SERVICE_ID, YOUR_TEMPLATE_ID y YOUR_PUBLIC_KEY en src/pages/Contacto.jsx");
      }
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone || "No proporcionado",
          message: form.message,
          to_email: "agronovafoodssas@gmail.com",
        },
        EMAILJS_PUBLIC_KEY
      );
      setSent(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      console.error(err);
      setError(err.message || "No se pudo enviar. Intenta por WhatsApp o revisa tu configuración de EmailJS.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#fafaf9] min-h-screen pt-[88px]">
      {/* Hero */}
      <section className="relative bg-[#008e38] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2e5c] via-[#123a6b] to-[#0a2e5c]" />
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-[#008e38]/15 rounded-full blur-[80px]" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-white/5 rounded-full blur-[60px]" />
        <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-green-300 text-[11px] font-bold tracking-[0.15em] uppercase backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> Contacto directo
            </span>
            <h1 className="font-display font-bold text-white text-3xl md:text-4xl lg:text-[42px] leading-[1.05] mt-4">
              Hablemos de tu <span className="text-green-400">proyecto</span>
            </h1>
            <p className="text-white/60 text-sm md:text-base mt-3 max-w-xl leading-relaxed">
              Cotizaciones, muestras y atención empresarial. Respuesta en menos de 24h por WhatsApp o correo.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="https://wa.me/573014641164" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#25D366] hover:bg-[#1da851] text-white rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg">
                <MessageCircle className="w-4 h-4" /> WhatsApp directo
              </a>
              <a href="mailto:agronovafoodssas@gmail.com" className="px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-xl font-bold text-sm backdrop-blur-sm">
                Escribir correo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Info cards + Formulario */}
      <section className="py-10 md:py-14">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Izquierda: info + dirección */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 md:p-7 shadow-sm">
              <h2 className="font-display font-bold text-[#008e38] text-lg">Información de contacto</h2>
              <div className="w-10 h-1 bg-[#008e38] mt-2 mb-6 rounded-full" />
              <div className="space-y-4">
                <a href="tel:+573014641164" className="flex items-start gap-4 p-4 rounded-xl bg-stone-50 border border-stone-100 hover:border-[#008e38]/20 hover:bg-green-50/30 transition-colors group">
                  <div className="w-11 h-11 rounded-xl bg-[#008e38] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform"><Phone className="w-5 h-5" /></div>
                  <div>
                    <p className="text-stone-500 text-xs font-bold tracking-widest uppercase">Teléfono / WhatsApp</p>
                    <p className="text-stone-900 font-bold text-[15px] mt-1">+57 301 464 1164</p>
                    <p className="text-stone-500 text-xs mt-1">Atención inmediata por WhatsApp</p>
                  </div>
                </a>

                <a href="mailto:agronovafoodssas@gmail.com" className="flex items-start gap-4 p-4 rounded-xl bg-stone-50 border border-stone-100 hover:border-[#008e38]/20 hover:bg-green-50/30 transition-colors group">
                  <div className="w-11 h-11 rounded-xl bg-white border border-stone-200 text-[#008e38] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"><Mail className="w-5 h-5" /></div>
                  <div>
                    <p className="text-stone-500 text-xs font-bold tracking-widest uppercase">Correo</p>
                    <p className="text-stone-900 font-bold text-[15px] mt-1 break-all">agronovafoodssas@gmail.com</p>
                    <p className="text-stone-500 text-xs mt-1">Respuesta en 24h</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-stone-50 border border-stone-100">
                  <div className="w-11 h-11 rounded-xl bg-white border border-stone-200 text-[#008e38] flex items-center justify-center shrink-0"><Clock className="w-5 h-5" /></div>
                  <div>
                    <p className="text-stone-500 text-xs font-bold tracking-widest uppercase">Horario</p>
                    <p className="text-stone-900 font-bold text-[15px] mt-1">Lun a Vie: 8:00 a.m. - 5:00 p.m.</p>
                    <p className="text-stone-500 text-xs mt-1">Hora Colombia (GMT-5)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#008e38] text-white border border-[#008e38]">
                  <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-green-300" /></div>
                  <div>
                    <p className="text-white/60 text-xs font-bold tracking-widest uppercase">Dirección</p>
                    <p className="text-white font-bold text-[15px] mt-1">Arjona, Bolívar, Colombia</p>
                    <p className="text-white/60 text-xs mt-1">Planta y oficinas · Costa Caribe</p>
                  </div>
                </div>
              </div>

              {/* Mapa */}
              <div className="mt-6 rounded-xl overflow-hidden border border-stone-200 h-[240px] bg-stone-100">
                <iframe
                  title="Arjona Bolívar"
                  src="https://www.google.com/maps?q=Arjona,Bolivar,Colombia&z=13&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a href="https://www.google.com/maps/search/Arjona,+Bolívar,+Colombia" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-[#008e38] hover:text-[#007a30]">
                <MapPin className="w-3.5 h-3.5" /> Ver en Google Maps
              </a>
            </div>

            <div className="bg-gradient-to-br from-[#008e38] to-[#008e38] rounded-2xl p-6 text-white shadow-lg">
              <h3 className="font-display font-bold text-lg leading-tight">¿Prefieres hablar directo?</h3>
              <p className="text-white/80 text-sm mt-2 leading-relaxed">Cotiza harinas al detal o a granel. Te asesoramos en presentaciones, fichas técnicas y logística.</p>
              <a href="https://wa.me/573014641164?text=Hola%20Agro%20Nova%20quiero%20cotizar" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex px-6 py-3 bg-white text-[#008e38] rounded-xl font-bold text-sm gap-2 items-center hover:bg-stone-50">
                <Phone className="w-4 h-4" /> Llamar / WhatsApp
              </a>
            </div>
          </div>

          {/* Derecha: formulario */}
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white rounded-2xl border border-stone-200 p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <h2 className="font-display font-bold text-[#008e38] text-xl">Envíanos un mensaje</h2>
              <p className="text-stone-500 text-sm mt-1">Completa el formulario y te contactamos en menos de 24h.</p>

              {sent && (
                <div className="mt-5 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 text-green-800">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-sm font-bold">¡Mensaje enviado a agronovafoodssas@gmail.com!</p>
                    <p className="text-xs">Gracias por escribirnos. Te responderemos en menos de 24h.</p>
                  </div>
                </div>
              )}
              {error && (
                <div className="mt-5 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 text-red-800">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <p className="text-xs leading-relaxed">{error}</p>
                </div>
              )}

              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-stone-700 tracking-wide">Nombre completo *</label>
                    <input name="name" value={form.name} onChange={onChange} required placeholder="Ej: Juan Pérez" className="mt-1.5 w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#008e38] focus:bg-white placeholder:text-stone-400" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-stone-700 tracking-wide">Teléfono / WhatsApp</label>
                    <input name="phone" value={form.phone} onChange={onChange} placeholder="Ej: 301 123 4567" className="mt-1.5 w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#008e38] focus:bg-white placeholder:text-stone-400" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-stone-700 tracking-wide">Correo electrónico *</label>
                  <input name="email" value={form.email} onChange={onChange} required type="email" placeholder="tu@correo.com" className="mt-1.5 w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#008e38] focus:bg-white placeholder:text-stone-400" />
                </div>
                <div>
                  <label className="text-xs font-bold text-stone-700 tracking-wide">Mensaje *</label>
                  <textarea name="message" value={form.message} onChange={onChange} required rows={6} placeholder="Cuéntanos qué harina necesitas, presentación y volumen..." className="mt-1.5 w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#008e38] focus:bg-white placeholder:text-stone-400 resize-none" />
                </div>
                <button type="submit" disabled={loading} className="w-full py-3.5 bg-[#008e38] hover:bg-[#007a30] disabled:bg-stone-300 disabled:cursor-not-allowed text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-[0_6px_16px_rgba(85,122,70,0.3)] transition-colors">
                  {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Enviando...</> : <><Send className="w-4 h-4" /> Enviar mensaje</>}
                </button>
                <p className="text-center text-stone-400 text-xs">Al enviar aceptas ser contactado por nuestro equipo. No compartimos tus datos.</p>
              </form>
            </motion.div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-white border border-stone-200 rounded-xl p-4 text-center">
                <Phone className="w-5 h-5 text-[#008e38] mx-auto" />
                <p className="text-xs font-bold text-stone-800 mt-2">Respuesta rápida</p>
                <p className="text-[11px] text-stone-500">Menos de 24h</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-xl p-4 text-center">
                <Mail className="w-5 h-5 text-[#008e38] mx-auto" />
                <p className="text-xs font-bold text-stone-800 mt-2">Asesoría B2B</p>
                <p className="text-[11px] text-stone-500">Fichas técnicas</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-xl p-4 text-center">
                <MapPin className="w-5 h-5 text-[#008e38] mx-auto" />
                <p className="text-xs font-bold text-stone-800 mt-2">Visitas a planta</p>
                <p className="text-[11px] text-stone-500">Arjona, Bolívar</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
