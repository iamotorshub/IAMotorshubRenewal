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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
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
              className="h-full w-full object-cover object-center brightness-105 contrast-105 scale-[0.82] sm:scale-[0.88] md:scale-[0.92] lg:scale-[0.95]"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,70%,25%)]/28 via-[hsl(220,25%,18%)]/36 to-[hsl(220,25%,12%)]/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,18,38,0.32),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(4,12,28,0.32)_18%,rgba(4,12,28,0.2)_55%,transparent_82%)]"></div>
      </div>

      {/* Luz azul animada */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-[-10%] left-[-10%] h-72 w-72 rounded-full bg-[hsl(210,100%,60%)]/25 blur-3xl animate-[pulse_7s_ease-in-out_infinite]"></div>
        <div className="absolute right-[-15%] top-1/3 h-80 w-80 rounded-full bg-[hsl(210,85%,55%)]/20 blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-12%] left-1/3 h-64 w-64 rounded-full bg-[hsl(210,100%,65%)]/15 blur-3xl animate-[pulse_8s_ease-in-out_infinite]"></div>
      </div>

      {/* Logo superior */}
      <div className="absolute left-3 top-4 z-[60] sm:left-6 sm:top-6 md:left-10 md:top-8">
        <img
          src={logoPath}
          alt="IA MOTORSHUB"
          className="h-[13rem] w-auto sm:h-[17rem] md:h-[20rem] lg:h-[22rem] brightness-0 invert drop-shadow-[0_18px_50px_rgba(12,34,78,0.65)]"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>

      {/* Botones de navegación (servicios, etc.) */}
      <div
        className={`absolute left-1/2 top-40 z-40 w-[min(92vw,380px)] -translate-x-1/2 transition-all duration-700 sm:left-auto sm:right-10 sm:top-24 sm:w-auto sm:-translate-x-0 md:top-24 lg:top-28 ${
          showButtons ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative flex flex-wrap items-center justify-center gap-3 overflow-hidden rounded-[2.5rem] border border-white/10 bg-[rgba(6,18,40,0.12)] px-4 py-3 shadow-[0_22px_60px_rgba(5,18,40,0.28)] backdrop-blur-[18px] sm:flex-nowrap sm:justify-start">
          <span className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.12),rgba(12,25,50,0.26))] opacity-70 animate-[capsuleGlow_12s_linear_infinite]"></span>
          {[
            ["Servicios", "servicios"],
            ["Diferenciadores", "diferenciadores"],
            ["Testimonios", "testimonios"],
            ["Contacto", "asistente"],
          ].map(([label, target]) => (
            <MovingButton
              key={label}
              borderRadius="1.5rem"
              className="px-5 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-slate-100 transition-all duration-300 hover:scale-[1.05] hover:text-white sm:text-sm"
              innerBackground="rgba(10, 28, 60, 0.45)"
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
      </div>

      {/* Contenido principal */}
      <div className="relative z-20 container mx-auto px-4 pb-28 pt-[19rem] text-center sm:px-6 sm:pt-[18rem] md:pt-[19rem] lg:pt-[22rem]">
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-10 sm:gap-10 sm:px-10 sm:py-12">
          <h1 className="relative text-4xl font-serif font-black uppercase leading-tight text-white drop-shadow-[0_14px_35px_rgba(3,10,26,0.95)] animate-slide-up sm:text-5xl md:text-6xl lg:text-7xl">
            SOLUCIONES DE IA
            <br />
            PARA{" "}
            <span
              className="bg-gradient-to-r from-[hsl(210,100%,68%)] via-[hsl(210,96%,75%)] to-[hsl(210,100%,90%)] bg-clip-text text-transparent"
              style={{
                textShadow: "0 0 22px rgba(8,28,68,0.65)",
                WebkitTextStroke: "1px rgba(0,16,42,0.45)",
              }}
            >
              TODO TIPO DE NEGOCIO
            </span>
          </h1>

          <p
            className="relative max-w-4xl text-base leading-relaxed text-slate-100 drop-shadow-[0_12px_35px_rgba(4,10,24,0.55)] animate-slide-up sm:text-lg md:text-xl"
            style={{ animationDelay: "0.2s" }}
          >
            Desde bares y restaurantes hasta e-commerce y empresas corporativas.
            <br />
            <span className="font-semibold text-sky-200">
              Posicionamiento digital
            </span>{" "}
            •{" "}
            <span className="font-semibold text-sky-200">
              Automatización inteligente
            </span>{" "}
            •{" "}
            <span className="font-semibold text-sky-200">
              Soluciones personalizadas
            </span>
          </p>

          {/* CTA único */}
          <div
            className="relative flex justify-center animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <MovingButton
              borderRadius="2.9rem"
              className="group px-10 py-5 text-sm font-bold tracking-[0.14em] text-sky-50 transition-all duration-300 hover:scale-[1.06] sm:px-14 sm:py-6 sm:text-base"
              innerBackground="rgba(12, 30, 68, 0.38)"
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
            <div className="pointer-events-none absolute inset-x-6 bottom-2 h-10 rounded-full bg-[radial-gradient(circle,rgba(125,211,252,0.58),transparent_70%)] blur-xl opacity-70"></div>
          </div>

          {/* Social Proof Cards */}
          <div
            className="relative grid w-full max-w-6xl grid-cols-1 gap-4 text-center animate-slide-up md:grid-cols-3 lg:grid-cols-5"
            style={{ animationDelay: "0.6s" }}
          >
            {["BARES Y RESTAURANTES", "LOCALES DE ROPA", "E-COMMERCE", "SEO", "EMPRESAS"].map((title, index) => {
              const descriptions = [
                "Automatización y reservas inteligentes",
                "Asistentes virtuales y ventas online",
                "Optimización y conversión con IA",
                "Posicionamiento y marketing digital",
                "Soluciones complejas personalizadas",
              ];
              return (
                <div
                  key={title}
                  className="group rounded-[1.75rem] border border-white/10 bg-white/10 p-4 text-slate-100 shadow-[0_22px_55px_rgba(5,18,48,0.45)] transition-all duration-300 backdrop-blur-xl hover:border-sky-300/70 hover:bg-white/15 hover:shadow-[0_32px_95px_rgba(10,34,82,0.55)] sm:p-6"
                >
                  <div className="mb-2 flex items-center justify-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.18em] text-sky-200 drop-shadow-[0_8px_22px_rgba(5,16,38,0.85)] sm:text-lg">
                    <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" /> {title}
                  </div>
                  <div className="text-xs font-medium text-slate-100/90 drop-shadow-[0_6px_18px_rgba(4,10,24,0.65)] sm:text-sm">
                    {descriptions[index]}
                  </div>
                </div>
              );
            })}
          </div>
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
        @keyframes capsuleGlow {
          0%, 100% { opacity: 0.75; transform: scale(1); }
          50% { opacity: 0.45; transform: scale(1.02); }
        }
      `}</style>
    </section>
  );
}
