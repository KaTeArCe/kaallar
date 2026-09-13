import { CheckCircle2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  "Diseño 100% responsive",
  "Optimización de velocidad",
  "Diseño completamente personalizado",
  "Integración con WhatsApp",
  "Conexión con redes sociales",
  "Configuración de dominio y hosting",
  "Publicación del sitio web",
  "7 días de soporte gratuito",
  "Corrección de errores post-entrega",
  "Capacitación básica incluida",
];

function Guarantee() {
  return (
    <section id="garantia" className="bg-[#0D0D0D] py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
              Garantía kaallar
            </p>

            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Tu sitio estará listo para representar tu negocio desde el primer día.
            </h2>

            <p className="mb-8 text-lg leading-8 text-neutral-300">
              No entregamos plantillas genéricas. Cada proyecto es desarrollado
              específicamente para la identidad, objetivos y público de tu empresa,
              cuidando tanto el diseño como el rendimiento.
            </p>

            <div className="flex items-center gap-4 rounded-2xl border border-[#C8A45D]/30 bg-[#C8A45D]/10 p-5">
              <ShieldCheck className="text-[#C8A45D]" size={34} />
              <div>
                <h3 className="font-semibold">Entrega garantizada</h3>
                <p className="text-sm text-neutral-300">
                  Revisiones finales y acompañamiento durante la publicación.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h3 className="mb-6 text-2xl font-semibold">
              Todo proyecto incluye
            </h3>

            <div className="grid gap-4">
              {items.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 text-[#C8A45D]"
                    size={20}
                  />
                  <span className="text-neutral-200">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Frase final */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[30px] border border-[#C8A45D]/25 bg-gradient-to-r from-[#C8A45D]/10 to-transparent p-8 text-center"
        >
          <p className="text-xl italic leading-9 text-neutral-100">
            “Diseñamos experiencias digitales que hacen que tu negocio se vea tan
            profesional como realmente es.”
          </p>

          <p className="mt-5 font-semibold tracking-[0.2em] text-[#C8A45D]">
            — KAALLAR
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Guarantee;