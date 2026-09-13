import {
  Scissors,
  Sparkles,
  Palette,
  Crown,
} from "lucide-react";

function SalonServices() {
  const services = [
    {
      name: "Corte Premium",
      desc: "Corte personalizado con asesoría de estilo.",
      price: "₡8 000",
      icon: Scissors,
    },
    {
      name: "Barba & Perfilado",
      desc: "Diseño, perfilado y acabado profesional.",
      price: "₡5 500",
      icon: Sparkles,
    },
    {
      name: "Coloración",
      desc: "Tintes, decoloraciones y cambios de imagen.",
      price: "Desde ₡18 000",
      icon: Palette,
    },
    {
      name: "Rizos & Hidratación",
      desc: "Tratamientos especializados para cabello rizado.",
      price: "₡12 000",
      icon: Sparkles,
    },
    {
      name: "Corte + Barba",
      desc: "Nuestro servicio más solicitado con acabado premium.",
      price: "₡11 500",
      icon: Crown,
    },
    {
      name: "Tratamiento Capilar",
      desc: "Nutrición profunda y reparación del cabello.",
      price: "₡10 000",
      icon: Sparkles,
    },
  ];

  return (
    <section id="servicios" className="bg-[#0A0A0A] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#C8A45D]">
            Nuestros servicios
          </p>

          <h2 className="mb-4 text-5xl font-bold">
            Estilo con calidad profesional
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-neutral-400">
            Cortes, barba, color y tratamientos realizados por estilistas con
            experiencia para potenciar tu imagen.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.name}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-[#C8A45D]/40 hover:bg-white/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8A45D]/10 text-[#C8A45D]">
                  <Icon size={24} />
                </div>

                <div className="mb-2 flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold">
                    {service.name}
                  </h3>

                  <span className="text-right font-bold text-[#C8A45D]">
                    {service.price}
                  </span>
                </div>

                <p className="leading-7 text-neutral-400">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SalonServices;