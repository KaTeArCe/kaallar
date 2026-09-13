
import { motion } from "framer-motion";

import team1 from "../../assets/images/bufete-team-1.jpg";
import team2 from "../../assets/images/bufete-team-2.jpg";
import team3 from "../../assets/images/bufete-team-3.jpg";

const lawyers = [
  {
    image: team1,
    name: "Lic. Alejandro Bermúdez",
    role: "Socio fundador",
    specialty: "Derecho Civil y Corporativo",
  },
  {
    image: team2,
    name: "Licda. Natalia Montero",
    role: "Socia directora",
    specialty: "Derecho de Familia y Notarial",
  },
  {
    image: team3,
    name: "Lic. Daniel Vargas",
    role: "Abogado asociado",
    specialty: "Derecho Penal y Laboral",
  },
];

function BufeteTeam() {
  return (
    <section className="bg-white py-24 text-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
            Nuestro equipo
          </p>

          <h2 className="mb-4 text-5xl font-bold">
            Abogados que inspiran confianza
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-neutral-600">
            Un equipo comprometido con brindar asesoría jurídica estratégica,
            ética y personalizada para cada cliente.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {lawyers.map((lawyer, index) => (
            <motion.div
              key={lawyer.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.45 }}
              className="group overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={lawyer.image}
                  alt={lawyer.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#C8A45D]">
                  {lawyer.role}
                </p>

                <h3 className="mb-2 text-2xl font-semibold">
                  {lawyer.name}
                </h3>

                <p className="text-neutral-600">
                  {lawyer.specialty}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BufeteTeam;