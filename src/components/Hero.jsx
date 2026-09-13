import { ArrowRight, Mouse } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  const scrollTo = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    const offset = 80;
    const top =
      section.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0D0D0D]"
    >
      {/* Luz de fondo */}
      <div className="absolute left-1/2 top-36 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#C8A45D]/10 blur-[150px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pt-24 lg:grid-cols-2">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#C8A45D]">
            desarrollo web • costa rica
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Sitios web que inspiran confianza y generan clientes.
          </h1>

          <p className="mb-10 max-w-xl text-lg leading-8 text-neutral-300">
            Diseñamos experiencias digitales premium para cafeterías, clínicas,
            bufetes, salones y empresas que buscan una presencia profesional.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("servicios")}
              className="flex items-center gap-2 rounded-full bg-[#C8A45D] px-7 py-3 font-semibold text-black transition duration-300 hover:scale-105"
            >
              Ver demostraciones
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => scrollTo("contacto")}
              className="rounded-full border border-white/15 px-7 py-3 text-white transition duration-300 hover:border-[#C8A45D] hover:text-[#C8A45D]"
            >
              Cotizar proyecto
            </button>
          </div>
        </motion.div>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative hidden lg:block"
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

      {/* Indicador de scroll */}
      <button
        onClick={() => scrollTo("servicios")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-400 transition hover:text-[#C8A45D]"
      >
        <div className="flex flex-col items-center gap-2">
          <Mouse size={22} />
          <span className="text-xs uppercase tracking-[0.3em]">
            Explorar
          </span>
        </div>
      </button>
    </section>
  );
}

export default Hero;