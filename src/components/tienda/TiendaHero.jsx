import { MapPin, Star, ChevronDown } from "lucide-react";
import tiendaImage from "../../assets/images/tienda.jpg";

function TiendaHero() {
  const goTo = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    const y =
      section.getBoundingClientRect().top + window.scrollY - 80;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* Fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${tiendaImage})` }}
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-20">
        <div className="max-w-2xl">
          <div className="mb-6 flex items-center gap-3">
            <Star
              className="fill-[#C8A45D] text-[#C8A45D]"
              size={18}
            />

            <p className="text-sm uppercase tracking-[0.25em] text-[#C8A45D]">
              Moda Urbana Premium
            </p>
          </div>

          <h1 className="mb-6 text-6xl font-bold leading-tight">
            NOVA Studio
          </h1>

          <p className="mb-8 text-lg leading-8 text-neutral-200">
            Descubrí prendas de alta calidad con un estilo contemporáneo,
            minimalista y diseñado para destacar en cualquier ocasión.
          </p>

          <div className="mb-10 flex items-center gap-2 text-neutral-300">
            <MapPin size={18} />
            San José, Costa Rica
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => goTo("productos")}
              className="rounded-full bg-[#C8A45D] px-7 py-3 font-semibold text-black transition hover:scale-105"
            >
              Ver colección
            </button>

            <button
              onClick={() => goTo("horarios")}
              className="rounded-full border border-white/20 px-7 py-3 transition hover:border-[#C8A45D]"
            >
              Contactar
            </button>
          </div>
        </div>
      </div>

      {/* Flecha */}
      <button
        onClick={() => goTo("productos")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 transition hover:text-white"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-[0.3em]">
            Explorar
          </span>

          <ChevronDown size={22} />
        </div>
      </button>
    </section>
  );
}

export default TiendaHero;