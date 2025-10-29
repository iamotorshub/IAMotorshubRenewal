import { Instagram, Linkedin, Mail, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[hsl(220,70%,22%)] to-[hsl(220,70%,18%)] py-16 px-6 text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* COLUMNA 1 - MARCA */}
          <div>
            <img
              src="/favicon-32x32.png"
              alt="IA MotorsHub"
              className="mb-4 h-20 w-auto object-contain"
            />
            <p className="text-sm text-gray-300 mb-2">
              Transformamos empresas tradicionales en líderes digitales con IA
            </p>
            <p className="text-xs text-gray-400">
              Bahía Blanca, Buenos Aires, Argentina
            </p>
          </div>

          {/* COLUMNA 2 - NAVEGACIÓN */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navegación rápida</h3>
            <div className="flex flex-col gap-2">
              <a href="#servicios" className="text-gray-300 hover:text-[hsl(210,100%,55%)] transition-colors">
                Servicios
              </a>
              <a href="#diferenciadores" className="text-gray-300 hover:text-[hsl(210,100%,55%)] transition-colors">
                Diferenciadores
              </a>
              <a href="#testimonios" className="text-gray-300 hover:text-[hsl(210,100%,55%)] transition-colors">
                Casos de Éxito
              </a>
              <a href="#asistente" className="text-gray-300 hover:text-[hsl(210,100%,55%)] transition-colors">
                Contacto
              </a>
            </div>
          </div>

          {/* COLUMNA 3 - CONTACTO */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contacto@iamotorshub.com"
                className="flex items-center gap-2 text-gray-300 hover:text-[hsl(210,100%,55%)] transition-colors"
              >
                <Mail className="h-5 w-5" />
                contacto@iamotorshub.com
              </a>
              <a
                href="tel:+5492915206692"
                className="flex items-center gap-2 text-gray-300 hover:text-[hsl(210,100%,55%)] transition-colors"
              >
                <Phone className="h-5 w-5" />
                +54 9 291 520-6692
              </a>
              <a
                href="https://wa.me/5492915206692"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-[hsl(210,100%,55%)] transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* COLUMNA 4 - REDES SOCIALES - SOLO INSTAGRAM Y LINKEDIN */}
          <div>
            <h3 className="text-lg font-bold mb-4">Síguenos</h3>
            <div className="flex gap-4">
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
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© 2025 IA MotorsHub. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
