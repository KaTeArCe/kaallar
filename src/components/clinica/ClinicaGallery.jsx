import { motion } from "framer-motion";

import clinica1 from "../../assets/images/clinica-1.jpg";
import clinica2 from "../../assets/images/clinica-2.jpg";
import clinica3 from "../../assets/images/clinica-3.jpg";
import clinica4 from "../../assets/images/clinica-4.jpg";
import clinica5 from "../../assets/images/clinica-5.jpg";
import clinica6 from "../../assets/images/clinica-6.jpg";

const images = [
  { src: clinica1, title: "Recepción premium", large: true },
  { src: clinica2, title: "Consultorio dermatológico", large: false },
  { src: clinica3, title: "Tecnología estética", large: false },
  { src: clinica4, title: "Tratamientos faciales", large: true },
  { src: clinica5, title: "Área de valoración", large: false },
  { src: clinica6, title: "Espacios diseñados para tu bienestar", large: false },
];

function ClinicaGallery() {
  return (
    <section id="galeria" className="bg-white py-24 text-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
            Galería
          </p>

          <h2 className="mb-5 text-5xl font-bold">
            Un espacio pensado para tu bienestar.
          </h2>

          <p className="max-w-2xl text-lg leading-8 text-neutral-600">
            Clínica Aurora ofrece instalaciones modernas, tecnología de última
            generación y un ambiente elegante para que cada visita sea cómoda y segura.
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
                  Clínica Aurora
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

export default ClinicaGallery;