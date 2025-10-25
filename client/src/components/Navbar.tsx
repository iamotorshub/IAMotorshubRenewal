// client/src/components/Navbar.tsx
// Simplified version — solo logo, transparente y fijo arriba a la izquierda

import React from "react";
import logoPath from "@assets/IA MOTORSHUB LOGO_1758912846792.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 bg-transparent">
      <div className="pl-6 pt-4">
        <img
          src={logoPath}
          alt="IA MOTORSHUB"
          className="h-48 w-auto brightness-0 invert"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>
    </nav>
  );
}
