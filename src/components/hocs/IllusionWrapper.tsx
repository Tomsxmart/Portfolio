import React, { ReactNode } from "react";

const illusionWrapper = ({ children }) => {
  const Illusion = (ComponentWrapper: React.ComponentType<any>) => {
    return (
      <>
        {children}
        <ComponentWrapper />
      </>
    );
  };

  return Illusion;
};

export default illusionWrapper;
