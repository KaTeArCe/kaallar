import { useState } from "react";

const plans = {
  launch: {
    name: "Launch",
    color: "text-white",
    price: "Desde ₡80.000",
    domain: "Subdominio gratuito",
    hosting: "Incluido",
    seo: "Opcional",
    support: "7 días",
  },
  growth: {
    name: "Growth",
    color: "text-[#C8A45D]",
    price: "Desde ₡140.000",
    domain: "Dominio personalizado",
    hosting: "Configurado",
    seo: "Incluido",
    support: "30 días",
  },
};

function Pricing() {
  const [active, setActive] = useState("launch");
  const plan = plans[active];

  return (
    <section id="planes" className="bg-[#111111] py-28">
      <div className="mx-auto max-w-6xl px-6">

        <p className="mb-4 uppercase tracking-[0.3em] text-[#C8A45D]">
          Planes
        </p>

        <h2 className="mb-12 text-5xl font-bold">
          Elija la solución ideal.
        </h2>

        <div className="mb-10 flex w-fit rounded-full border border-white/10 bg-black p-1">

          <button
            onClick={() => setActive("launch")}
            className={`rounded-full px-6 py-3 ${
              active === "launch"
                ? "bg-[#C8A45D] text-black"
                : "text-white"
            }`}
          >
            Launch
          </button>

          <button
            onClick={() => setActive("growth")}
            className={`rounded-full px-6 py-3 ${
              active === "growth"
                ? "bg-[#C8A45D] text-black"
                : "text-white"
            }`}
          >
            Growth
          </button>

        </div>

        <div className="rounded-[32px] border border-white/10 bg-black/40 p-10">

          <h3 className={`mb-2 text-4xl font-bold ${plan.color}`}>
            {plan.name}
          </h3>

          <p className="mb-8 text-2xl">{plan.price}</p>

          <div className="grid gap-6 md:grid-cols-2">

            <Info title="Dominio" value={plan.domain} />
            <Info title="Hosting" value={plan.hosting} />
            <Info title="SEO" value={plan.seo} />
            <Info title="Soporte" value={plan.support} />

          </div>

        </div>

      </div>
    </section>
  );
}

function Info({ title, value }) {
  return (
    <div className="border-b border-white/5 pb-3">
      <p className="text-sm uppercase tracking-widest text-neutral-500">
        {title}
      </p>
      <p className="mt-2 text-lg">{value}</p>
    </div>
  );
}

export default Pricing;