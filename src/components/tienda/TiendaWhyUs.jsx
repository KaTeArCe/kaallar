import {
  Shirt,
  Gem,
  Truck,
  HeartHandshake,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shirt,
    title: "Moda en tendencia",
    text: "Colecciones cuidadosamente seleccionadas con estilos modernos y elegantes para cada temporada.",
  },
  {
    icon: Gem,
    title: "Calidad Premium",
    text: "Prendas confeccionadas con materiales de excelente calidad y acabados que marcan la diferencia.",
  },
  {
    icon: Truck,
    title: "Envíos a todo el país",
    text: "Realizamos envíos seguros y rápidos para que recibás tu pedido donde estés en Costa Rica.",
  },
  {
    icon: HeartHandshake,
    title: "Atención personalizada",
    text: "Te asesoramos para encontrar el look perfecto y brindarte una experiencia de compra cercana.",
  },
];

function TiendaWhyUs() {
  return (
    <section className="bg-[#F7F4EE] py-24 text-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
            ¿Por qué elegir Flamingo?
          </p>

          <h2 className="mb-4 text-5xl font-bold">
            Moda pensada para destacar
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-neutral-600">
            En Flamingo encontrarás prendas exclusivas, atención cercana y una
            experiencia de compra diseñada para hacerte sentir única.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="rounded-[28px] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C8A45D]/10 text-[#C8A45D]">
                  <Icon size={28} />
                </div>

                <h3 className="mb-3 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="leading-7 text-neutral-600">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TiendaWhyUs;