import { Star } from "lucide-react";

const reviews = [
  {
    name: "Fernanda Chaves",
    role: "Cliente frecuente",
    text: "El mejor lugar para cuidar mi cabello rizado. Siempre salgo feliz con el resultado y la atención es increíble.",
  },
  {
    name: "Jorge Ramírez",
    role: "Cliente",
    text: "Excelente barbería. El corte y el perfilado de barba quedaron impecables, además el ambiente es muy profesional.",
  },
  {
    name: "Valentina Solís",
    role: "Nueva clienta",
    text: "Me hicieron una coloración espectacular y cuidaron muchísimo la salud de mi cabello. Totalmente recomendado.",
  },
];

function SalonTestimonials() {
  return (
    <section className="bg-[#111111] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
            Opiniones
          </p>

          <h2 className="mb-4 text-5xl font-bold">
            Lo que dicen nuestros clientes
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-neutral-400">
            Cada visita es una experiencia personalizada enfocada en resaltar tu
            estilo y hacerte sentir con confianza.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-[28px] border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-1 hover:border-[#C8A45D]/30"
            >
              <div className="mb-5 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-[#C8A45D] text-[#C8A45D]"
                  />
                ))}
              </div>

              <p className="mb-8 leading-7 text-neutral-300">
                “{review.text}”
              </p>

              <div>
                <h3 className="font-semibold">{review.name}</h3>
                <p className="text-sm text-neutral-500">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SalonTestimonials;