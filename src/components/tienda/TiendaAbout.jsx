import tienda1 from "../../assets/images/tienda-1.jpg";

function TiendaAbout() {
  return (
    <section className="bg-white py-24 text-black">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Texto */}
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
            Nuestra marca
          </p>

          <h2 className="mb-6 text-5xl font-bold leading-tight">
            Moda diseñada para destacar.
          </h2>

          <p className="mb-6 text-lg leading-8 text-neutral-600">
            En NOVA Studio creemos que cada prenda refleja personalidad.
            Seleccionamos materiales de alta calidad y diseñamos colecciones con
            un estilo contemporáneo, minimalista y urbano.
          </p>

          <p className="leading-8 text-neutral-500">
            Esta página es una demostración desarrollada por kaallar para mostrar
            cómo podría verse una tienda online moderna y elegante.
          </p>
        </div>

        {/* Imagen */}
        <div className="overflow-hidden rounded-[32px] shadow-2xl">
          <img
            src={tienda1}
            alt="Colección de NOVA Studio"
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default TiendaAbout;