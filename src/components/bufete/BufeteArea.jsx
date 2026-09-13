import {
  Scale,
  Building2,
  Shield,
  FileText,
  Users,
  Briefcase,
} from "lucide-react";

function BufeteArea() {
  const areas = [
    {
      name: "Derecho Civil",
      desc: "Contratos, obligaciones, propiedad y procesos civiles.",
      icon: Scale,
    },
    {
      name: "Derecho Penal",
      desc: "Defensa técnica y representación en procesos penales.",
      icon: Shield,
    },
    {
      name: "Derecho de Familia",
      desc: "Divorcios, pensiones, custodia y sucesiones.",
      icon: Users,
    },
    {
      name: "Derecho Corporativo",
      desc: "Constitución de sociedades y asesoría empresarial.",
      icon: Building2,
    },
    {
      name: "Derecho Laboral",
      desc: "Asesoría para patronos y trabajadores.",
      icon: Briefcase,
    },
    {
      name: "Notariado",
      desc: "Escrituras, certificaciones y trámites notariales.",
      icon: FileText,
    },
  ];

  return (
    <section id="areas" className="bg-[#0A0A0A] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#C8A45D]">
            Áreas de práctica
          </p>

          <h2 className="mb-4 text-5xl font-bold">
            Soluciones legales integrales
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-neutral-400">
            Brindamos representación y asesoría jurídica con un enfoque
            estratégico, confidencial y orientado a obtener los mejores resultados
            para cada cliente.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {areas.map((area) => {
            const Icon = area.icon;

            return (
              <div
                key={area.name}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-[#C8A45D]/40 hover:bg-white/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8A45D]/10 text-[#C8A45D]">
                  <Icon size={24} />
                </div>

                <h3 className="mb-3 text-xl font-semibold">
                  {area.name}
                </h3>

                <p className="leading-7 text-neutral-400">
                  {area.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BufeteArea;