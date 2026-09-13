import { motion } from "framer-motion";

import salon1 from "../../assets/images/salon-1.jpg";
import salon2 from "../../assets/images/salon-2.jpg";
import salon3 from "../../assets/images/salon-3.jpg";
import salon4 from "../../assets/images/salon-4.jpg";
import salon5 from "../../assets/images/salon-5.jpg";
import salon6 from "../../assets/images/salon-6.jpg";

const images = [
  { src: salon1, title: "Corte Premium", large: true },
  { src: salon2, title: "Estilo personalizado", large: false },
  { src: salon3, title: "Herramientas profesionales", large: false },
  { src: salon4, title: "Experiencia de barbería", large: true },
  { src: salon5, title: "Ambiente exclusivo", large: false },
  { src: salon6, title: "Detalles de lujo", large: false },
];

function SalonGallery() {
  return (
    <section id="galeria" className="bg-white py-24 text-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
            Galería
          </p>

          <h2 className="mb-5 text-5xl font-bold">
            Donde el estilo cobra vida.
          </h2>

          <p className="max-w-2xl text-lg leading-8 text-neutral-600">
            Un recorrido por nuestro espacio, la precisión de cada corte y el
            ambiente elegante que distingue a Black Crown Barber Studio.
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
                  Black Crown
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

export default SalonGallery;