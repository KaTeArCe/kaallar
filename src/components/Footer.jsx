import {
  Phone,
  AtSign,
  ArrowUpRight,
  Globe,
} from "lucide-react";

function Footer() {
  const phone = "50672261373";

  const message = encodeURIComponent(
    "Hola, me gustaría cotizar un sitio web con kaallar."
  );

  const whatsapp = `https://wa.me/${phone}?text=${message}`;
  const instagram = "https://instagram.com/kaallar.cr";

  return (
    <footer id="contacto" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-2">
          {/* Marca */}
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
              Agencia Digital
            </p>

            <h2 className="mb-5 text-5xl font-bold tracking-tight">
              kaallar
            </h2>

            <p className="mb-8 max-w-md leading-8 text-neutral-400">
              Diseñamos sitios web modernos, rápidos y elegantes para empresas
              que quieren transmitir profesionalismo y convertir más clientes.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#C8A45D] px-6 py-3 font-semibold text-black transition hover:scale-105"
            >
              Solicitar cotización
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Contacto */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Globe className="mt-1 text-[#C8A45D]" size={20} />
              <div>
                <h3 className="font-semibold">Servicios</h3>
                <p className="text-neutral-400">
                  Costa Rica · Diseño Web Profesional
                </p>
              </div>
            </div>

            <a
              href={whatsapp}
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
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 transition hover:text-[#C8A45D]"
            >
              <AtSign className="mt-1 text-[#C8A45D]" size={20} />
              <div>
                <h3 className="font-semibold">Instagram</h3>
                <p className="text-neutral-400">@kaallar.cr</p>
              </div>
            </a>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 kaallar. Todos los derechos reservados.</p>

          <p>Diseño web · Branding · Experiencias digitales</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;