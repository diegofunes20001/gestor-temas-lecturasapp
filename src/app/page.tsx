"use client";
import TemaItem from "./Components/Temaltem";
import TemaList from "./Components/TemaList";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
         <h1 className="text-2xl font-bold">Gestor de Temas de Lectura</h1>
         <TemaItem tema={{ id: 1, titulo: 'Tema de Ejemplo', interesante: false }} />
          <TemaList tema={{ id: 1, titulo: 'Ejemplo de Tema', interesante: false }} nombre={''} />
        </div>
      </main>
    </div>
  );
}
