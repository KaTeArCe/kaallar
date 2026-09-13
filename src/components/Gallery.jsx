import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import cafe from "../assets/images/cafe.jpg";
import clinica from "../assets/images/clinica.jpg";
import bufete from "../assets/images/bufete.jpg";
import salon from "../assets/images/salon.jpg";
import tienda from "../assets/images/tienda.jpg";

const projects = [
  {
    title: "Café Luna",
    category: "Cafetería Premium",
    image: cafe,
    path: "/cafe",
    available: true,
  },
  {
    title: "Clínica Dulce Nombre",
    category: "Clínica Dental",
    image: clinica,
    path: "/clinica",
    available: true,
  },
  {
    title: "Bufete Atlas",
    category: "Bufete Jurídico",
    image: bufete,
    path: "/bufete",
    available: true,
  },
  {
    title: "Studio Noir",
    category: "Salón & Barbería",
    image: salon,
    path: "/salon",
    available: true,
  },
  {
    title: "Flamingo Store",
    category: "Tienda Online",
    image: tienda,
    path: "/tienda",
    available: true,
  },
];

function Gallery() {
  return (
    <section id="portafolio" className="bg-[#111111] py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
            Portafolio
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-6xl">
            Proyectos diseñados para vender.
          </h2>

          <p className="max-w-2xl text-lg leading-8 text-neutral-400">
            Cada demostración representa una industria distinta y muestra el nivel
            de diseño, rendimiento y experiencia que desarrolla kaallar.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Link key={project.title} to={project.path}>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:border-[#C8A45D]/30"
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#C8A45D]">
                    {project.category}
                  </p>

                  <h3 className="mb-4 text-2xl font-semibold">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-2 font-medium text-white transition group-hover:text-[#C8A45D]">
                    Explorar proyecto
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;