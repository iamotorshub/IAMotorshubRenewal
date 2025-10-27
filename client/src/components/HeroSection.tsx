"use client";
import { Button as MovingButton } from "@/components/ui/moving-border";
import { ChevronRight, Sparkles } from "lucide-react";
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
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              className="w-full h-full object-cover brightness-105 contrast-105"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,70%,25%)]/45 via-[hsl(220,25%,15%)]/55 to-[hsl(220,25%,12%)]/45"></div>
      </div>

      {/* Luz azul animada */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-[-10%] left-[-10%] h-72 w-72 rounded-full bg-[hsl(210,100%,60%)]/25 blur-3xl animate-[pulse_7s_ease-in-out_infinite]"></div>
        <div className="absolute right-[-15%] top-1/3 h-80 w-80 rounded-full bg-[hsl(210,85%,55%)]/20 blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-12%] left-1/3 h-64 w-64 rounded-full bg-[hsl(210,100%,65%)]/15 blur-3xl animate-[pulse_8s_ease-in-out_infinite]"></div>
      </div>

      {/* Logo grande fijo con halo */}
      <div className="absolute left-4 top-6 sm:left-8 sm:top-8 md:left-12 md:top-10 z-[60] flex items-center">
        <div className="pointer-events-none absolute -inset-8 rounded-full bg-[hsl(210,100%,60%)]/35 blur-3xl"></div>
        <img
          src={logoPath}
          alt="IA MOTORSHUB"
          className="relative h-40 w-auto sm:h-44 md:h-52 lg:h-60 brightness-0 invert drop-shadow-[0_0_35px_rgba(59,130,246,0.6)] transition-transform duration-500"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>

      {/* Botones de navegación (servicios, etc.) */}
      <div
        className={`absolute left-1/2 top-36 z-40 flex w-[min(90vw,340px)] -translate-x-1/2 flex-wrap items-center justify-center gap-3 rounded-3xl border border-white/15 bg-[rgba(6,16,35,0.78)] px-4 py-3 shadow-[0_20px_60px_rgba(15,76,129,0.35)] backdrop-blur-lg transition-all duration-700 sm:left-auto sm:right-10 sm:top-20 sm:w-auto sm:-translate-x-0 sm:flex-nowrap sm:justify-start md:top-24 lg:top-28 ${
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
            borderRadius="1.5rem"
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wide text-sky-100 transition-all duration-300 hover:scale-[1.02] sm:text-sm"
            innerBackground="rgba(6, 16, 35, 0.55)"
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
      <div className="relative z-20 container mx-auto px-4 sm:px-6 text-center pt-64 sm:pt-60 md:pt-64 lg:pt-72">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-black mb-8 leading-tight text-white animate-slide-up">
          SOLUCIONES DE IA<br />
          PARA{" "}
          <span className="bg-gradient-to-r from-[hsl(210,100%,55%)] to-[hsl(210,100%,70%)] bg-clip-text text-transparent">
            TODO TIPO DE NEGOCIO
          </span>
        </h1>

        <p
          className="text-lg sm:text-xl md:text-2xl font-sans mb-14 max-w-4xl mx-auto leading-relaxed text-[hsl(220,15%,92%)] animate-slide-up"
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

        {/* CTA único */}
        <div
          className="flex justify-center mb-20 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <MovingButton
            borderRadius="1.5rem"
            className="group px-10 py-5 text-base font-bold text-sky-100 transition-all duration-300 hover:scale-[1.02] sm:px-12 sm:py-6 sm:text-lg"
            innerBackground="rgba(12, 28, 52, 0.55)"
            borderColors={["#38bdf8", "#60a5fa", "#38bdf8"]}
            onClick={() => {
              document.getElementById("asistente")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            <ChevronRight className="mr-3 h-6 w-6" />
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
              className="bg-white/5 backdrop-blur-md border border-[hsl(210,100%,55%)]/30 rounded-lg p-4 transition-all duration-300 hover:bg-white/10 hover:border-[hsl(210,100%,55%)]/50 hover:scale-[1.03] hover:shadow-lg hover:shadow-[hsl(210,100%,55%)]/25"
            >
              <div className="text-[hsl(210,100%,55%)] text-2xl font-bold mb-1 flex items-center justify-center gap-1">
                <Sparkles className="h-5 w-5" /> {title}
              </div>
              <div className="text-sm text-[hsl(220,15%,92%)]">{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Animaciones */}
      <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
}
