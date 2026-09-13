import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "María Rodríguez",
    company: "Café Luna",
    text: "El sitio transmite exactamente la identidad de nuestro negocio. Nuestros clientes ahora encuentran el menú y el WhatsApp en segundos.",
  },
  {
    id: 2,
    name: "Daniel Solano",
    company: "Studio Noir",
    text: "El diseño se siente moderno, rápido y profesional. La experiencia móvil superó por mucho la página que teníamos antes.",
  },
  {
    id: 3,
    name: "Andrea Jiménez",
    company: "Nova Dental",
    text: "La comunicación con nuestros pacientes mejoró muchísimo. La web inspira confianza desde el primer vistazo.",
  },
];

function Testimonials() {
  return (
    <section className="bg-[#0D0D0D] py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
            Testimonios
          </p>

          <h2 className="mb-5 text-4xl font-bold md:text-6xl">
            La confianza también se diseña.
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-neutral-400">
            Cada proyecto de kaallar está pensado para convertir visitantes en
            clientes y reflejar el valor de cada marca.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.article
              key={review.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.45 }}
              className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-[#C8A45D] text-[#C8A45D]"
                  />
                ))}
              </div>

              <p className="mb-8 leading-8 text-neutral-300">
                “{review.text}”
              </p>

              <div className="border-t border-white/10 pt-5">
                <h4 className="font-semibold">{review.name}</h4>
                <p className="text-sm text-[#C8A45D]">{review.company}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;