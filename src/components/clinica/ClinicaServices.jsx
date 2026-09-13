import {
  Sparkles,
  Syringe,
  ScanFace,
  Waves,
  Leaf,
  HeartPulse,
} from "lucide-react";

function ClinicaServices() {
  const services = [
    {
      name: "Botox",
      desc: "Suaviza líneas de expresión con resultados naturales.",
      price: "Desde ₡95 000",
      icon: Syringe,
    },
    {
      name: "Ácido Hialurónico",
      desc: "Armonización facial y restauración de volumen.",
      price: "Desde ₡160 000",
      icon: Sparkles,
    },
    {
      name: "Limpieza Facial Premium",
      desc: "Hidratación profunda y renovación de la piel.",
      price: "Desde ₡35 000",
      icon: Leaf,
    },
    {
      name: "Peeling Químico",
      desc: "Mejora textura, manchas y luminosidad del rostro.",
      price: "Desde ₡55 000",
      icon: Waves,
    },
    {
      name: "Evaluación Dermatológica",
      desc: "Diagnóstico profesional y plan de tratamiento personalizado.",
      price: "Desde ₡40 000",
      icon: ScanFace,
    },
    {
      name: "Rejuvenecimiento Facial",
      desc: "Protocolos combinados para una apariencia fresca y natural.",
      price: "Consultar",
      icon: HeartPulse,
    },
  ];

  return (
    <section id="servicios" className="bg-[#0A0A0A] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#C8A45D]">
            Tratamientos
          </p>

          <h2 className="mb-4 text-5xl font-bold">
            Medicina estética con resultados naturales
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-neutral-400">
            Descubre algunos de los procedimientos más solicitados de Clínica Aurora,
            realizados por profesionales con tecnología de última generación.
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

                <div className="mb-2 flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold">{service.name}</h3>

                  <span className="text-right font-bold text-[#C8A45D]">
                    {service.price}
                  </span>
                </div>

                <p className="leading-7 text-neutral-400">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ClinicaServices;