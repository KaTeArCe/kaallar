import { Coffee, Cake } from "lucide-react";

function CafeMenu() {
  const items = [
    {
      name: "Espresso",
      desc: "Café intenso de especialidad",
      price: "₡1 500",
      icon: Coffee,
    },
    {
      name: "Cappuccino",
      desc: "Espuma cremosa y leche artesanal",
      price: "₡2 300",
      icon: Coffee,
    },
    {
      name: "Latte Vainilla",
      desc: "Leche vaporizada con vainilla",
      price: "₡2 600",
      icon: Coffee,
    },
    {
      name: "Mocha Artesanal",
      desc: "Chocolate belga y espresso doble",
      price: "₡2 800",
      icon: Coffee,
    },
    {
      name: "Cheesecake",
      desc: "Repostería artesanal del día",
      price: "₡2 900",
      icon: Cake,
    },
    {
      name: "Croissant de Almendra",
      desc: "Horneado cada mañana",
      price: "₡2 400",
      icon: Cake,
    },
  ];

  return (
    <section id="menu" className="bg-[#0A0A0A] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#C8A45D]">
            Nuestro menú
          </p>

          <h2 className="mb-4 text-5xl font-bold">
            Sabores preparados con pasión
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-neutral-400">
            Una selección de bebidas y repostería elaboradas con ingredientes de
            origen costarricense.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item) => {
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

export default CafeMenu;