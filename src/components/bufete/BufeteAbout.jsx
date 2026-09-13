import bufete2 from "../../assets/images/bufete-2.jpg";

function BufeteAbout() {
  return (
    <section id="nosotros" className="bg-white py-24 text-black">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Texto */}
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
            Quiénes somos
          </p>

          <h2 className="mb-6 text-5xl font-bold leading-tight">
            Asesoría legal con excelencia y compromiso.
          </h2>

          <p className="mb-6 text-lg leading-8 text-neutral-600">
            En Bufete Atlas brindamos soluciones jurídicas personalizadas para
            personas y empresas, combinando experiencia, ética profesional y una
            atención cercana en cada proceso legal.
          </p>

          <p className="leading-8 text-neutral-500">
            Esta página es una demostración desarrollada por kaallar para mostrar
            cómo podría verse el sitio web de un bufete moderno y elegante.
          </p>
        </div>

        {/* Imagen */}
        <div className="overflow-hidden rounded-[32px] shadow-2xl">
          <img
            src={bufete2}
            alt="Abogado asesorando a un cliente"
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default BufeteAbout;