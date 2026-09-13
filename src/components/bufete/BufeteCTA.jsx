import { ArrowUpRight, ShieldCheck } from "lucide-react";

function BufeteCTA() {
  const phone = "50672261373";

  const message = encodeURIComponent(
    "¡Hola! Me gustaría agendar una consulta legal con Bufete Atlas."
  );

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${phone}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const goToContact = () => {
    const section = document.getElementById("contacto");

    if (!section) return;

    const y =
      section.getBoundingClientRect().top + window.scrollY - 80;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#0D0D0D] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-[36px] border border-[#C8A45D]/20 bg-gradient-to-br from-[#171717] to-[#0D0D0D] p-10 md:p-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C8A45D]/30 bg-[#C8A45D]/10 px-4 py-2 text-sm text-[#C8A45D]">
                <ShieldCheck size={16} />
                Consulta confidencial
              </div>

              <h2 className="mb-5 text-4xl font-bold leading-tight text-white md:text-5xl">
                ¿Necesita asesoría legal?
              </h2>

              <p className="text-lg leading-8 text-neutral-300">
                Conversemos sobre su caso con absoluta confidencialidad. Nuestro
                equipo está preparado para brindarle una orientación clara y
                profesional desde el primer contacto.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <button
                onClick={openWhatsApp}
                className="flex items-center justify-center gap-2 rounded-full bg-[#C8A45D] px-7 py-4 font-semibold text-black transition hover:scale-105"
              >
                Agendar consulta
                <ArrowUpRight size={18} />
              </button>

              <button
                onClick={goToContact}
                className="rounded-full border border-white/15 px-7 py-4 font-medium text-white transition hover:border-[#C8A45D] hover:text-[#C8A45D]"
              >
                Ver información de contacto
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BufeteCTA;