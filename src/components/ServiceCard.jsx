import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ServiceCard({ title, description, price, image, href }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
    >
      <Link
        to={href}
        className="group block overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl"
      >
        <div className="aspect-[5/4] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#C8A45D]">
            Desde {price}
          </p>

          <h3 className="mb-3 text-2xl font-semibold">{title}</h3>

          <p className="mb-6 leading-7 text-neutral-300">
            {description}
          </p>

          <div className="flex items-center gap-2 font-medium text-white group-hover:text-[#C8A45D]">
            Ver demo
            <ArrowUpRight size={18} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default ServiceCard;