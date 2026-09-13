import { MessageCircle } from "lucide-react";

function WhatsAppFloat() {
  const phone = "50672261373";

  const message = encodeURIComponent(
    "¡Hola! Me gustaría agendar una cita en Black Crown. ¿Podrían brindarme información sobre disponibilidad?"
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition duration-300 hover:scale-110"
      aria-label="WhatsApp"
    >
      <MessageCircle size={30} />
    </a>
  );
}

export default WhatsAppFloat;