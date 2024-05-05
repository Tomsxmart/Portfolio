"use client";
import { useEffect, useRef, useState } from "react";

const useMousePos = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const demoRef = useRef(null);
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (e.target.getAttribute("data-name") === "test") {
      }
    };

    document.addEventListener("pointermove", handleMouseMove);
    return () => {
      document.removeEventListener("pointermove", handleMouseMove);
    };
  }, []);

  return mousePos;
};
export default useMousePos;
