import { motion } from "framer-motion";

const stats = [
  {
    value: "100%",
    label: "Responsive",
  },
  {
    value: "24 h",
    label: "Tiempo de respuesta",
  },
  {
    value: "7 días",
    label: "Soporte incluido",
  },
];

function Trust() {
  return (
    <section className="bg-[#111111] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-10 md:p-14"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
            kaallar
          </p>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Diseñado para generar confianza desde el primer clic.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            Desarrollamos sitios rápidos, modernos y completamente personalizados
            para empresas que quieren verse profesionales y convertir visitantes
            en clientes.
          </p>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-black/30 p-6"
              >
                <h3 className="text-4xl font-bold text-[#C8A45D]">
                  {item.value}
                </h3>

                <p className="mt-3 text-neutral-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Trust;