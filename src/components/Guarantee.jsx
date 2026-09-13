
import { CheckCircle2 } from "lucide-react";

const items = [
  "Diseño 100% responsive",
  "Optimización de velocidad",
  "Diseño personalizado",
  "Integración con WhatsApp",
  "Redes sociales",
  "Configuración completa",
  "Publicación del sitio",
  "7 días de soporte gratuito",
  "Corrección de errores",
  "Capacitación básica (30 min)",
];

function Guarantee() {
  return (
    <section id="garantia" className="bg-[#0D0D0D] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
          Garantía kaallar
        </p>

        <h2 className="mb-6 text-5xl font-bold">
          Todo proyecto incluye mucho más que una página web.
        </h2>

        <p className="mb-14 max-w-3xl text-lg leading-8 text-neutral-300">
          Nuestro objetivo es entregar un sitio listo para representar tu negocio
          desde el primer día, con soporte y configuración completa.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <CheckCircle2 className="text-[#C8A45D]" size={24} />
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[28px] border border-[#C8A45D]/30 bg-[#C8A45D]/5 p-8">
          <p className="text-lg italic leading-8 text-neutral-200">
            “No entregamos plantillas. Cada proyecto se adapta completamente a
            la identidad de tu empresa.”
          </p>

          <p className="mt-4 text-[#C8A45D]">— kaallar</p>
        </div>
      </div>
    </section>
  );
}

export default Guarantee;