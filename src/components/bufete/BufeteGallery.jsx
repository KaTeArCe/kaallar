import { motion } from "framer-motion";

import bufete1 from "../../assets/images/bufete-1.jpg";
import bufete2 from "../../assets/images/bufete-2.jpg";
import bufete3 from "../../assets/images/bufete-3.jpg";
import bufete4 from "../../assets/images/bufete-4.jpg";
import bufete5 from "../../assets/images/bufete-5.jpg";

const images = [
  { src: bufete1, title: "Recepción Ejecutiva", large: true },
  { src: bufete2, title: "Asesoría Personalizada", large: false },
  { src: bufete3, title: "Sala de Juntas", large: false },
  { src: bufete4, title: "Biblioteca Jurídica", large: true },
  { src: bufete5, title: "Atención Corporativa", large: false },
];

function BufeteGallery() {
  return (
    <section id="galeria" className="bg-white py-24 text-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
            Nuestras instalaciones
          </p>

          <h2 className="mb-5 text-5xl font-bold">
            Un entorno que transmite confianza.
          </h2>

          <p className="max-w-2xl text-lg leading-8 text-neutral-600">
            Espacios diseñados para brindar privacidad, profesionalismo y una
            atención jurídica de alto nivel en cada consulta.
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

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-90" />

              <div className="absolute bottom-0 p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-[#C8A45D]">
                  Bufete Atlas
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

export default BufeteGallery;