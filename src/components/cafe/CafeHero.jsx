import { MapPin, Star, ChevronDown } from "lucide-react";
import cafeImage from "../../assets/images/cafe.jpg";

function CafeHero() {
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
        style={{ backgroundImage: `url(${cafeImage})` }}
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-20">
        <div className="max-w-2xl">
          <div className="mb-6 flex items-center gap-3">
            <Star
              className="fill-[#C8A45D] text-[#C8A45D]"
              size={18}
            />

            <p className="text-sm uppercase tracking-[0.25em] text-[#C8A45D]">
              Cafetería de Especialidad
            </p>
          </div>

          <h1 className="mb-6 text-6xl font-bold leading-tight">
            Café Luna
          </h1>

          <p className="mb-8 text-lg leading-8 text-neutral-200">
            Café artesanal, repostería fresca y un espacio diseñado para disfrutar
            cada taza.
          </p>

          <div className="mb-10 flex items-center gap-2 text-neutral-300">
            <MapPin size={18} />
            Turrialba, Costa Rica
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => goTo("menu")}
              className="rounded-full bg-[#C8A45D] px-7 py-3 font-semibold text-black transition hover:scale-105"
            >
              Ver menú
            </button>

            <button
              onClick={() => goTo("horarios")}
              className="rounded-full border border-white/20 px-7 py-3 transition hover:border-[#C8A45D]"
            >
              Cómo llegar
            </button>
          </div>
        </div>
      </div>

      {/* Flecha */}
      <button
        onClick={() => goTo("menu")}
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

export default CafeHero;