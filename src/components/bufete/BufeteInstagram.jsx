import { AtSign, Heart } from "lucide-react";
import { motion } from "framer-motion";

import bufete1 from "../../assets/images/bufete-1.jpg";
import bufete2 from "../../assets/images/bufete-2.jpg";
import bufete3 from "../../assets/images/bufete-3.jpg";
import bufete4 from "../../assets/images/bufete-4.jpg";

const posts = [
  { image: bufete1, likes: 842 },
  { image: bufete2, likes: 615 },
  { image: bufete3, likes: 973 },
  { image: bufete4, likes: 704 },
];

function BufeteInstagram() {
  const instagramUrl =
    "https://www.instagram.com/bufete.bermudez.montero/";

  const openInstagram = () => {
    window.open(instagramUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="instagram" className="bg-white py-24 text-black">
      <div className="mx-auto max-w-7xl px-6">
        {/* Encabezado */}
        <div className="mb-14 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
              Redes sociales
            </p>

            <h2 className="mb-3 text-5xl font-bold">
              Síguenos en Instagram
            </h2>

            <p className="text-neutral-600">
              Conoce contenido jurídico, consejos legales y novedades del bufete.
            </p>
          </div>

          <button
            onClick={openInstagram}
            className="flex items-center gap-2 rounded-full border border-black/10 px-6 py-3 transition hover:border-[#C8A45D] hover:text-[#C8A45D]"
          >
            <AtSign size={18} />
            @bufete.bermudez.montero
          </button>
        </div>

        {/* Feed */}
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="group relative cursor-pointer overflow-hidden rounded-[26px]"
              onClick={openInstagram}
            >
              <img
                src={post.image}
                alt={`Publicación ${index + 1}`}
                className="aspect-square w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 flex items-end bg-black/0 transition duration-300 group-hover:bg-black/40">
                <div className="flex w-full items-center justify-between p-4 text-white opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="flex items-center gap-2">
                    <Heart className="fill-white" size={18} />
                    <span>{post.likes}</span>
                  </div>

                  <AtSign size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA inferior */}
        <div className="mt-12 text-center">
          <button
            onClick={openInstagram}
            className="rounded-full bg-[#111111] px-8 py-3 font-medium text-white transition hover:bg-[#C8A45D] hover:text-black"
          >
            Visitar @bufete.bermudez.montero
          </button>
        </div>
      </div>
    </section>
  );
}

export default BufeteInstagram;