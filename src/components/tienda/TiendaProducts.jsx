import { Shirt, Sparkles } from "lucide-react";

function TiendaProducts() {
  const products = [
    {
      name: "Vestido Midi Floral",
      desc: "Diseño elegante y tela ligera para cualquier ocasión.",
      price: "₡24 900",
      icon: Sparkles,
    },
    {
      name: "Blazer Oversize",
      desc: "Corte moderno en tonos neutros de alta calidad.",
      price: "₡29 500",
      icon: Shirt,
    },
    {
      name: "Conjunto Lino Premium",
      desc: "Dos piezas con acabado fresco y sofisticado.",
      price: "₡34 900",
      icon: Shirt,
    },
    {
      name: "Blusa Satinada",
      desc: "Textura suave con un estilo minimalista.",
      price: "₡18 500",
      icon: Sparkles,
    },
    {
      name: "Jeans Wide Leg",
      desc: "Denim premium de tiro alto y ajuste cómodo.",
      price: "₡22 900",
      icon: Shirt,
    },
    {
      name: "Bolso Urbano",
      desc: "Accesorio versátil para complementar cualquier look.",
      price: "₡19 900",
      icon: Sparkles,
    },
  ];

  return (
    <section id="productos" className="bg-[#0A0A0A] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#C8A45D]">
            Colección destacada
          </p>

          <h2 className="mb-4 text-5xl font-bold">
            Moda que inspira confianza
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-neutral-400">
            Prendas cuidadosamente seleccionadas para ofrecer calidad, estilo y
            comodidad en cada colección.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {products.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.name}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-[#C8A45D]/40 hover:bg-white/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8A45D]/10 text-[#C8A45D]">
                  <Icon size={24} />
                </div>

                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{item.name}</h3>

                  <span className="font-bold text-[#C8A45D]">
                    {item.price}
                  </span>
                </div>

                <p className="leading-7 text-neutral-400">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TiendaProducts;