import { Instagram, Linkedin, Mail, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[hsl(220,70%,22%)] to-[hsl(220,70%,18%)] px-4 py-12 text-white sm:px-6 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-4 md:text-left lg:gap-10">
          {/* COLUMNA 1 - MARCA */}
          <div className="flex flex-col items-center gap-2 text-center md:items-center md:text-center">
            <img
              src="/logo-footer.png"
              alt="IA MotorsHub"
              className="mb-2 h-20 w-auto object-contain md:h-24"
            />
            <p className="text-sm text-gray-300">
              Transformamos empresas tradicionales en líderes digitales con IA
            </p>
            <p className="text-xs text-gray-400">
              Bahía Blanca, Buenos Aires, Argentina
            </p>
          </div>

          {/* COLUMNA 2 - NAVEGACIÓN */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-lg font-bold">Navegación rápida</h3>
            <div className="flex flex-col gap-2 text-sm sm:text-base">
              <a
                href="#servicios"
                className="transition-colors text-gray-300 hover:text-[hsl(210,100%,55%)]"
              >
                Servicios
              </a>
              <a
                href="#diferenciadores"
                className="transition-colors text-gray-300 hover:text-[hsl(210,100%,55%)]"
              >
                Diferenciadores
              </a>
              <a
                href="#testimonios"
                className="transition-colors text-gray-300 hover:text-[hsl(210,100%,55%)]"
              >
                Casos de Éxito
              </a>
              <a
                href="#asistente"
                className="transition-colors text-gray-300 hover:text-[hsl(210,100%,55%)]"
              >
                Contacto
              </a>
            </div>
          </div>

          {/* COLUMNA 3 - CONTACTO */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-lg font-bold">Contacto</h3>
            <div className="flex flex-col gap-3 text-sm sm:text-base">
              <a
                href="mailto:contacto@iamotorshub.com"
                className="flex items-center justify-center gap-2 text-gray-300 transition-colors hover:text-[hsl(210,100%,55%)] md:justify-start"
              >
                <Mail className="h-5 w-5" />
                contacto@iamotorshub.com
              </a>
              <a
                href="tel:+5492915206692"
                className="flex items-center justify-center gap-2 text-gray-300 transition-colors hover:text-[hsl(210,100%,55%)] md:justify-start"
              >
                <Phone className="h-5 w-5" />
                +54 9 291 520-6692
              </a>
              <a
                href="https://wa.me/5492915206692"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-gray-300 transition-colors hover:text-[hsl(210,100%,55%)] md:justify-start"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* COLUMNA 4 - REDES SOCIALES - SOLO INSTAGRAM Y LINKEDIN */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-lg font-bold">Síguenos</h3>
            <div className="flex items-center justify-center gap-4 md:justify-start">
              <a
                href="https://instagram.com/iamotorshub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram IA MotorsHub"
                className="text-gray-300 transition-all hover:scale-110 hover:text-[hsl(210,100%,55%)] hover:drop-shadow-[0_0_14px_rgba(59,130,246,0.6)]"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/company/iamotorshub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn IA MotorsHub"
                className="text-gray-300 transition-all hover:scale-110 hover:text-[hsl(210,100%,55%)] hover:drop-shadow-[0_0_14px_rgba(59,130,246,0.6)]"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-xs text-gray-400 sm:text-sm">
          <p>© 2025 IA MotorsHub. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
