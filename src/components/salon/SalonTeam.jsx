import { Award, Scissors } from "lucide-react";

import stylist1 from "../../assets/images/salon-team-1.jpg";
import stylist2 from "../../assets/images/salon-team-2.jpg";
import stylist3 from "../../assets/images/salon-team-3.jpg";

const team = [
  {
    name: "Alejandro Mora",
    role: "Master Barber",
    specialty: "Fades, cortes clásicos y perfilado de barba.",
    image: stylist1,
  },
  {
    name: "Valeria Rojas",
    role: "Colorista Profesional",
    specialty: "Balayage, coloración y tratamientos capilares.",
    image: stylist2,
  },
  {
    name: "Sandra León",
    role: "Stylist Senior",
    specialty: "Cortes modernos, rizos y asesoría de imagen.",
    image: stylist3,
  },
];

function SalonTeam() {
  return (
    <section className="bg-[#F7F4EE] py-24 text-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
            Nuestro equipo
          </p>

          <h2 className="mb-4 text-5xl font-bold">
            Estilistas que transforman tu imagen
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-neutral-600">
            Un equipo apasionado por la barbería, el estilismo y la atención
            personalizada para que salgas con la mejor versión de vos.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="overflow-hidden rounded-[30px] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-[#C8A45D]">
                  <Award size={18} />
                  <span className="text-sm font-medium">
                    {member.role}
                  </span>
                </div>

                <h3 className="mb-3 text-2xl font-bold">
                  {member.name}
                </h3>

                <div className="mb-4 flex items-center gap-2 text-neutral-500">
                  <Scissors size={16} />
                  <span className="text-sm">Especialidad</span>
                </div>

                <p className="leading-7 text-neutral-600">
                  {member.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SalonTeam;