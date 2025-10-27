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
              className="w-full h-full object-cover brightness-105 contrast-105"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,70%,25%)]/45 via-[hsl(220,25%,15%)]/55 to-[hsl(220,25%,12%)]/45"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,18,38,0.6),transparent_62%)] mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(4,12,28,0.55)_20%,rgba(4,12,28,0.35)_55%,transparent_82%)]"></div>
      </div>

      {/* Luz azul animada */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-[-10%] left-[-10%] h-72 w-72 rounded-full bg-[hsl(210,100%,60%)]/25 blur-3xl animate-[pulse_7s_ease-in-out_infinite]"></div>
        <div className="absolute right-[-15%] top-1/3 h-80 w-80 rounded-full bg-[hsl(210,85%,55%)]/20 blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-12%] left-1/3 h-64 w-64 rounded-full bg-[hsl(210,100%,65%)]/15 blur-3xl animate-[pulse_8s_ease-in-out_infinite]"></div>
      </div>

      {/* Logo grande fijo con halo */}
      <div className="absolute left-2 top-4 z-[60] flex items-center sm:left-6 sm:top-6 md:left-10 md:top-10">
        <div className="pointer-events-none absolute -inset-20 rounded-full bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.55),rgba(12,24,48,0.05))] blur-3xl opacity-90 animate-[heroHalo_8s_ease-in-out_infinite]"></div>
        <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full border border-white/15 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.55),rgba(15,30,60,0.15))] backdrop-blur-2xl shadow-[0_45px_120px_rgba(46,131,255,0.55)] before:absolute before:inset-2 before:rounded-full before:border before:border-white/20 before:opacity-60 before:animate-[logoOrbit_18s_linear_infinite] before:content-['']"></div>
        <img
          src={logoPath}
          alt="IA MOTORSHUB"
          className="relative h-[12.5rem] w-auto sm:h-[16rem] md:h-[19rem] lg:h-[23rem] xl:h-[26rem] brightness-0 invert drop-shadow-[0_24px_70px_rgba(12,34,78,0.8)] transition-all duration-700 ease-out will-change-transform"
          style={{ filter: "brightness(0) invert(1)" }}
        />
        <div className="pointer-events-none absolute inset-0 rounded-full opacity-0 mix-blend-screen animate-[logoPulse_9s_ease-in-out_infinite]"></div>
      </div>

      {/* Botones de navegación (servicios, etc.) */}
      <div
        className={`absolute left-1/2 top-40 z-40 w-[min(92vw,380px)] -translate-x-1/2 transition-all duration-700 sm:left-auto sm:right-10 sm:top-24 sm:w-auto sm:-translate-x-0 md:top-24 lg:top-28 ${
          showButtons ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative flex flex-wrap items-center justify-center gap-3 overflow-hidden rounded-[2.25rem] border border-white/10 bg-[rgba(10,18,36,0.32)] px-4 py-3 shadow-[0_28px_85px_rgba(5,18,40,0.45)] backdrop-blur-2xl sm:flex-nowrap sm:justify-start">
          <span className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.25),rgba(12,25,50,0.35))] opacity-80"></span>
          <span className="pointer-events-none absolute inset-1 rounded-[2rem] border border-white/5 bg-white/5 mix-blend-overlay opacity-30"></span>
          {[
            ["Servicios", "servicios"],
            ["Diferenciadores", "diferenciadores"],
            ["Testimonios", "testimonios"],
            ["Contacto", "asistente"],
          ].map(([label, target]) => (
            <MovingButton
              key={label}
              borderRadius="1.5rem"
              className="px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-100 transition-all duration-300 hover:scale-[1.05] hover:text-white sm:text-sm"
              innerBackground="rgba(6, 20, 42, 0.35)"
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
      <div className="relative z-20 container mx-auto px-4 pb-28 pt-72 text-center sm:px-6 sm:pt-64 md:pt-72 lg:pt-[22rem]">
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 rounded-[2.75rem] border border-white/10 bg-[rgba(5,12,24,0.68)] px-6 py-10 shadow-[0_50px_130px_rgba(5,16,38,0.62)] backdrop-blur-[22px] sm:gap-10 sm:px-10 sm:py-14">
          <div className="pointer-events-none absolute -inset-px -z-10 rounded-[2.75rem] bg-[linear-gradient(135deg,rgba(59,130,246,0.2),rgba(14,165,233,0.16)_40%,rgba(2,132,199,0.1)_75%,transparent)] opacity-100"></div>
          <div className="pointer-events-none absolute inset-4 rounded-[2.25rem] border border-white/5"></div>
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
            className="relative max-w-4xl text-base leading-relaxed text-slate-100 drop-shadow-[0_10px_28px_rgba(4,10,24,0.85)] animate-slide-up sm:text-lg md:text-xl"
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
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-[2.1rem] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_65%)]"></div>
            {["BARES Y RESTAURANTES", "LOCALES DE ROPA", "E-COMMERCE", "POSICIONAMIENTO", "EMPRESAS"].map((title, index) => {
              const descriptions = [
                "Automatización y reservas inteligentes",
                "Asistentes virtuales y ventas online",
                "Optimización y conversión con IA",
                "SEO y marketing digital con IA",
                "Soluciones complejas personalizadas",
              ];
              return (
                <div
                  key={title}
                  className="group rounded-[1.75rem] border border-white/10 bg-white/10 p-4 text-slate-100 shadow-[0_22px_55px_rgba(5,18,48,0.45)] transition-all duration-300 backdrop-blur-xl hover:border-sky-300/70 hover:bg-white/15 hover:shadow-[0_32px_95px_rgba(10,34,82,0.55)] sm:p-6"
                >
                  <div className="mb-2 flex items-center justify-center gap-2 text-base font-bold uppercase tracking-[0.28em] text-sky-200 drop-shadow-[0_8px_22px_rgba(5,16,38,0.85)] sm:text-xl">
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
        @keyframes heroHalo {
          0%, 100% { opacity: 0.9; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(1.08); }
        }
        @keyframes slowSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes logoPulse {
          0%, 100% { opacity: 0; transform: scale(0.95); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        @keyframes logoOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
