import cafe2 from "../../assets/images/cafe-2.jpg";

function CafeAbout() {
  return (
    <section className="bg-white py-24 text-black">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Texto */}
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
            Nuestra historia
          </p>

          <h2 className="mb-6 text-5xl font-bold leading-tight">
            Mucho más que una cafetería.
          </h2>

          <p className="mb-6 text-lg leading-8 text-neutral-600">
            En Café Luna creemos que cada taza cuenta una historia. Seleccionamos
            granos de origen costarricense y preparamos cada bebida con atención al
            detalle para ofrecer una experiencia cálida y memorable.
          </p>

          <p className="leading-8 text-neutral-500">
            Este sitio es una demostración de cómo podría verse la página web de
            una cafetería moderna desarrollada por kaallar.
          </p>
        </div>

        {/* Imagen */}
        <div className="overflow-hidden rounded-[32px] shadow-2xl">
          <img
            src={cafe2}
            alt="Interior de Café Luna"
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default CafeAbout;