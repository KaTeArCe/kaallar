import {
  MapPin,
  Clock,
  Phone,
  AtSign,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

function CafeFooter() {
  const phone = "50672261373";

  const reservationMessage = encodeURIComponent(
    "¡Hola Café Luna! Me gustaría hacer una reserva."
  );

  const whatsappUrl = `https://wa.me/${phone}?text=${reservationMessage}`;
  const mapsUrl =
    "https://maps.google.com/?q=Turrialba+Centro+Cartago+Costa+Rica";
  const instagramUrl = "https://instagram.com/cafeluna.cr";

  return (
    <footer className="bg-[#080808] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-2">
          {/* Marca */}
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
              Café Luna
            </p>

            <h2 className="mb-5 text-4xl font-bold">
              Café de Especialidad
            </h2>

            <p className="mb-8 max-w-md leading-8 text-neutral-400">
              Un espacio diseñado para disfrutar café artesanal,
              repostería fresca y momentos memorables.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#C8A45D] px-6 py-3 font-semibold text-black transition hover:scale-105"
            >
              Reservar por WhatsApp
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Contacto */}
          <div className="space-y-6">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 transition hover:text-[#C8A45D]"
            >
              <MapPin className="mt-1 text-[#C8A45D]" size={20} />
              <div>
                <h3 className="font-semibold">Ubicación</h3>
                <p className="text-neutral-400">
                  Turrialba Centro, Cartago
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <Clock className="mt-1 text-[#C8A45D]" size={20} />
              <div>
                <h3 className="font-semibold">Horario</h3>
                <p className="text-neutral-400">
                  Lunes a Domingo · 7:00 AM – 8:00 PM
                </p>
              </div>
            </div>

            <a
              href={`https://wa.me/${phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 transition hover:text-[#C8A45D]"
            >
              <Phone className="mt-1 text-[#C8A45D]" size={20} />
              <div>
                <h3 className="font-semibold">WhatsApp</h3>
                <p className="text-neutral-400">+506 7226-1373</p>
              </div>
            </a>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 transition hover:text-[#C8A45D]"
            >
              <AtSign className="mt-1 text-[#C8A45D]" size={20} />
              <div>
                <h3 className="font-semibold">Instagram</h3>
                <p className="text-neutral-400">@cafeluna.cr</p>
              </div>
            </a>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Café Luna. Todos los derechos reservados.</p>

          <Link
            to="/"
            className="transition hover:text-[#C8A45D]"
          >
            Demo desarrollada por kaallar
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default CafeFooter;