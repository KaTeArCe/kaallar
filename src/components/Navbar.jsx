import { Menu } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <a href="/" className="text-2xl font-semibold tracking-tight text-white">
          kaallar
        </a>

        <nav className="hidden gap-8 text-sm text-neutral-300 md:flex">
          <a href="#servicios" className="hover:text-[#C8A45D] transition">
            Servicios
          </a>

          <a href="#planes" className="hover:text-[#C8A45D] transition">
            Planes
          </a>

          <a href="#garantia" className="hover:text-[#C8A45D] transition">
            Garantía
          </a>

          <a href="#contacto" className="hover:text-[#C8A45D] transition">
            Contacto
          </a>
        </nav>

        <button className="rounded-full border border-white/10 p-2 text-white md:hidden">
          <Menu size={18} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;