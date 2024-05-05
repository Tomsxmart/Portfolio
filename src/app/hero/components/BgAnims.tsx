"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "./BgAnims.module.css";
import Info from "./Info";
import Hero from "../Hero";
const BgAnims = () => {
  const demoRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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
  const pos = mousePos.x + "px " + mousePos.y + "px";

  return (
    <div
      data-name="element"
      ref={demoRef}
      className={styles["demo"] + " absolute top-0 left-0 w-full"}
    >
      <div
        style={{ maskPosition: pos, padding: "50px" }}
        className={styles["element"]}
      >
        <Hero bg="#004C44" title="Hello world" />
      </div>
    </div>
  );
};

export default BgAnims;
