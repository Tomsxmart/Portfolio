"use client";
import { useRef } from "react";
import Hero from "./hero/Hero";
import BgAnims from "./hero/components/BgAnims";
import useMousePos from "@/components/hooks/useMousePos";

export default function Home() {
  const { x: mouseX, y: MouseY } = useMousePos();

  const pos = mouseX + "px " + MouseY + "px";

  return (
    <>
      <main className=" text-[#b0b2c3] min-h-screen">
        <Hero />
      </main>
      <BgAnims />
    </>
  );
}
