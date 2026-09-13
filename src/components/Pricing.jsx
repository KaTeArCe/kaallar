import { useState } from "react";
import { Check, Sparkles } from "lucide-react";

const plans = {
  launch: {
    name: "Launch",
    badge: "Ideal para comenzar",
    price: "Desde ₡80.000",
    description:
      "Una web profesional para emprendedores y negocios que necesitan presencia digital rápida y elegante.",
    features: [
      "Landing page personalizada",
      "Subdominio gratuito",
      "Hosting incluido",
      "Botón de WhatsApp",
      "Google Maps",
      "Soporte por 7 días",
    ],
  },

  growth: {
    name: "Growth",
    badge: "Más recomendado",
    price: "Desde ₡140.000",
    description:
      "La opción más completa para empresas que buscan posicionarse y captar más clientes.",
    features: [
      "Sitio multipágina",
      "Dominio personalizado",
      "Hosting configurado",
      "SEO básico incluido",
      "Formulario de contacto",
      "Soporte por 30 días",
    ],
  },
};

function Pricing() {
  const [active, setActive] = useState("growth");
  const plan = plans[active];

  return (
    <section id="planes" className="bg-[#111111] py-28 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
            Planes
          </p>

          <h2 className="mb-5 text-4xl font-bold md:text-6xl">
            Elegí el plan ideal para tu negocio.
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-neutral-400">
            Todos los proyectos incluyen diseño responsive, alta velocidad y una
            experiencia enfocada en convertir visitantes en clientes.
          </p>
        </div>

        {/* Selector */}
        <div className="mb-12 flex justify-center">
          <div className="flex rounded-full border border-white/10 bg-black p-1">
            <button
              onClick={() => setActive("launch")}
              className={`rounded-full px-7 py-3 font-medium transition ${
                active === "launch"
                  ? "bg-[#C8A45D] text-black"
                  : "text-neutral-300 hover:text-white"
              }`}
            >
              Launch
            </button>

            <button
              onClick={() => setActive("growth")}
              className={`rounded-full px-7 py-3 font-medium transition ${
                active === "growth"
                  ? "bg-[#C8A45D] text-black"
                  : "text-neutral-300 hover:text-white"
              }`}
            >
              Growth
            </button>
          </div>
        </div>

        {/* Tarjeta */}
        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl">
          <div className="grid lg:grid-cols-2">
            {/* Lado izquierdo */}
            <div className="p-10 lg:p-12">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C8A45D]/30 bg-[#C8A45D]/10 px-4 py-2 text-sm text-[#C8A45D]">
                <Sparkles size={14} />
                {plan.badge}
              </div>

              <h3 className="mb-3 text-4xl font-bold">{plan.name}</h3>

              <p className="mb-8 text-3xl font-semibold text-[#C8A45D]">
                {plan.price}
              </p>

              <p className="leading-8 text-neutral-300">{plan.description}</p>
            </div>

            {/* Lado derecho */}
            <div className="border-t border-white/10 bg-black/20 p-10 lg:border-l lg:border-t-0 lg:p-12">
              <h4 className="mb-6 text-lg font-semibold">
                Lo que incluye
              </h4>

              <div className="space-y-4">
                {plan.features.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-full bg-[#C8A45D]/15 p-1">
                      <Check size={14} className="text-[#C8A45D]" />
                    </div>

                    <span className="text-neutral-200">{item}</span>
                  </div>
                ))}
              </div>

              <button className="mt-10 w-full rounded-full bg-[#C8A45D] px-6 py-3 font-semibold text-black transition hover:scale-[1.02]">
                Solicitar este plan
              </button>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-neutral-500">
          * Los precios pueden variar según la cantidad de secciones y funciones
          personalizadas del proyecto.
        </p>
      </div>
    </section>
  );
}

export default Pricing;