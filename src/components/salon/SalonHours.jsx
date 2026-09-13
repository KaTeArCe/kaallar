import { Clock, MapPin, Navigation } from "lucide-react";

function SalonHours() {
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=San+Jose+Costa+Rica";

  return (
    <section
      id="contacto"
      className="bg-[#0D0D0D] py-24 text-white"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2">
        {/* Información */}
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
            Agenda tu cita
          </p>

          <h2 className="mb-6 text-5xl font-bold leading-tight">
            Tu próximo look comienza aquí.
          </h2>

          <p className="mb-10 text-lg leading-8 text-neutral-300">
            Visítanos en nuestro estudio y disfruta de una experiencia premium en
            cortes, barba y cuidado masculino con atención personalizada.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Clock className="mt-1 text-[#C8A45D]" size={22} />

              <div>
                <h3 className="mb-1 text-lg font-semibold">
                  Horario
                </h3>

                <p className="text-neutral-300">
                  Lunes a Sábado
                </p>

                <p className="text-neutral-300">
                  9:00 AM — 7:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="mt-1 text-[#C8A45D]" size={22} />

              <div>
                <h3 className="mb-1 text-lg font-semibold">
                  Ubicación
                </h3>

                <p className="text-neutral-300">
                  San José Centro
                </p>

                <p className="text-neutral-300">
                  San José, Costa Rica
                </p>
              </div>
            </div>
          </div>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#C8A45D] px-7 py-3 font-semibold text-black transition hover:scale-105"
          >
            <Navigation size={18} />
            Abrir en Google Maps
          </a>
        </div>

        {/* Mapa */}
        <div className="overflow-hidden rounded-[32px] border border-white/10 shadow-2xl">
          <iframe
            title="Mapa de Black Crown Barber Studio"
            src="https://maps.google.com/maps?q=San%20Jose%20Costa%20Rica&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

export default SalonHours;