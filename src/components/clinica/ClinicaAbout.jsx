import clinica1 from "../../assets/images/clinica-1.jpg";

function ClinicaAbout() {
  return (
    <section className="bg-white py-24 text-black">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Texto */}
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
            Nuestra filosofía
          </p>

          <h2 className="mb-6 text-5xl font-bold leading-tight">
            Belleza, salud y confianza en un mismo lugar.
          </h2>

          <p className="mb-6 text-lg leading-8 text-neutral-600">
            En Clínica Aurora combinamos medicina estética y dermatología con un
            enfoque personalizado. Cada tratamiento inicia con una valoración
            profesional para ofrecer resultados naturales, seguros y acordes a
            las necesidades de cada paciente.
          </p>

          <p className="leading-8 text-neutral-500">
            Esta es una demostración desarrollada por kaallar para mostrar cómo
            podría verse el sitio web de una clínica moderna y de alta gama.
          </p>
        </div>

        {/* Imagen */}
        <div className="overflow-hidden rounded-[32px] shadow-2xl">
          <img
            src={clinica1}
            alt="Recepción de Clínica Aurora"
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default ClinicaAbout;