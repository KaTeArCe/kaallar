import { motion } from "framer-motion";

import tienda1 from "../../assets/images/tienda-1.jpg";
import tienda2 from "../../assets/images/tienda-2.jpg";
import tienda3 from "../../assets/images/tienda-3.jpg";
import tienda4 from "../../assets/images/tienda-4.jpg";
import tienda5 from "../../assets/images/tienda-5.jpg";
import tienda6 from "../../assets/images/tienda-6.jpg";

const images = [
  { src: tienda1, title: "Colección Oversized", large: true },
  { src: tienda2, title: "Denim Premium", large: false },
  { src: tienda3, title: "Street Essentials", large: false },
  { src: tienda4, title: "Nueva Temporada", large: true },
  { src: tienda5, title: "Accesorios Urbanos", large: false },
  { src: tienda6, title: "Estilo Minimal", large: false },
];

function TiendaGallery() {
  return (
    <section id="galeria" className="bg-white py-24 text-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
            Galería
          </p>

          <h2 className="mb-5 text-5xl font-bold">
            Moda que inspira confianza.
          </h2>

          <p className="max-w-2xl text-lg leading-8 text-neutral-600">
            Descubrí prendas diseñadas para combinar elegancia, comodidad y un
            estilo urbano contemporáneo en cada colección.
          </p>
        </div>

        <div className="grid auto-rows-[220px] gap-5 md:grid-cols-2">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className={`group relative overflow-hidden rounded-[30px] ${
                image.large ? "row-span-2" : "row-span-1"
              }`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />

              <div className="absolute bottom-0 p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-[#C8A45D]">
                  NOVA Studio
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TiendaGallery;