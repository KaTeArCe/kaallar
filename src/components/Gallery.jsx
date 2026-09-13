import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";

import cafe from "../assets/images/cafe.jpg";
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
    title: "Bufete Atlas",
    category: "Bufete Jurídico",
    image: bufete,
    available: false,
  },
  {
    title: "Studio Noir",
    category: "Salón & Barbería",
    image: salon,
    available: false,
  },
  {
    title: "Nova Store",
    category: "Tienda Online",
    image: tienda,
    available: false,
  },
];

function Gallery() {
  return (
    <section className="bg-[#111111] py-28 text-white">
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
          {projects.map((project, index) => {
            const Card = (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`h-full w-full object-cover transition duration-700 ${
                      project.available
                        ? "group-hover:scale-105"
                        : "opacity-70"
                    }`}
                  />

                  {!project.available && (
                    <div className="absolute inset-0 bg-black/35" />
                  )}
                </div>

                <div className="p-6">
                  <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#C8A45D]">
                    {project.category}
                  </p>

                  <h3 className="mb-4 text-2xl font-semibold">
                    {project.title}
                  </h3>

                  {project.available ? (
                    <div className="flex items-center gap-2 font-medium text-white transition group-hover:text-[#C8A45D]">
                      Explorar proyecto
                      <ArrowUpRight size={18} />
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-400">
                      <Lock size={14} />
                      En desarrollo
                    </div>
                  )}
                </div>
              </motion.div>
            );

            return project.available ? (
              <Link key={project.title} to={project.path}>
                {Card}
              </Link>
            ) : (
              <div key={project.title}>{Card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Gallery;