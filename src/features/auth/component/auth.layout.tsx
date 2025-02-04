import { Globe } from "lucide-react";
import React from "react";

export default function AuthLayout({ children } : React.PropsWithChildren) {

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 min-h-screen font-inter">
      <section className="bg-blue-500 p-8 md:flex flex-col justify-between hidden">
        <h3 className="text-3xl font-bold text-white flex gap-x-2">
          <Globe size={32} />
          AtlasAI
        </h3>
        <p className="text-white font-medium">
          "AtlasAI is your smart companion for exploring the world. Get instant insights, travel recommendations, and country-specific information - all powered by AI."
        </p>
      </section>
      {children}
    </main>
  )
}