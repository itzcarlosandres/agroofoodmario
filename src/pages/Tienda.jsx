import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Truck, CreditCard, Headset, Leaf, Wheat, Award, Sun, ShieldCheck, Factory, Users, Minus, Plus, X, Trash2, FileText, Utensils, Cookie, Soup, LayoutGrid, ArrowLeft, Crown } from "lucide-react";
import { storeProducts } from "../data/storeData";

function formatPrice(n) {
  if (n == null) return "Precio según volumen";
  return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(n);
}

export default function Tienda() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [toast, setToast] = useState(null);
  const [preview, setPreview] = useState(null);
  const [lineIdx, setLineIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setLineIdx((p) => (p + 1) % 2), 2800);
    return () => clearInterval(id);
  }, []);

  // SEO Tienda - título y descripción optimizados para buscadores
  useEffect(() => {
    const title = "Tienda Online | Harina de Yuca y Plátano 500g 1kg 25kg | Compra Directo de Planta | AGRO NOVA FOODS";
    const desc = "Compra harina de yuca y plátano 100% natural sin gluten en la tienda oficial de AGRO NOVA FOODS. Presentaciones 500g, 1kg y 25kg industrial. Envíos a todo Colombia desde Arjona, Bolívar. Cotiza por WhatsApp +57 301 464 1164.";
    document.title = title;
    let m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement("meta"); m.name = "description"; document.head.appendChild(m); }
    m.content = desc;
    // keywords
    let kw = document.querySelector('meta[name="keywords"]');
    if (!kw) { kw = document.createElement("meta"); kw.name = "keywords"; document.head.appendChild(kw); }
    kw.content = "tienda harina de yuca, harina de plátano, comprar harina sin gluten, harina yuca 500g, harina yuca 1kg, harina platano 25kg, Agro Nova Foods tienda, harina natural Colombia";
    // canonical
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
    link.href = "https://agronovafoods.com/tienda";
    // OG
    const setOG = (prop, content) => {
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute("property", prop); document.head.appendChild(el); }
      el.content = content;
    };
    setOG("og:title", title);
    setOG("og:description", desc);
    setOG("og:url", "https://agronovafoods.com/tienda");
    setOG("og:image", "https://agronovafoods.com/portada/portada.jpg");
    setOG("og:type", "website");
    // JSON-LD Store
    let ld = document.getElementById("ld-tienda");
    if (!ld) { ld = document.createElement("script"); ld.id = "ld-tienda"; ld.type = "application/ld+json"; document.head.appendChild(ld); }
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Store",
      name: "Tienda AGRO NOVA FOODS",
      url: "https://agronovafoods.com/tienda",
      description: desc,
      image: "https://agronovafoods.com/portada/portada.jpg",
      address: { "@type": "PostalAddress", addressLocality: "Arjona", addressRegion: "Bolívar", addressCountry: "CO" },
      telephone: "+573014641164",
      priceRange: "$$",
      openingHours: "Mo-Fr 08:00-17:00",
    });
  }, []);

  const addToCart = (p) => {
    setCart((prev) => {
      const f = prev.find((x) => x.id === p.id);
      if (f) return prev.map((x) => (x.id === p.id ? { ...x, qty: x.qty + 1 } : x));
      return [...prev, { ...p, qty: 1 }];
    });
    setToast(p.name + " " + p.subname);
    setTimeout(() => setToast(null), 2000);
    setShowCart(true);
  };
  const updateQty = (id, d) => setCart((p) => p.map((x) => x.id === id ? { ...x, qty: x.qty + d } : x).filter((x) => x.qty > 0));
  const total = cart.reduce((s, x) => s + (x.price || 0) * x.qty, 0);
  const count = cart.reduce((s, x) => s + x.qty, 0);
  const checkout = () => {
    if (!cart.length) return;
    const lines = cart.map((x) => `• ${x.name} ${x.subname} x${x.qty} = ${formatPrice((x.price||0)*x.qty)}`).join("%0A");
    const msg = `Hola Agro Nova Foods, quiero comprar:%0A%0A${lines}%0A%0ATotal: ${formatPrice(total)}`;
    window.open(`https://wa.me/573014641164?text=${msg}`, "_blank");
  };
  const cotizar = (p) => {
    const msg = `Hola, quiero solicitar cotización de ${p.name} ${p.subname} (${p.subtitle || ""})`;
    window.open(`https://wa.me/573014641164?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="bg-[#f8f7f5] min-h-screen pt-[88px]">
      {/* TOP BAR modelo - separada con más aire */}
      <div className="bg-[#f5f5f3] border-y border-stone-200/80 text-[11px] text-stone-600 hidden md:block mt-2">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-green-600 rounded-full" /> Somos la primera empresa en la costa Colombiana en fabricar harinas de yuca y plátano.</span>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Truck className="w-3.5 h-3.5 text-green-700" /> Envíos a todo Colombia</span>
            <span className="flex items-center gap-1.5"><Headset className="w-3.5 h-3.5 text-green-700" /> Atención empresarial</span>
            <a href="https://wa.me/573014641164" className="flex items-center gap-1.5 font-bold text-stone-700"><span className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center text-white text-[10px]">✦</span> +57 301 464 1164</a>
          </div>
        </div>
      </div>

      {/* HERO modelo - fiel a la imagen */}
      <section className="relative bg-[#fcfbf9] overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-8 items-center">
          {/* Izquierda - texto más notorio */}
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 text-[#008e38] text-xs font-extrabold tracking-[0.2em] uppercase bg-green-50 border border-[#008e38]/20 px-3 py-1 rounded-full">Harinas de yuca y plátano</span>
            <h1 className="font-display font-extrabold leading-[0.92] mt-4 text-[38px] md:text-[50px] lg:text-[54px] text-[#0a2e5c] drop-shadow-[0_1px_0_rgba(0,0,0,0.02)]">
              Calidad que<br />transforma.<br />
              <span className="text-[#0a2e5c]">Origen que <span className="text-[#008e38]">nutre.</span></span>
            </h1>
            <p className="text-stone-700 text-sm md:text-[16px] font-medium leading-relaxed mt-5 max-w-[440px]">Harinas <span className="font-bold text-[#008e38]">100% naturales</span>, sin gluten y versátiles<br />para tu hogar, tu negocio y tu industria.</p>
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => document.getElementById("productos")?.scrollIntoView({ behavior: "smooth" })} className="px-6 py-2.5 bg-[#008e38] hover:bg-[#007a30] text-white rounded-[8px] text-[13px] font-bold flex items-center gap-2 shadow-sm">
                <ShoppingCart className="w-4 h-4" /> Comprar ahora
              </button>
              <a href="https://wa.me/573014641164" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-white border border-stone-200 text-stone-700 rounded-[8px] text-[13px] font-bold flex items-center gap-2 hover:bg-stone-50 shadow-sm">
                <FileText className="w-4 h-4 text-stone-600" /> Solicitar cotización
              </a>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-8 max-w-[440px] pt-6 border-t border-stone-100">
              {[
                { icon: Leaf, label: "Origen", sub: "natural" },
                { icon: Wheat, label: "Sin gluten", sub: "" },
                { icon: Award, label: "Alta", sub: "calidad" },
                { icon: Sun, label: "Producción", sub: "sostenible" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-white border border-stone-200 shadow-sm flex items-center justify-center shrink-0"><b.icon className="w-5 h-5 text-[#008e38]" strokeWidth={1.8} /></div>
                  <p className="text-[12px] font-bold text-stone-800 leading-[1.1]">{b.label}<br /><span className="font-medium text-stone-500 text-[11px]">{b.sub}</span></p>
                </div>
              ))}
            </div>
          </div>

          {/* Derecha - PORTADA difuminada */}
          <div className="relative h-[400px] md:h-[460px] rounded-2xl overflow-hidden bg-[#fcfbf9] shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
            <img
              src="/portada/portada.jpg"
              alt="Portada Agro Nova Foods"
              className="absolute inset-0 w-full h-full object-cover object-center scale-[1.03]"
              style={{
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 6%, black 94%, transparent 100%)",
                maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 6%, black 94%, transparent 100%)",
                WebkitMaskComposite: "source-in",
                maskComposite: "intersect",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent lg:hidden pointer-events-none" />
            {count > 0 && (
              <button onClick={() => setShowCart(true)} className="absolute top-3 right-3 bg-[#0a2e5c] text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5 z-20">
                <ShoppingCart className="w-3.5 h-3.5" /> {count} · {formatPrice(total)}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* BARRA AZUL 4 features - agrandada */}
      <section className="bg-[#0a2e5c] text-white">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 divide-x divide-white/10">
          {[
            { title: "100% naturales", sub: "Sin aditivos ni conservantes", icon: Leaf },
            { title: "Versátiles", sub: "Múltiples aplicaciones", icon: Wheat },
            { title: "Trazabilidad", sub: "Procesos controlados", icon: ShieldCheck },
            { title: "Sostenibles", sub: "Comprometidos con el planeta", icon: Sun },
          ].map((f) => (
            <div key={f.title} className="flex items-center gap-3.5 px-3 md:px-6 py-2.5">
              <div className="w-11 h-11 rounded-full border border-white/25 bg-white/5 flex items-center justify-center shrink-0"><f.icon className="w-5 h-5 text-green-300" strokeWidth={1.8} /></div>
              <div>
                <p className="text-[14px] font-bold leading-none tracking-wide">{f.title}</p>
                <p className="text-xs text-white/65 leading-none mt-1.5">{f.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NUESTROS PRODUCTOS - 100% ancho y más profesional */}
      <section id="productos" className="py-16 md:py-20 bg-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
          <h2 className="text-center font-display font-bold text-[#0a2e5c] text-2xl md:text-3xl lg:text-[32px] tracking-tight">Nuestros productos</h2>
          <div className="w-16 h-1.5 bg-[#0a2e5c] mx-auto mt-4 mb-6 rounded-full" />
          <p className="text-center text-stone-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed mb-10">Nuestra <span className="font-bold text-[#008e38]">Harina</span>  100% natural es la base perfecta para explorar múltiples preparaciones. Los resultados finales dependen de la receta y el modo de uso que cada consumidor elija. <span className="font-bold text-[#0a2e5c]">¡Tú pones la creatividad, nosotros la calidad!</span></p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 w-full">
            {storeProducts.map((p) => (
              <div key={p.id} className="group bg-white rounded-2xl border border-stone-200 shadow-[0_6px_20px_rgba(0,0,0,0.05)] p-4 md:p-5 flex flex-col text-center hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:border-[#008e38]/20 hover:-translate-y-1 transition-all duration-300">
                <div className="bg-gradient-to-b from-stone-50 to-white rounded-xl p-5 h-[240px] flex items-center justify-center relative overflow-hidden border border-stone-100 group-hover:border-[#008e38]/20">
                  <Link to={`/tienda/${p.id}`} className="w-full h-full flex items-center justify-center">
                    <img src={p.image} alt={p.name} className="max-h-full max-w-full object-contain group-hover:scale-[1.02] transition-transform duration-400 drop-shadow-sm" />
                  </Link>
                  <button onClick={() => setPreview(p)} className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/95 backdrop-blur shadow-sm border border-stone-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white">
                    <span className="text-stone-600 text-[10px]">⤢</span>
                  </button>
                  <Link to={`/tienda/${p.id}`} className="absolute bottom-3 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[#0a2e5c] text-white text-[10px] font-bold tracking-widest uppercase rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#007a30]">
                    Ver detalle
                  </Link>
                </div>
                <Link to={`/tienda/${p.id}`} className="block hover:text-[#008e38] transition-colors">
                  <h3 className="text-stone-900 text-sm font-bold mt-4 leading-tight group-hover:text-[#008e38]">{p.name}<br /><span className="text-stone-600 font-semibold">{p.subname}</span></h3>
                </Link>
                {p.subtitle && <p className="text-stone-400 text-[11px] leading-none mt-1">{p.subtitle}</p>}
                <p className="text-[#008e38] font-bold text-[15px] mt-2.5 tracking-tight">{formatPrice(p.price)}</p>
                {p.type === "retail" ? (
                  <button onClick={() => addToCart(p)} className="mt-4 w-full py-2.5 bg-[#008e38] hover:bg-[#007a30] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm">
                    <ShoppingCart className="w-3.5 h-3.5" /> Agregar al carrito
                  </button>
                ) : (
                  <button onClick={() => cotizar(p)} className="mt-4 w-full py-2.5 bg-white border border-stone-200 text-stone-600 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-stone-50">
                    <FileText className="w-3.5 h-3.5 text-stone-600" /> Solicitar cotización
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox imagen */}
      <AnimatePresence>
        {preview && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setPreview(null)}>
            <motion.div initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.92, opacity: 0 }} transition={{ type: "spring", damping: 25, stiffness: 300 }} className="bg-white rounded-2xl max-w-[640px] w-full overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="relative bg-gradient-to-b from-stone-50 to-white p-6 md:p-10 flex items-center justify-center min-h-[380px]">
                <img src={preview.image} alt={preview.name} className="max-h-[420px] max-w-full object-contain drop-shadow-xl" />
                <button onClick={() => setPreview(null)} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white border border-stone-200 shadow-md flex items-center justify-center hover:bg-stone-50"><X className="w-4 h-4 text-stone-600" /></button>
              </div>
              <div className="p-6 border-t border-stone-100 text-center">
                <h3 className="font-display font-bold text-stone-900 text-lg">{preview.name} {preview.subname}</h3>
                <p className="text-[#008e38] font-bold text-xl mt-1">{formatPrice(preview.price)}</p>
                <p className="text-stone-500 text-sm mt-2">{preview.desc}</p>
                <div className="flex gap-3 mt-5">
                  <button onClick={() => { addToCart(preview); setPreview(null); }} className="flex-1 py-3 bg-[#008e38] hover:bg-[#007a30] text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2"><ShoppingCart className="w-4 h-4" /> Agregar al carrito</button>
                  <button onClick={() => setPreview(null)} className="px-6 py-3 bg-white border border-stone-200 rounded-xl font-bold text-sm text-stone-600">Cerrar</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BARRA SECUNDARIA 3 beneficios - agrandada */}
      <section className="bg-stone-50 border-y border-stone-200">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start bg-white rounded-xl p-4 border border-stone-200 shadow-sm">
            <div className="w-11 h-11 rounded-full bg-green-50 border border-[#008e38]/20 flex items-center justify-center shrink-0"><Truck className="w-6 h-6 text-[#008e38]" strokeWidth={1.8} /></div>
            <div><p className="text-sm font-bold text-stone-800">Envíos a todo el país</p><p className="text-xs text-stone-500 mt-0.5">Entregas seguras y rápidas.</p></div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start bg-white rounded-xl p-4 border border-stone-200 shadow-sm">
            <div className="w-11 h-11 rounded-full bg-green-50 border border-[#008e38]/20 flex items-center justify-center shrink-0"><CreditCard className="w-6 h-6 text-[#008e38]" strokeWidth={1.8} /></div>
            <div><p className="text-sm font-bold text-stone-800">Paga como prefieras</p><p className="text-xs text-stone-500 mt-0.5">Tarjetas, transferencias y más.</p></div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start bg-white rounded-xl p-4 border border-stone-200 shadow-sm">
            <div className="w-11 h-11 rounded-full bg-green-50 border border-[#008e38]/20 flex items-center justify-center shrink-0"><Headset className="w-6 h-6 text-[#008e38]" strokeWidth={1.8} /></div>
            <div><p className="text-sm font-bold text-stone-800">Atención personalizada</p><p className="text-xs text-stone-500 mt-0.5">Estamos para ayudarte.</p></div>
          </div>
        </div>
      </section>

      {/* POSIBLES APLICACIONES - con contraste para resaltar */}
      <section className="py-16 md:py-20 bg-[#f8f7f5] border-y border-stone-200/60 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#008e38]/[0.03] rounded-full blur-[60px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(85,122,70,0.04)_0%,transparent_60%)] pointer-events-none" />
        <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display font-bold text-[#0a2e5c] text-2xl md:text-3xl tracking-tight">Posibles aplicaciones</h2>
          <p className="text-center text-stone-600 text-sm md:text-base mt-2">Nuestras harinas se adaptan a todo tipo de preparaciones</p>
          <div className="w-16 h-1.5 bg-[#0a2e5c] mx-auto mt-4 mb-12 rounded-full" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-6">
            {[
              { label: "Arepas y", sub: "pan cakes", icon: Utensils },
              { label: "Panificación", sub: "", icon: Wheat },
              { label: "Galletas y", sub: "tortas", icon: Cookie },
              { label: "Sopas y", sub: "mezclas", icon: Soup },
              { label: "Productos", sub: "sin gluten", icon: Leaf },
              { label: "Uso", sub: "industrial", icon: Factory },
            ].map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.label} className="group bg-white border border-stone-200 rounded-2xl p-6 md:p-8 text-center shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.10)] hover:border-[#0a2e5c]/20 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full bg-[#f8f7f5] border border-stone-200 group-hover:bg-[#0a2e5c] group-hover:border-[#0a2e5c] flex items-center justify-center shadow-sm transition-colors"><Icon className="w-7 h-7 md:w-8 md:h-8 text-[#008e38] group-hover:text-white transition-colors" strokeWidth={1.7} /></div>
                  <p className="text-sm md:text-[15px] font-bold text-stone-800 mt-4 leading-tight">{a.label}<br /><span className="font-semibold text-stone-500 group-hover:text-stone-600">{a.sub}</span></p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LÍNEA INDUSTRIAL - 100% ancho */}
      <section className="py-16 md:py-20 bg-[#f8f7f5] w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
          <div className="lg:col-span-4 bg-white rounded-3xl border border-stone-200 shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-8 flex flex-col items-center justify-center relative overflow-hidden min-h-[520px]">
            <div className="relative w-full h-[400px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={lineIdx}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.95 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <img
                    src={lineIdx === 0 ? "/mario fotos/FOTOS EMPAQUE/harina de yuca 25 kg.jpeg" : "/mario fotos/FOTOS EMPAQUE/harina de Platano 25 kg.jpeg"}
                    alt={lineIdx === 0 ? "Harina de Yuca 25 kg" : "Harina de Plátano 25 kg"}
                    className="max-h-full max-w-[92%] object-contain drop-shadow-[0_14px_30px_rgba(0,0,0,0.18)]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex gap-2.5 mt-6">
              {[0, 1].map((i) => (
                <button key={i} onClick={() => setLineIdx(i)} className={`h-2 rounded-full transition-all ${lineIdx === i ? "w-10 bg-[#0a2e5c]" : "w-5 bg-stone-200"}`} aria-label={`Ver ${i === 0 ? "yuca" : "plátano"}`} />
              ))}
            </div>
            <p className="text-sm font-bold tracking-widest uppercase text-stone-600 mt-3">{lineIdx === 0 ? "Harina de Yuca 25 kg" : "Harina de Plátano 25 kg"}</p>
          </div>
          <div className="lg:col-span-4 bg-white rounded-3xl p-8 md:p-10 border border-stone-200 shadow-[0_10px_30px_rgba(0,0,0,0.06)] flex flex-col justify-center">
            <h3 className="font-display font-bold text-[#008e38] text-2xl md:text-3xl leading-tight">Línea industrial</h3>
            <div className="w-16 h-1.5 bg-[#0a2e5c] mt-4 mb-5 rounded-full" />
            <p className="text-stone-600 text-base md:text-lg leading-relaxed">Ofrecemos harinas de yuca y plátano en presentación industrial de 25 kg, ideales para procesos productivos a gran escala.</p>
            <ul className="mt-6 space-y-4">
              {["Suministro constante y confiable", "Calidad garantizada", "Condiciones comerciales competitivas", "Atención empresarial personalizada"].map((t) => (
                <li key={t} className="flex items-center gap-4 text-base md:text-[17px] text-stone-800 font-semibold"><span className="w-7 h-7 rounded-full bg-green-100 border border-green-200 flex items-center justify-center text-[#008e38] text-sm shrink-0">✓</span> {t}</li>
              ))}
            </ul>
            <a href="https://wa.me/573014641164?text=Hola%20quiero%20cotizar%20linea%20industrial%2025kg" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex px-8 py-3.5 bg-[#008e38] hover:bg-[#007a30] text-white rounded-xl text-base font-bold gap-2.5 items-center shadow-lg w-fit">
              <FileText className="w-5 h-5 text-white" /> Solicitar cotización
            </a>
          </div>
          <div className="lg:col-span-4 bg-gradient-to-br from-[#0a2e5c] via-[#0e3a6b] to-[#082444] rounded-3xl p-8 md:p-10 text-white flex flex-col justify-center relative overflow-hidden shadow-[0_12px_40px_rgba(10,46,92,0.3)] border border-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,142,56,0.08)_0%,transparent_55%)] pointer-events-none" />
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-white/5 rounded-full blur-3xl" />
            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mb-5 backdrop-blur-sm"><Crown className="w-7 h-7 text-white" /></div>
            <h4 className="font-display font-bold text-lg md:text-xl leading-snug">Somos la primera empresa en la costa Colombiana en fabricar harinas de yuca y plátano.</h4>
            <div className="w-12 h-1 bg-white/20 mt-4 rounded-full" />
            <p className="text-white/70 text-sm md:text-base leading-relaxed mt-4">Innovamos desde nuestras raíces para llevar nutrición y calidad a más personas y empresas.</p>
          </div>
        </div>
      </section>

      {/* POR QUÉ ELEGIR - agrandado */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display font-bold text-[#008e38] text-2xl md:text-3xl tracking-tight">¿Por qué elegir Agro Nova Foods?</h2>
          <p className="text-center text-stone-500 text-sm md:text-base mt-2">Valor que nos diferencia en cada etapa</p>
          <div className="w-16 h-1.5 bg-[#0a2e5c] mx-auto mt-4 mb-12 rounded-full" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-6">
            {[
              { title: "Origen natural", desc: "Ingredientes seleccionados de origen natural.", icon: Leaf },
              { title: "Calidad y seguridad", desc: "Procesos certificados que garantizan inocuidad.", icon: ShieldCheck },
              { title: "Producción sostenible", desc: "Aprovechamos el sol y cuidamos el entorno.", icon: Sun },
              { title: "Experiencia", desc: "Conocemos la industria y tus necesidades.", icon: Award },
              { title: "Atención directa", desc: "Asesoría cercana y respuestas rápidas.", icon: Headset },
            ].map((f) => (
              <div key={f.title} className="group bg-stone-50 hover:bg-white border border-stone-200 rounded-2xl p-6 md:p-8 text-center hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:border-[#008e38]/20 hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full bg-white border border-stone-200 group-hover:border-green-200 group-hover:bg-green-50 flex items-center justify-center shadow-sm transition-colors"><f.icon className="w-7 h-7 md:w-8 md:h-8 text-[#008e38]" strokeWidth={1.7} /></div>
                <h4 className="text-sm md:text-[15px] font-bold text-stone-800 mt-4">{f.title}</h4>
                <p className="text-xs md:text-sm text-stone-500 mt-2 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE AGRO NOVA - profesional */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-stone-50 to-white border-t border-stone-100">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-green-50 rounded-2xl -z-10 hidden lg:block" />
            <div className="relative rounded-2xl overflow-hidden h-[300px] lg:h-[380px] shadow-[0_12px_32px_rgba(0,0,0,0.08)] border border-stone-100">
              <img src="/mario fotos/fotos sin nada/porteria 1.jpeg" alt="Planta Agro Nova Alimentos - Arjona Bolívar" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-3 py-2 rounded-xl shadow-md border border-white/50 hidden md:flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[11px] font-bold tracking-widest uppercase text-stone-700">Arjona · Bolívar</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 text-[#008e38] text-xs font-bold tracking-[0.18em] uppercase bg-green-50 border border-[#008e38]/20 px-3 py-1 rounded-full">Desde Arjona para Colombia</span>
            <h3 className="font-display font-bold text-[#008e38] text-2xl md:text-3xl leading-tight mt-4">Sobre Agro Nova</h3>
            <div className="w-12 h-1 bg-[#0a2e5c] mt-3 mb-5 rounded-full" />
            <p className="text-stone-700 text-sm md:text-[15px] leading-relaxed font-medium">Somos una empresa de <span className="font-bold text-[#008e38]">Arjona, Bolívar, Colombia</span>, dedicada a transformar lo mejor del campo en harinas de yuca y plátano de alta calidad.</p>
            <p className="text-stone-500 text-sm md:text-[15px] leading-relaxed mt-3">Trabajamos con <span className="font-semibold text-stone-700">compromiso y sostenibilidad</span> para llevar nutrición, confianza y valor a tu hogar y tu industria. Cada lote con trazabilidad y procesos certificados.</p>
            <div className="flex flex-wrap gap-3 mt-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-stone-200 rounded-full text-xs font-semibold text-stone-700"><ShieldCheck className="w-3.5 h-3.5 text-[#008e38]" /> Inocuidad garantizada</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-stone-200 rounded-full text-xs font-semibold text-stone-700"><Award className="w-3.5 h-3.5 text-[#008e38]" /> Compromiso social</span>
            </div>
            <a href="/sobre-nosotros" className="mt-6 inline-flex items-center gap-2 px-7 py-3 bg-[#008e38] hover:bg-[#007a30] text-white rounded-xl text-sm font-bold shadow-[0_4px_12px_rgba(85,122,70,0.25)] hover:shadow-[0_6px_16px_rgba(85,122,70,0.35)] transition-all">
              Conoce más sobre nosotros <ArrowLeft className="w-4 h-4 rotate-180" />
            </a>
          </div>
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative w-40 h-40 md:w-44 md:h-44">
              <div className="absolute inset-0 rounded-full border-2 border-[#008e38]/10 bg-gradient-to-br from-white to-stone-50 shadow-[0_8px_24px_rgba(0,0,0,0.06)]" />
              <div className="absolute inset-3 rounded-full border border-dashed border-[#008e38]/20 flex flex-col items-center justify-center text-center p-4">
                <div className="w-10 h-10 rounded-full bg-[#0a2e5c]/10 flex items-center justify-center"><Leaf className="w-6 h-6 text-[#008e38]" /></div>
                <p className="text-[9px] font-bold tracking-[0.16em] uppercase text-stone-500 mt-2 leading-tight">Nutriendo el futuro<br />sosteniblemente</p>
                <div className="w-6 h-0.5 bg-[#0a2e5c]/30 mt-2 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOAST */}
      <AnimatePresence>
        {toast && <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-stone-900 text-white px-5 py-3 rounded-full shadow-xl text-sm font-medium flex items-center gap-2"><ShoppingCart className="w-4 h-4 text-green-400" /> {toast} agregado</motion.div>}
      </AnimatePresence>

      {/* DRAWER CARRITO */}
      <AnimatePresence>
        {showCart && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" onClick={() => setShowCart(false)} />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 30, stiffness: 300 }} className="fixed inset-y-0 right-0 w-[92%] max-w-[380px] bg-white z-50 shadow-2xl flex flex-col">
              <div className="flex items-center justify-between p-5 border-b border-stone-200">
                <h3 className="font-display font-bold">Tu carrito · {count}</h3>
                <button onClick={() => setShowCart(false)} className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center"><X className="w-4 h-4" /></button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {cart.length === 0 ? <p className="text-center text-stone-500 text-sm mt-20">Carrito vacío</p> :
                  cart.map((x) => (
                    <div key={x.id} className="flex gap-3 items-center bg-stone-50 border border-stone-200 rounded-xl p-3">
                      <img src={x.image} alt={x.name} className="w-16 h-16 rounded-lg object-cover" />
                      <div className="flex-1">
                        <p className="text-stone-900 text-xs font-bold">{x.name} {x.subname}</p>
                        <p className="text-stone-500 text-xs">{formatPrice(x.price)}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <button onClick={() => updateQty(x.id, -1)} className="w-6 h-6 rounded-full bg-white border flex items-center justify-center"><Minus className="w-3 h-3" /></button>
                          <span className="text-xs font-bold w-5 text-center">{x.qty}</span>
                          <button onClick={() => updateQty(x.id, 1)} className="w-6 h-6 rounded-full bg-white border flex items-center justify-center"><Plus className="w-3 h-3" /></button>
                        </div>
                      </div>
                      <button onClick={() => updateQty(x.id, -x.qty)} className="text-stone-400"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  ))}
              </div>
              {cart.length > 0 && (
                <div className="p-5 border-t border-stone-200">
                  <div className="flex justify-between items-center mb-3"><span className="text-stone-500 text-xs font-bold uppercase">Total</span><span className="font-display font-bold text-lg">{formatPrice(total)}</span></div>
                  <button onClick={checkout} className="w-full py-3 bg-[#25D366] text-white rounded-xl font-semibold flex items-center justify-center gap-2">Cotizar por WhatsApp</button>
                  <button onClick={() => setCart([])} className="w-full mt-2 py-2.5 bg-white border border-stone-200 rounded-xl text-xs font-semibold text-stone-600">Vaciar carrito</button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
