import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const offset = 80;
    const top =
      section.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#0A0A0A] text-white"
    >
      {/* Luces de fondo */}
      <div className="absolute left-[15%] top-20 h-96 w-96 rounded-full bg-[#C8A45D]/8 blur-[130px]" />
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#C8A45D]/5 to-transparent" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 pt-28 lg:grid-cols-2">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#C8A45D]">
            Desarrollo Web • Costa Rica
          </p>

          <h1 className="text-6xl leading-[1.02] md:text-7xl">
            <span className="font-light">Sitios web que</span>
            <br />

            <span
              className="font-serif italic text-[#E3C27A]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              impulsan
            </span>{" "}
            <span className="font-light">tu negocio.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-300">
            Diseñamos experiencias digitales premium para cafeterías, clínicas,
            bufetes, salones y empresas que desean una presencia elegante y que
            realmente convierta visitantes en clientes.
          </p>

          {/* Botones un poco más arriba */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("planes")}
              className="flex items-center gap-2 rounded-full bg-[#C8A45D] px-7 py-3 font-semibold text-black transition hover:scale-105"
            >
              Ver planes
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => scrollTo("portafolio")}
              className="rounded-full border border-[#C8A45D]/40 px-7 py-3 text-[#E7D4A4] transition hover:border-[#C8A45D]"
            >
              Nuestros trabajos
            </button>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 text-sm uppercase tracking-[0.25em] text-neutral-500">
            <span>Diseño</span>
            <span>Estrategia</span>
            <span>Resultados</span>
          </div>
        </motion.div>

        {/* Mockup (NO imagen) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block"
        >
          <div className="rounded-[34px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-2xl">
            <div className="mb-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="rounded-2xl bg-[#111111] p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="h-3 w-20 rounded bg-[#C8A45D]" />
                  <div className="mt-2 h-2 w-14 rounded bg-white/20" />
                </div>

                <div className="rounded-full bg-[#C8A45D] px-3 py-1 text-xs font-semibold text-black">
                  Online
                </div>
              </div>

              <div className="mb-8 h-40 rounded-2xl bg-gradient-to-br from-[#2A2A2A] via-[#3A3A3A] to-[#C8A45D]/40" />

              <div className="mb-3 h-4 w-3/4 rounded bg-white/80" />
              <div className="mb-6 h-4 w-1/2 rounded bg-white/20" />

              <div className="grid grid-cols-3 gap-3">
                <div className="h-20 rounded-xl bg-white/10" />
                <div className="h-20 rounded-xl bg-white/10" />
                <div className="h-20 rounded-xl bg-white/10" />
              </div>

              <button className="mt-6 rounded-full bg-[#C8A45D] px-5 py-2 text-sm font-semibold text-black">
                WhatsApp
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-7 text-sm uppercase tracking-[0.2em] text-neutral-400">
          <span>Cafeterías</span>
          <span>Clínicas</span>
          <span>Bufetes</span>
          <span>Salones</span>
          <span>Empresas</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;