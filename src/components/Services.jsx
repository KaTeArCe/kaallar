import ServiceCard from "./ServiceCard";

import cafe from "../assets/images/cafe.jpg";
import bufete from "../assets/images/bufete.jpg";
import clinica from "../assets/images/clinica.jpg";
import salon from "../assets/images/salon.jpg";
import tienda from "../assets/images/tienda.jpg";

function Services() {
  return (
    <section
      id="servicios"
      className="bg-[#0D0D0D] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
          Servicios
        </p>

        <h2 className="mb-5 text-4xl font-bold md:text-6xl">
          Soluciones para cada industria.
        </h2>

        <p className="mb-16 max-w-2xl text-lg leading-8 text-neutral-300">
          Cada sitio está diseñado específicamente para el tipo de negocio,
          priorizando conversión, velocidad y una experiencia profesional.
        </p>

        <div className="grid gap-8 md:grid-cols-2">

          <ServiceCard
            title="Cafés & Restaurantes"
            description="Menú digital, galería, horarios, Google Maps y WhatsApp."
            price="₡80.000"
            image={cafe}
            href="/cafe"
          />

          <ServiceCard
            title="Bufetes"
            description="Imagen corporativa, servicios legales y consultas online."
            price="₡100.000"
            image={bufete}
            href="/bufete"
          />

          <ServiceCard
            title="Clínicas"
            description="Tratamientos, doctores, testimonios y agenda de citas."
            price="₡95.000"
            image={clinica}
            href="/clinica"
          />

          <ServiceCard
            title="Salones & Barberías"
            description="Galería de trabajos, reservas y promociones."
            price="₡80.000"
            image={salon}
            href="/salon"
          />

          <div className="md:col-span-2">

            <ServiceCard
              title="Tiendas Online"
              description="Carrito de compras, pagos, inventario y panel administrativo."
              price="₡250.000"
              image={tienda}
              href="/tienda"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Services;