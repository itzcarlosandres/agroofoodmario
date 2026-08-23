import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Home, Package, ShoppingBag, Wind, Users, Mail, MessageCircle, ChevronDown } from "lucide-react";

const waNumbers = [
  { label: "Venta 1", number: "573245172591", display: "+57 324 517 2591" },
  { label: "Ventas 2", number: "573014641164", display: "+57 301 464 1164" },
  { label: "Atención al cliente", number: "573185234989", display: "+57 318 523 4989" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [waOpen, setWaOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    const go = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(go, 400);
    } else go();
  };

  const isLightPage = ["/tienda", "/contacto", "/servicios", "/sobre-nosotros", "/nosotros"].some((p) => location.pathname === p || location.pathname.startsWith(p + "/"));
  const showSolid = scrolled || isLightPage;
  const navColor = showSolid ? "text-stone-600" : "text-white/90";
  const activeClass = (path) =>
    location.pathname === path
      ? showSolid ? "text-[#008e38]" : "text-white font-semibold"
      : showSolid ? "hover:text-[#008e38]" : "hover:text-green-400";

  return (
    <>
      <nav className={`w-full z-50 fixed top-0 transition-all duration-300 ${showSolid ? "bg-white/95 border-b border-stone-200/50 backdrop-blur-md shadow-sm py-2" : "bg-transparent border-b border-transparent py-4"}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center group">
              <img src={showSolid ? "/images/logo.png" : "/images/logo_white.png"} alt="Agro Nova Foods" className="h-10 sm:h-12 w-auto object-contain transition-all duration-300" />
            </Link>

            <div className={`hidden md:flex items-center gap-6 font-medium text-[14px] transition-colors ${navColor}`}>
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={`relative pb-1 flex items-center gap-1.5 transition-colors group ${activeClass("/")}`}>
                <Home className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" /> Inicio<span className={`absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-300 ${location.pathname === "/" ? "w-full bg-[#008e38]" : "w-0 group-hover:w-full bg-[#008e38]"}`}></span>
              </Link>
              <button onClick={() => scrollTo("productos")} className={`relative pb-1 flex items-center gap-1.5 transition-colors group ${showSolid ? "hover:text-[#008e38]" : "hover:text-green-400"}`}>
                <Package className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" /> Productos<span className="absolute bottom-0 left-0 h-[2px] rounded-full w-0 group-hover:w-full bg-[#008e38] transition-all duration-300"></span>
              </button>
              <Link to="/tienda" className={`relative pb-1 flex items-center gap-1.5 transition-colors group ${activeClass("/tienda")}`}>
                <ShoppingBag className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" /> Tienda
                <span className={`absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-300 ${location.pathname.startsWith("/tienda") ? "w-full bg-[#008e38]" : "w-0 group-hover:w-full bg-[#008e38]"}`}></span>
              </Link>
              <Link to="/servicios" className={`relative pb-1 flex items-center gap-1.5 transition-colors group ${activeClass("/servicios")}`}>
                <Wind className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" /> Servicio de Secado<span className={`absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-300 ${location.pathname === "/servicios" ? "w-full bg-[#008e38]" : "w-0 group-hover:w-full bg-[#008e38]"}`}></span>
              </Link>
              <Link to="/sobre-nosotros" className={`relative pb-1 flex items-center gap-1.5 transition-colors group ${activeClass("/sobre-nosotros")}`}>
                <Users className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" /> Nosotros<span className={`absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-300 ${location.pathname === "/sobre-nosotros" ? "w-full bg-[#008e38]" : "w-0 group-hover:w-full bg-[#008e38]"}`}></span>
              </Link>
              <Link to="/contacto" className={`relative pb-1 flex items-center gap-1.5 transition-colors group ${activeClass("/contacto")}`}>
                <Mail className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" /> Contacto<span className={`absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-300 ${location.pathname === "/contacto" ? "w-full bg-[#008e38]" : "w-0 group-hover:w-full bg-[#008e38]"}`}></span>
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden md:block relative" onMouseEnter={() => setWaOpen(true)} onMouseLeave={() => setWaOpen(false)}>
                <button onClick={() => setWaOpen(!waOpen)} className={`flex items-center gap-2 px-5 py-2.5 text-[14px] font-semibold text-white rounded-lg transition-all shadow-sm ${showSolid ? "bg-[#008e38] hover:bg-[#007a30]" : "bg-[#008e38] hover:bg-[#007a30]"}`}>
                  <MessageCircle className="w-4 h-4" /> Cotizar por WhatsApp <ChevronDown className={`w-3.5 h-3.5 transition-transform ${waOpen ? "rotate-180" : ""}`} />
                </button>
                {waOpen && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-xl border border-stone-200 overflow-hidden z-50">
                    <div className="px-3 py-2 bg-stone-50 border-b border-stone-100">
                      <p className="text-[10px] font-bold tracking-widest uppercase text-stone-500">Elige un asesor</p>
                    </div>
                    {waNumbers.map((wa) => (
                      <a key={wa.number} href={`https://wa.me/${wa.number}`} target="_blank" rel="noopener noreferrer" onClick={() => setWaOpen(false)} className="flex items-center justify-between px-4 py-3 hover:bg-green-50 border-b last:border-0 border-stone-100 transition-colors group">
                        <div>
                          <p className="text-xs font-bold text-stone-900 group-hover:text-[#008e38]">{wa.label}</p>
                          <p className="text-[11px] text-stone-500">{wa.display}</p>
                        </div>
                        <span className="w-7 h-7 rounded-full bg-[#25D366] group-hover:bg-[#1da851] flex items-center justify-center text-white text-xs transition-colors">↗</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <button onClick={() => setOpen(!open)} className={`md:hidden w-10 h-10 rounded-lg flex items-center justify-center border ${showSolid ? "border-stone-200 text-stone-700" : "border-white/20 text-white"}`}>
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {open && (
          <div className="md:hidden bg-white border-t border-stone-200 shadow-lg">
            <div className="px-4 py-6 flex flex-col gap-4">
              <Link to="/" onClick={() => setOpen(false)} className="font-medium text-stone-700 flex items-center gap-2"><Home className="w-4 h-4 text-[#008e38]" /> Inicio</Link>
              <button onClick={() => scrollTo("productos")} className="text-left font-medium text-stone-700 flex items-center gap-2"><Package className="w-4 h-4 text-[#008e38]" /> Productos</button>
              <Link to="/tienda" onClick={() => setOpen(false)} className="font-medium text-stone-700 flex items-center gap-2"><ShoppingBag className="w-4 h-4 text-[#008e38]" /> Tienda</Link>
              <Link to="/servicios" onClick={() => setOpen(false)} className="font-medium text-stone-700 flex items-center gap-2"><Wind className="w-4 h-4 text-[#008e38]" /> Servicio de Secado</Link>
              <Link to="/sobre-nosotros" onClick={() => setOpen(false)} className="font-medium text-stone-700 flex items-center gap-2"><Users className="w-4 h-4 text-[#008e38]" /> Nosotros</Link>
              <Link to="/contacto" onClick={() => setOpen(false)} className="font-medium text-stone-700 flex items-center gap-2"><Mail className="w-4 h-4 text-[#008e38]" /> Contacto</Link>
              <div className="mt-2 space-y-2">
                <p className="text-[10px] font-bold tracking-widest uppercase text-stone-400">Cotizar por WhatsApp</p>
                {waNumbers.map((wa) => (
                  <a key={wa.number} href={`https://wa.me/${wa.number}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl hover:bg-green-50 hover:border-green-200 transition-colors">
                    <div>
                      <p className="text-sm font-bold text-stone-900">{wa.label}</p>
                      <p className="text-xs text-stone-500">{wa.display}</p>
                    </div>
                    <span className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
