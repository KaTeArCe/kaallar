import {
  AtSign,
  MessageCircle,
  MapPin,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

function TiendaFooter() {
  const phone = "50688888888";

  const message = encodeURIComponent(
    "¡Hola NOVA Studio! Me gustaría obtener información sobre sus productos."
  );

  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="bg-[#080808] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-2">
          {/* Marca */}
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
              NOVA Studio
            </p>

            <h2 className="mb-5 text-4xl font-bold">
              Moda Urbana Premium
            </h2>

            <p className="max-w-md leading-8 text-neutral-400">
              Esta es una demostración desarrollada por kaallar para mostrar cómo
              podría verse el sitio web de una tienda online moderna y elegante.
            </p>

            <button
              onClick={() =>
                openLink(`https://wa.me/${phone}?text=${message}`)
              }
              className="mt-8 rounded-full bg-[#C8A45D] px-6 py-3 font-semibold text-black transition hover:scale-105"
            >
              Comprar por WhatsApp
            </button>

            <Link
              to="/"
              className="mt-6 block text-sm text-[#C8A45D] transition hover:translate-x-1"
            >
              ← Volver a kaallar
            </Link>
          </div>

          {/* Contacto */}
          <div className="space-y-2">
            <button
              onClick={() =>
                openLink(
                  "https://maps.google.com/?q=San+Jose+Costa+Rica"
                )
              }
              className="flex w-full items-start gap-4 rounded-2xl p-4 text-left transition hover:bg-white/5"
            >
              <MapPin className="mt-1 text-[#C8A45D]" size={20} />

              <div>
                <h3 className="font-semibold">Ubicación</h3>
                <p className="text-neutral-400">
                  San José, Costa Rica
                </p>
              </div>
            </button>

            <div className="flex items-start gap-4 rounded-2xl p-4">
              <Clock className="mt-1 text-[#C8A45D]" size={20} />

              <div>
                <h3 className="font-semibold">Horario</h3>
                <p className="text-neutral-400">
                  Lunes a Sábado · 9:00 AM – 6:00 PM
                </p>
              </div>
            </div>

            <button
              onClick={() => openLink(`https://wa.me/${phone}`)}
              className="flex w-full items-start gap-4 rounded-2xl p-4 text-left transition hover:bg-white/5"
            >
              <MessageCircle
                className="mt-1 text-[#C8A45D]"
                size={20}
              />

              <div>
                <h3 className="font-semibold">WhatsApp</h3>
                <p className="text-neutral-400">
                  +506 8888-8888
                </p>
              </div>
            </button>

            <button
              onClick={() =>
                openLink("https://instagram.com/novastudio.cr")
              }
              className="flex w-full items-start gap-4 rounded-2xl p-4 text-left transition hover:bg-white/5"
            >
              <AtSign className="mt-1 text-[#C8A45D]" size={20} />

              <div>
                <h3 className="font-semibold">Instagram</h3>
                <p className="text-neutral-400">@novastudio.cr</p>
              </div>
            </button>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-sm text-neutral-500">
          © 2026 NOVA Studio · Demo creada por kaallar.
        </div>
      </div>
    </footer>
  );
}

export default TiendaFooter;