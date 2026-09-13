import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-semibold tracking-tight text-white"
        >
          kaallar
        </Link>

        {/* Menú escritorio */}
        <nav className="hidden items-center gap-8 text-sm text-neutral-300 md:flex">
          {isHome ? (
            <>
              <a href="#servicios" className="transition hover:text-[#C8A45D]">
                Servicios
              </a>

              <a href="#planes" className="transition hover:text-[#C8A45D]">
                Planes
              </a>

              <a href="#garantia" className="transition hover:text-[#C8A45D]">
                Garantía
              </a>

              <a href="#contacto" className="transition hover:text-[#C8A45D]">
                Contacto
              </a>
            </>
          ) : (
            <Link to="/" className="transition hover:text-[#C8A45D]">
              ← Volver al inicio
            </Link>
          )}
        </nav>

        {/* Botón móvil */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-full border border-white/10 p-2 text-white md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Menú móvil */}
      {open && isHome && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5 text-neutral-200">
            <a href="#servicios" onClick={closeMenu}>
              Servicios
            </a>

            <a href="#planes" onClick={closeMenu}>
              Planes
            </a>

            <a href="#garantia" onClick={closeMenu}>
              Garantía
            </a>

            <a href="#contacto" onClick={closeMenu}>
              Contacto
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;