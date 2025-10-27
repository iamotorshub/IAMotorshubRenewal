"use client";
import { Button as MovingButton } from "@/components/ui/moving-border";
import { Play, ChevronRight, Sparkles } from "lucide-react";
import logoPath from "@assets/IA MOTORSHUB LOGO_1758912846792.png";
import { useState, useEffect } from "react";

import heroAgentes from "@assets/hero-agentes-telefonicos.jpg";
import heroMenu from "@assets/hero-menu-vivo.jpg";
import heroRealEstate from "@assets/hero-real-estate-ai.jpg";
import heroRentals from "@assets/hero-rentals-ai.jpg";
import heroStoryboard from "@assets/hero-storyboard-pro.jpg";
import heroAutomatizacion from "@assets/hero-automatizacion-comercial.png";

const carouselImages = [
  heroAgentes,
  heroMenu,
  heroRealEstate,
  heroRentals,
  heroStoryboard,
  heroAutomatizacion,
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % carouselImages.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowButtons(window.scrollY < window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo del carrusel */}
      <div className="absolute inset-0 z-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,70%,25%)]/60 via-[hsl(220,20%,15%)]/70 to-[hsl(220,20%,15%)]/60"></div>
      </div>

      {/* Luz azul animada */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[hsl(210,100%,55%)]/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-[hsl(210,100%,55%)]/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Logo fijo independiente */}
      <div className="absolute top-10 left-12 z-[60]">
        <div className="absolute -inset-6 bg-[hsl(210,100%,55%)]/25 blur-3xl rounded-full"></div>
        <img
          src={logoPath}
          alt="IA MOTORSHUB"
          className="relative h-[130px] md:h-[170px] lg:h-[200px] brightness-0 invert drop-shadow-2xl hover:scale-[1.05] transition-transform duration-500"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </div>

      {/* Botones Aceternity */}
      <div
        className={`absolute top-16 right-16 z-40 flex gap-5 bg-white/5 backdrop-blur-md px-8 py-4 rounded-full border border-white/20 shadow-lg transition-all duration-700 ${
          showButtons ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {[
          ["Servicios", "servicios"],
          ["Diferenciadores", "diferenciadores"],
          ["Testimonios", "testimonios"],
          ["Contacto", "asistente"],
        ].map(([label, target]) => (
          <MovingButton
            key={label}
            borderRadius="1.75rem"
            className="text-white font-medium px-6 py-2 bg-transparent hover:text-[hsl(210,100%,80%)]"
            onClick={() =>
              document.getElementById(target)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
          >
            {label}
          </MovingButton>
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-20 container mx-auto px-6 text-center pt-48">
        <h1
          className="text-5xl md:text-7xl font-serif font-black mb-8 leading-tight text-white animate-slide-up"
          data-testid="text-headline"
        >
          SOLUCIONES DE IA<br />
          PARA{" "}
          <span className="bg-gradient-to-r from-[hsl(210,100%,55%)] to-[hsl(210,100%,70%)] bg-clip-text text-transparent">
            TODO TIPO DE NEGOCIO
          </span>
        </h1>

        <p
          className="text-xl md:text-2xl font-sans mb-10 max-w-4xl mx-auto leading-relaxed text-[hsl(220,15%,92%)] animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          Desde bares y restaurantes hasta e-commerce y empresas corporativas.
          <br />
          <span className="text-[hsl(210,100%,55%)] font-semibold">
            Posicionamiento digital
          </span>{" "}
          •{" "}
          <span className="text-[hsl(210,100%,55%)] font-semibold">
            Automatización inteligente
          </span>{" "}
          •{" "}
          <span className="text-[hsl(210,100%,55%)] font-semibold">
            Soluciones personalizadas
          </span>
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <MovingButton
            borderRadius="1.75rem"
            className="px-10 py-5 text-lg font-bold bg-[hsl(210,100%,55%)] hover:bg-[hsl(210,100%,45%)] text-white shadow-lg hover:shadow-[hsl(210,100%,55%)]/50 transition-all duration-300"
            onClick={() => {
              document.getElementById("servicios")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            <Play className="mr-2 h-5 w-5" />
            DESCUBRIR NUESTRAS SOLUCIONES
          </MovingButton>

          <MovingButton
            borderRadius="1.75rem"
            className="px-10 py-5 text-lg font-bold text-[hsl(210,100%,55%)] border border-[hsl(210,100%,55%)] hover:bg-[hsl(210,100%,55%)] hover:text-white transition-all duration-300 backdrop-blur-sm bg-white/10"
            onClick={() => {
              document.getElementById("asistente")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            <ChevronRight className="mr-2 h-5 w-5" />
            SOLICITAR DEMO GRATUITA
          </MovingButton>
        </div>

        {/* Social Proof Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center max-w-6xl mx-auto animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          {[
            ["BARES Y RESTAURANTES", "Automatización y reservas inteligentes"],
            ["LOCALES DE ROPA", "Asistentes virtuales y ventas online"],
            ["E-COMMERCE", "Optimización y conversión con IA"],
            ["POSICIONAMIENTO", "SEO y marketing digital con IA"],
            ["EMPRESAS", "Soluciones complejas personalizadas"],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="bg-white/5 backdrop-blur-md border border-[hsl(210,100%,55%)]/30 rounded-lg p-4 hover:bg-white/10 hover:border-[hsl(210,100%,55%)]/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[hsl(210,100%,55%)]/20"
            >
              <div className="text-[hsl(210,100%,55%)] text-2xl font-bold mb-1 flex items-center justify-center gap-1">
                <Sparkles className="h-5 w-5" /> {title}
              </div>
              <div className="text-sm text-[hsl(220,15%,92%)]">{desc}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
}
