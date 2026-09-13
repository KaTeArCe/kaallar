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

  const scrollToTop = (e) => {
    if (!isHome) return;

    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    closeMenu();
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/75 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          to="/"
          onClick={scrollToTop}
          className="transition hover:opacity-80"
        >
          <h1
            className="text-4xl font-normal italic text-white md:text-5xl"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            kaallar
          </h1>
        </Link>

        {/* Menú escritorio */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#servicios"
            className="text-base font-semibold tracking-wide text-neutral-300 transition hover:text-[#C8A45D]"
          >
            Servicios
          </a>

          <a
            href="#planes"
            className="text-base font-semibold tracking-wide text-neutral-300 transition hover:text-[#C8A45D]"
          >
            Planes
          </a>

          <a
            href="#garantia"
            className="text-base font-semibold tracking-wide text-neutral-300 transition hover:text-[#C8A45D]"
          >
            Garantía
          </a>

          <a
            href="#contacto"
            className="text-base font-semibold tracking-wide text-neutral-300 transition hover:text-[#C8A45D]"
          >
            Contacto
          </a>
        </nav>

        {/* Botón móvil */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-full border border-white/10 p-2 text-white transition hover:border-[#C8A45D] md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-6 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-5">
            <a
              href="#servicios"
              onClick={closeMenu}
              className="text-base font-semibold text-neutral-200"
            >
              Servicios
            </a>

            <a
              href="#planes"
              onClick={closeMenu}
              className="text-base font-semibold text-neutral-200"
            >
              Planes
            </a>

            <a
              href="#garantia"
              onClick={closeMenu}
              className="text-base font-semibold text-neutral-200"
            >
              Garantía
            </a>

            <a
              href="#contacto"
              onClick={closeMenu}
              className="text-base font-semibold text-neutral-200"
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;