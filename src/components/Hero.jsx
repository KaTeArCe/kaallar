import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0D0D0D]">

      <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C8A45D]/10 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pt-24 lg:grid-cols-2">

        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#C8A45D]">
            desarrollo web • costa rica
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Sitios web que inspiran confianza y generan clientes.
          </h1>

          <p className="mb-10 max-w-xl text-lg leading-8 text-neutral-300">
            Diseño web premium para cafeterías, clínicas, bufetes, salones y negocios que
            quieren crecer con una presencia digital profesional.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-full bg-[#C8A45D] px-7 py-3 font-semibold text-black transition hover:scale-105">
              Ver servicios
              <ArrowRight size={18} />
            </button>

            <button className="rounded-full border border-white/15 px-7 py-3 text-white transition hover:border-[#C8A45D]">
              Cotizar proyecto
            </button>
          </div>
        </div>

        <div className="relative hidden lg:block">

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-2xl">

            <div className="mb-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="rounded-2xl bg-[#111111] p-6">

              <div className="mb-8 h-40 rounded-xl bg-gradient-to-br from-[#2A2A2A] to-[#C8A45D]/30" />

              <div className="mb-3 h-4 w-3/4 rounded bg-white/80" />
              <div className="mb-6 h-4 w-1/2 rounded bg-white/20" />

              <div className="grid grid-cols-3 gap-3">
                <div className="h-20 rounded-lg bg-white/10" />
                <div className="h-20 rounded-lg bg-white/10" />
                <div className="h-20 rounded-lg bg-white/10" />
              </div>

              <button className="mt-6 rounded-full bg-[#C8A45D] px-5 py-2 text-sm font-semibold text-black">
                WhatsApp
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;