import salon2 from "../../assets/images/salon-2.jpg";

function SalonAbout() {
  return (
    <section className="bg-white py-24 text-black">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Texto */}
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
            Nuestra esencia
          </p>

          <h2 className="mb-6 text-5xl font-bold leading-tight">
            Estilo, precisión y confianza.
          </h2>

          <p className="mb-6 text-lg leading-8 text-neutral-600">
            En Black Crown Barber Studio creemos que un buen corte transforma más
            que la apariencia: refuerza la seguridad y la personalidad de cada
            cliente. Cada servicio se realiza con técnica, detalle y productos de
            alta calidad.
          </p>

          <p className="leading-8 text-neutral-500">
            Esta es una demostración desarrollada por kaallar para mostrar cómo
            podría verse el sitio web de una barbería o salón premium.
          </p>
        </div>

        {/* Imagen */}
        <div className="overflow-hidden rounded-[32px] shadow-2xl">
          <img
            src={salon2}
            alt="Interior de Black Crown Barber Studio"
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default SalonAbout;