function SalonStats() {
  const stats = [
    ["2020", "Fundado"],
    ["4.9★", "Calificación"],
    ["+2.500", "Clientes satisfechos"],
    ["100%", "Atención personalizada"],
  ];

  return (
    <section className="bg-[#111111] py-10 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map(([number, label]) => (
          <div key={label} className="text-center">
            <h3 className="text-3xl font-bold text-[#C8A45D]">
              {number}
            </h3>

            <p className="mt-2 text-sm text-neutral-400">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SalonStats;