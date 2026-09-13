import { useState } from "react";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: "¿La primera consulta tiene costo?",
    answer:
      "Depende del tipo de asunto. Algunas consultas iniciales son gratuitas y otras tienen una tarifa que se informa antes de agendar.",
  },
  {
    question: "¿Atienden empresas y personas físicas?",
    answer:
      "Sí. Brindamos asesoría legal tanto a personas como a pequeñas y medianas empresas en diferentes ramas del derecho.",
  },
  {
    question: "¿Puedo recibir asesoría de forma virtual?",
    answer:
      "Sí. Ofrecemos reuniones por videollamada para clientes que se encuentran fuera de Cartago o prefieren atención remota.",
  },
  {
    question: "¿Cuánto tarda la respuesta a un caso nuevo?",
    answer:
      "Nuestro compromiso es responder las solicitudes iniciales en un plazo máximo de 24 horas hábiles.",
  },
];

function BufeteFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[#F8F6F2] py-24 text-black">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#C8A45D]">
            Preguntas frecuentes
          </p>

          <h2 className="mb-4 text-5xl font-bold">
            Resolvemos sus principales dudas
          </h2>

          <p className="text-lg leading-8 text-neutral-600">
            Antes de agendar una consulta, estas son las preguntas que nuestros
            clientes realizan con mayor frecuencia.
          </p>
        </div>

        <div className="space-y-4">
          {questions.map((item, index) => (
            <div
              key={item.question}
              className="overflow-hidden rounded-2xl border border-black/10 bg-white"
            >
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-semibold">{item.question}</h3>

                <ChevronDown
                  className={`transition duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                  size={22}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-6">
                  <p className="leading-7 text-neutral-600">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BufeteFAQ;