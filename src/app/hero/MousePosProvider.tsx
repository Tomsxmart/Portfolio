import React, { createContext, useContext, useState } from "react";
interface mousePosTypes {
  x: Number;
  y: number;
}
const mousePosDef = { x: 0, y: 0 };
const MousePosContext = createContext({ value: { mousePosDef } });

export const MousePosProvider = ({ children }) => {
  const [mousePos, setMousePos] = useState(mousePosDef);

  const updateMousePos: Object<Number> = (x, y) => {
    setMousePos({ x, y });
  };

  return (
    <MousePosContext.Provider value={{ mousePos, updateMousePos }}>
      {children}
    </MousePosContext.Provider>
  );
};

export const useMousePos = () => useContext(MousePosContext);
