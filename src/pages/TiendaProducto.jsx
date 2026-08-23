import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, FileText, ArrowLeft, Check, Truck, ShieldCheck, Leaf, Star } from "lucide-react";
import { storeProducts } from "../data/storeData";

function formatPrice(n) {
  if (n == null) return "Precio según volumen";
  return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(n);
}

export default function TiendaProducto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = storeProducts.find((p) => p.id === id);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (!product) return;
    const base = "https://www.agronovafoods.com";
    const url = `${base}/tienda/${product.id}`;
    const title = `${product.name} ${product.subname} | Harina 100% Natural Sin Gluten | AGRO NOVA FOODS`;
    const desc = `${product.name} ${product.subname} ${product.subtitle || ""} - ${product.desc} Compra directo de planta en Arjona, Bolívar. Envíos a todo Colombia. ${product.price ? `Precio ${formatPrice(product.price)}.` : "Cotiza precio según volumen."} Agro Nova Foods.`;
    document.title = title;
    let m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement("meta"); m.name = "description"; document.head.appendChild(m); }
    m.content = desc.slice(0, 155);
    let kw = document.querySelector('meta[name="keywords"]');
    if (!kw) { kw = document.createElement("meta"); kw.name = "keywords"; document.head.appendChild(kw); }
    kw.content = `${product.name.toLowerCase()} ${product.subname}, comprar ${product.name.toLowerCase()}, harina sin gluten, Agro Nova Foods, ${product.category}`;
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
    link.href = url;
    const setOG = (prop, content) => {
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute("property", prop); document.head.appendChild(el); }
      el.content = content;
    };
    setOG("og:title", title);
    setOG("og:description", desc.slice(0, 155));
    setOG("og:url", url);
    setOG("og:image", `${base}${product.image}`);
    setOG("og:type", "product");
    // JSON-LD Product
    let ld = document.getElementById("ld-product");
    if (!ld) { ld = document.createElement("script"); ld.id = "ld-product"; ld.type = "application/ld+json"; document.head.appendChild(ld); }
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      name: `${product.name} ${product.subname}`,
      image: `${base}${product.image}`,
      description: product.desc,
      brand: { "@type": "Brand", name: "Agro Nova Foods" },
      offers: {
        "@type": "Offer",
        url,
        priceCurrency: "COP",
        price: product.price || "0",
        availability: product.price ? "https://schema.org/InStock" : "https://schema.org/PreOrder",
        seller: { "@type": "Organization", name: "Agro Nova Foods S.A.S." },
      },
    });
    // also remove old tienda Store ld if exists
    const oldStore = document.getElementById("ld-tienda");
    if (oldStore) oldStore.remove();
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen pt-[120px] text-center px-6">
        <h1 className="text-2xl font-bold text-stone-900">Producto no encontrado</h1>
        <p className="text-stone-500 mt-2">El producto que buscas no existe.</p>
        <button onClick={() => navigate("/tienda")} className="mt-6 px-6 py-3 bg-[#008e38] text-white rounded-xl font-bold">Volver a Tienda</button>
      </div>
    );
  }

  const related = storeProducts.filter((p) => p.id !== product.id).slice(0, 3);

  const addToCart = () => {
    // simple: guarda en localStorage para que Tienda lo lea, o solo abre WhatsApp con qty
    if (product.type === "industrial") {
      const msg = `Hola, quiero solicitar cotización de ${product.name} ${product.subname} x${qty} (${product.subtitle || ""})`;
      window.open(`https://wa.me/573014641164?text=${encodeURIComponent(msg)}`, "_blank");
    } else {
      const msg = `Hola Agro Nova Foods, quiero comprar ${product.name} ${product.subname} x${qty} = ${formatPrice((product.price || 0) * qty)}`;
      window.open(`https://wa.me/573014641164?text=${encodeURIComponent(msg)}`, "_blank");
    }
  };

  return (
    <div className="bg-[#f8f7f5] min-h-screen pt-[88px]">
      {/* Breadcrumb */}
      <div className="bg-white border-y border-stone-200">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-stone-500">
          <Link to="/" className="hover:text-[#008e38]">Inicio</Link>
          <span>/</span>
          <Link to="/tienda" className="hover:text-[#008e38]">Tienda</Link>
          <span>/</span>
          <span className="text-stone-900 font-semibold">{product.name} {product.subname}</span>
        </div>
      </div>

      <section className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
        {/* Imagen grande */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white rounded-3xl border border-stone-200 p-6 md:p-10 flex items-center justify-center min-h-[420px] md:min-h-[520px] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-stone-50 to-white" />
          <img src={product.image} alt={`${product.name} ${product.subname}`} className="relative max-h-[420px] max-w-full object-contain drop-shadow-xl" />
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-[#008e38] text-white text-xs font-bold rounded-full">{product.category}</div>
          {product.price == null && <div className="absolute top-4 right-4 px-3 py-1.5 bg-stone-900 text-white text-xs font-bold rounded-full">Grado industrial</div>}
        </motion.div>

        {/* Info */}
        <div>
          <Link to="/tienda" className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-[#008e38] mb-4"><ArrowLeft className="w-4 h-4" /> Volver a Tienda</Link>
          <h1 className="font-display font-bold text-[#0a2e5c] text-2xl md:text-3xl lg:text-[32px] leading-tight">
            {product.name} <span className="text-[#008e38]">{product.subname}</span>
          </h1>
          {product.subtitle && <p className="text-stone-500 text-sm mt-1">{product.subtitle} · {product.weight}</p>}
          <div className="flex items-center gap-2 mt-3">
            <div className="flex items-center gap-1 text-amber-500"><Star className="w-4 h-4 fill-amber-500" /><span className="text-sm font-bold text-stone-700">4.9</span><span className="text-xs text-stone-400">(127 reseñas)</span></div>
            <span className="w-1 h-1 bg-stone-300 rounded-full" />
            <span className="text-xs text-green-700 font-bold flex items-center gap-1"><Check className="w-3.5 h-3.5" /> En stock</span>
          </div>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-3xl font-display font-bold text-[#008e38]">{formatPrice(product.price)}</span>
            {product.price && <span className="text-stone-400 text-sm line-through">{formatPrice(product.price * 1.18)}</span>}
            {product.price == null && <span className="text-stone-500 text-sm">Cotización según volumen</span>}
          </div>
          <p className="text-stone-600 text-sm md:text-base leading-relaxed mt-4">{product.desc} Ideal para hogar, panadería y uso industrial. 100% natural, sin gluten, con trazabilidad desde Arjona, Bolívar.</p>

          <div className="mt-6 p-4 bg-green-50 border border-green-100 rounded-xl flex items-center gap-3">
            <Truck className="w-5 h-5 text-[#008e38]" />
            <div>
              <p className="text-xs font-bold text-stone-800">Envíos a todo Colombia</p>
              <p className="text-xs text-stone-500">Entregas seguras 2-4 días</p>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            {product.price && (
              <div className="flex items-center gap-2 border border-stone-200 rounded-xl p-1 bg-white">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="w-9 h-9 rounded-lg bg-stone-100 hover:bg-stone-200 flex items-center justify-center">−</button>
                <span className="w-10 text-center font-bold">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="w-9 h-9 rounded-lg bg-stone-100 hover:bg-stone-200 flex items-center justify-center">+</button>
              </div>
            )}
            <button onClick={addToCart} className={`flex-1 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md ${product.type === "retail" ? "bg-[#008e38] hover:bg-[#007a30] text-white shadow-green-900/20" : "bg-white border-2 border-stone-300 text-stone-700 hover:bg-stone-50"}`}>
              {product.type === "retail" ? <><ShoppingCart className="w-4 h-4" /> Agregar al carrito · {formatPrice((product.price || 0) * qty)}</> : <><FileText className="w-4 h-4" /> Solicitar cotización</>}
            </button>
          </div>

          <ul className="mt-6 space-y-2 text-sm text-stone-600">
            <li className="flex gap-2"><ShieldCheck className="w-4 h-4 text-[#008e38] mt-0.5" /> 100% natural · Sin aditivos · Sin gluten</li>
            <li className="flex gap-2"><Leaf className="w-4 h-4 text-[#008e38] mt-0.5" /> Trazabilidad y procesos controlados en planta de Bolívar</li>
          </ul>

          <div className="mt-8 pt-6 border-t border-stone-200">
            <h3 className="font-bold text-stone-900 text-sm">Detalles</h3>
            <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
              <div className="bg-stone-50 border border-stone-100 rounded-xl p-3"><span className="text-stone-500">Peso</span><p className="font-bold text-stone-900">{product.weight}</p></div>
              <div className="bg-stone-50 border border-stone-100 rounded-xl p-3"><span className="text-stone-500">Categoría</span><p className="font-bold text-stone-900">{product.category}</p></div>
              <div className="bg-stone-50 border border-stone-100 rounded-xl p-3"><span className="text-stone-500">Origen</span><p className="font-bold text-stone-900">Arjona, Bolívar</p></div>
              <div className="bg-stone-50 border border-stone-100 rounded-xl p-3"><span className="text-stone-500">Envío</span><p className="font-bold text-stone-900">Nacional</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Relacionados */}
      <section className="py-12 bg-white border-t border-stone-100">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-[#0a2e5c] text-xl">Productos relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            {related.map((p) => (
              <Link key={p.id} to={`/tienda/${p.id}`} className="group bg-white border border-stone-200 rounded-2xl p-4 text-center hover:shadow-md hover:border-[#008e38]/20 transition-all">
                <div className="bg-stone-50 rounded-xl p-4 h-[160px] flex items-center justify-center overflow-hidden">
                  <img src={p.image} alt={p.name} className="max-h-full object-contain group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="font-bold text-stone-900 text-sm mt-3">{p.name} {p.subname}</h3>
                <p className="text-[#008e38] font-bold text-sm mt-1">{formatPrice(p.price)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
