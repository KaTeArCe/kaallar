import { motion } from "framer-motion";

import cafe1 from "../../assets/images/cafe-1.jpg";
import cafe2 from "../../assets/images/cafe-2.jpg";
import cafe3 from "../../assets/images/cafe-3.jpg";
import cafe4 from "../../assets/images/cafe-4.jpg";
import cafe5 from "../../assets/images/cafe-5.jpg";
import cafe6 from "../../assets/images/cafe-6.jpg";

const images = [
  { src: cafe1, title: "Latte Signature", large: true },
  { src: cafe2, title: "Repostería artesanal", large: false },
  { src: cafe3, title: "Nuestro espacio", large: false },
  { src: cafe4, title: "Espresso de especialidad", large: true },
  { src: cafe5, title: "Terraza", large: false },
  { src: cafe6, title: "Granos seleccionados", large: false },
];

function CafeGallery() {
  return (
    <section id="galeria" className="bg-white py-24 text-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
            Galería
          </p>

          <h2 className="mb-5 text-5xl font-bold">
            Un espacio para disfrutar.
          </h2>

          <p className="max-w-2xl text-lg leading-8 text-neutral-600">
            Cada detalle de Café Luna está pensado para ofrecer una experiencia
            cálida, moderna y memorable.
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
                  Café Luna
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

export default CafeGallery;